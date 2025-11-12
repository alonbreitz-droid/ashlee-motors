<?php
require_once __DIR__ . '/config.php';
$pageTitle = 'Gallery';
include __DIR__ . '/includes/header.php';

// Categorize images (alternating for variety)
$categorizedImages = [];
foreach ($galleryImages as $index => $image) {
    $categorizedImages[] = [
        'id' => $index,
        'filename' => $image,
        'category' => ($index % 3 === 0) ? 'bodywork' : 'mechanical'
    ];
}
?>

<main>
    <section class="section">
        <div class="container">
            <h1>Gallery</h1>
            
            <div class="gallery-filters">
                <button class="filter-btn active" data-filter="all" onclick="filterGallery('all')">
                    All
                </button>
                <button class="filter-btn" data-filter="bodywork" onclick="filterGallery('bodywork')">
                    Bodywork
                </button>
                <button class="filter-btn" data-filter="mechanical" onclick="filterGallery('mechanical')">
                    Mechanical
                </button>
            </div>

            <div class="gallery-grid" id="gallery-grid">
                <?php foreach ($categorizedImages as $item): ?>
                    <div 
                        class="gallery-item" 
                        data-category="<?php echo htmlspecialchars($item['category']); ?>"
                        onclick="openModal(<?php echo $item['id']; ?>)"
                    >
                        <img 
                            src="/assets/gallery/<?php echo htmlspecialchars($item['filename']); ?>" 
                            alt="Ash-lee Motors <?php echo htmlspecialchars($item['category']); ?>"
                            loading="lazy"
                        />
                    </div>
                <?php endforeach; ?>
            </div>

            <div id="no-results" style="text-align: center; padding: var(--space-8); display: none;">
                <p>No images found in this category.</p>
            </div>
        </div>
    </section>

    <!-- Modal/Lightbox -->
    <div id="gallery-modal" class="gallery-modal" onclick="closeModal()" style="display: none;">
        <button class="gallery-modal-close" onclick="closeModal()">×</button>
        <button class="gallery-modal-nav gallery-modal-prev" onclick="event.stopPropagation(); navigateImage('prev');">‹</button>
        <img id="modal-image" src="" alt="Ash-lee Motors" onclick="event.stopPropagation();" />
        <button class="gallery-modal-nav gallery-modal-next" onclick="event.stopPropagation(); navigateImage('next');">›</button>
    </div>
</main>

<script>
const allImages = <?php echo json_encode($categorizedImages); ?>;
let currentFilter = 'all';
let filteredImages = allImages;
let currentImageIndex = 0;

function filterGallery(filter) {
    currentFilter = filter;
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    const noResults = document.getElementById('no-results');
    
    buttons.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    filteredImages = filter === 'all' 
        ? allImages 
        : allImages.filter(item => item.category === filter);
    
    let visibleCount = 0;
    items.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
            item.style.display = 'block';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });
    
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
}

function openModal(imageId) {
    const image = allImages.find(img => img.id === imageId);
    if (!image) return;
    
    currentImageIndex = filteredImages.findIndex(img => img.id === imageId);
    if (currentImageIndex === -1) {
        currentImageIndex = 0;
    }
    
    updateModalImage();
    document.getElementById('gallery-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('gallery-modal').style.display = 'none';
    document.body.style.overflow = '';
}

function navigateImage(direction) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    } else {
        currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    updateModalImage();
}

function updateModalImage() {
    if (filteredImages.length === 0) return;
    const image = filteredImages[currentImageIndex];
    document.getElementById('modal-image').src = '/assets/gallery/' + image.filename;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('gallery-modal');
    if (modal.style.display === 'flex') {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
    }
});
</script>

<?php include __DIR__ . '/includes/footer.php'; ?>

