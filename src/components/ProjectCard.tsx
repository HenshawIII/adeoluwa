import { useState } from 'react';
import type { Project } from '../data/projects';
import ImageSlideshow from './ImageSlideshow';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FBFBEB] shadow-sm border border-gray-800 overflow-hidden transition-all duration-300 ease-in-out">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between  transition-colors duration-200"
      >
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold text-[#16160E] mb-2">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1  text-[#16160E]  text-sm italic"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="ml-4">
          <svg
            className={`w-5 h-5 text-[#16160E] transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 border-t border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            <div>
              <p className="text-[#16160E] leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
              {/* <p className="text-sm text-gray-500 mt-4 italic">
                Tip: Replace the image paths with your real exports, keep each project to 6 to 15 images.
              </p> */}
            </div>
            <div>
              <ImageSlideshow media={project.media} title={project.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

