"use client";
import projectData from "@/json/project.json";
import { useRef } from "react";

const ProjectCarousel = () => {
  const projects = projectData;
  const carouselRef = useRef(null);

  // Drag-scroll handler
  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    let startX = e.pageX - carousel.offsetLeft;
    let scrollLeft = carousel.scrollLeft;
    let isDown = true;
    carousel.classList.add('dragging');
    const onMouseMove = (ev) => {
      if (!isDown) return;
      ev.preventDefault();
      const x = ev.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.2;
      carousel.scrollLeft = scrollLeft - walk;
    };
    const onMouseUp = () => {
      isDown = false;
      carousel.classList.remove('dragging');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  if (!projects.length) return null;

  return (
    <div className="card bg-base-100 shadow-xl flex flex-col">
      <div className="card-body flex flex-col pb-4">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <i className="ri-folder-3-line text-xl sm:text-2xl text-primary"></i>
            <h2 className="text-xl sm:text-2xl [font-family:var(--font-poppins)] font-bold">Hasil Project</h2>
          </div>
          <hr className="w-32 h-[2px] bg-primary border-0 rounded mt-2" />
        </div>
        <div
          ref={carouselRef}
          className="carousel carousel-center w-full px-2 py-3 space-x-4 rounded-box overflow-x-auto cursor-grab select-none"
          style={{ WebkitOverflowScrolling: 'touch', minHeight: '120px', maxHeight: '220px' }}
          onMouseDown={handleMouseDown}
        >
          {projects.map((project, idx) => (
            <div key={idx} className="carousel-item w-72 max-w-xs">
              <div className="card bg-base-200 shadow flex flex-col h-full p-4 gap-2">
                <div className="font-bold text-base [font-family:var(--font-poppins)]">{project.name}</div>
                <div className="text-xs text-base-content/70 mb-1">{project.desc}</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tag && project.tag.map((tag, i) => (
                    <span key={i} className="badge badge-sm badge-outline">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-primary">Live Demo</a>
                  )}
                  {project.githubRepo ? (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="btn btn-xs btn-neutral">GitHub</a>
                  ) : (
                    <span className="btn btn-xs btn-disabled">No Repo</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
