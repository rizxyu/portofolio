'use client'

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import StatsDisplay from '@/components/StatsDisplay';
import techStack from '@/json/stack.json';
import ProjectCarousel from "@/components/ProjectCarousel";

gsap.registerPlugin(TextPlugin);

export default function Home() {
  const container = useRef(null);

  const getGreeting = () => {
    // Jakarta is UTC+7
    const now = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
    const hour = now.getUTCHours();

    if (hour >= 5 && hour < 12) {
      return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon!";
    } else if (hour >= 18 && hour < 22) {
      return "Good evening!";
    } else {
      return "Good night!";
    }
  };

  useGSAP(() => {
    gsap.from(".animate-in", {
      duration: 0.7,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    });

    gsap.to(".about-text", {
        duration: 2.5,
        text: "Hello, I'm Rizky, a junior full-stack developer.",
        ease: "none",
        delay: 0.8,
    });

  }, { scope: container });

  return (
    <main ref={container} className="flex flex-col items-center justify-center bg-base-200 p-4 w-full">
      <div className="w-full max-w-4xl text-left mb-4 animate-in">
        <p className="text-2xl font-bold [font-family:var(--font-poppins)]">{getGreeting()} Welcome!</p>
      </div>
      
      <div className="w-full max-w-4xl mb-6 px-4 animate-in">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <i className="ri-user-line text-xl sm:text-2xl text-primary"></i>
            <h2 className="text-xl sm:text-2xl [font-family:var(--font-poppins)] font-bold">About Me</h2>
          </div>
          <hr className="w-24 h-[2px] bg-primary border-0 rounded mt-2" />
        </div>
        {/* Teks ini akan diisi oleh animasi GSAP */}
        <p className="font-sans text-base-content/80 about-text min-h-[48px] sm:min-h-[24px]"></p>
      </div>
      
      {/* Grid responsif untuk Tech Stack dan Project */}
      <div className="w-full max-w-4xl mb-6 animate-in grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Card Tech Stack di kiri */}
        <div className="order-1 md:order-1 flex flex-col gap-6 h-auto md:h-fit self-start">
          {/* Tech Stack Card */}
          <div className="card bg-base-100 shadow-xl flex flex-col">
            <div className="card-body flex flex-col pb-4">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <i className="ri-code-s-slash-line text-xl sm:text-2xl text-primary"></i>
                  <h2 className="text-xl sm:text-2xl [font-family:var(--font-poppins)] font-bold">Tech Stack</h2>
                </div>
                <hr className="w-32 h-[2px] bg-primary border-0 rounded mt-2" />
              </div>
              <div
                className="carousel carousel-center w-full px-2 py-3 space-x-4 rounded-box overflow-x-auto cursor-grab select-none"
                style={{ WebkitOverflowScrolling: 'touch', minHeight: '56px', maxHeight: '120px' }}
                onMouseDown={e => {
                  const carousel = e.currentTarget;
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
                }}
              >
                {techStack.map((tech) => (
                  <div key={tech.name} className="carousel-item">
                    <div className={`badge badge-lg badge-outline ${tech.badgeClass}`}>{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Project Carousel Card */}
          <ProjectCarousel />
        </div>
        {/* StatsDisplay di grid kolom kanan */}
        <div className="order-2 md:order-2 flex items-stretch h-full">
          <StatsDisplay />
        </div>
      </div>
    </main>
  )
}
