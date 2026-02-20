import { useState } from 'react';
import type { MediaItem } from '../data/projects';

interface ImageSlideshowProps {
  media: MediaItem[];
  title: string;
}

export default function ImageSlideshow({ media, title }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  if (media.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-800  flex items-center justify-center">
        <p className="text-gray-400">No media available</p>
      </div>
    );
  }

  const current = media[currentIndex];
  // const label = current.type === 'video' ? 'Video' : `Image ${currentIndex + 1}`;

  return (
    <div className="w-full">
      {/* <div className="mb-2 text-sm text-gray-600">{title}, {label}</div> */}
      <div className="relative w-full h-[500px] bg-gray-800  overflow-hidden">
        {current.type === 'video' ? (
          <video
            src={current.url}
            controls
            className="w-full h-full object-contain"
            playsInline
          />
        ) : (
          <img
            src={current.url}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-contain transition-opacity duration-300 ease-in-out"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-full flex items-center justify-center text-gray-400';
                placeholder.textContent = 'Image not found';
                parent.appendChild(placeholder);
              }
            }}
          />
        )}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
      {media.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-sm text-[#16160E]">
            {currentIndex + 1}/{media.length}
          </span>
          <div className="flex gap-1">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#16160E] w-3'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

