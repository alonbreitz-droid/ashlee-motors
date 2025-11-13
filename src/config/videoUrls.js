// Video URLs - Supports direct video URLs from any hosting service
// Options: Backblaze B2, Bunny CDN, compressed videos on Pages, or any CDN
// Format: Full URL (e.g., "https://example.com/video.mp4")
// Or: Local path for compressed videos (e.g., "/assets/hero-compressed.mp4")
export const videoUrls = {
  // Hero video - Direct URL or local path
  // Set via environment variable: VITE_HERO_VIDEO_URL
  // Or use local compressed video: /assets/hero-compressed.mp4
  heroVideo: import.meta.env.VITE_HERO_VIDEO_URL || '/assets/Ash-Lee Reel 1.mp4',
  
  // About video - Direct URL or local path
  // Set via environment variable: VITE_ABOUT_VIDEO_URL
  // Or use local compressed video: /assets/about-compressed.mp4
  aboutVideo: import.meta.env.VITE_ABOUT_VIDEO_URL || '/assets/Ash-Lee reel 2.mp4',
};


