// Video URLs - Supports direct video URLs from any hosting service
// Options: Backblaze B2, Bunny CDN, compressed videos on Pages, or any CDN
// Format: Full URL (e.g., "https://example.com/video.mp4")
// Or: Local path for compressed videos (e.g., "/assets/hero-compressed.mp4")
export const videoUrls = {
  // Hero video - Direct URL or local path
  // Priority: Environment variable > Compressed video > Original (fallback)
  heroVideo: import.meta.env.VITE_HERO_VIDEO_URL || '/assets/compressed/hero-video.mp4',
  
  // About video - Direct URL or local path
  // Priority: Environment variable > Compressed video > Original (fallback)
  aboutVideo: import.meta.env.VITE_ABOUT_VIDEO_URL || '/assets/compressed/about-video.mp4',
};


