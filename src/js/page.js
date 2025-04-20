import './tab_fnc'; // fungsi untuk hapus hidden tab
import project from "./project";
import skill from "./skill";

export default function pages() {
    return `<!--- Tab ---> 
    <div class="w-full px-6 py-4">
      <div class="flex overflow-x-auto no-scrollbar gap-4 mb-6 snap-x snap-mandatory">
  <button class="tab-button snap-start shrink-0 px-4 py-2 rounded-md font-bold text-primary flex items-center gap-1" data-target="aboutme">
    <i class="ri-information-line"></i> About Me
  </button>
  <button class="tab-button snap-start shrink-0 px-4 py-2 rounded-md flex items-center gap-1" data-target="project">
    <i class="ri-git-repository-line"></i> Project
  </button>
  <button class="tab-button snap-start shrink-0 px-4 py-2 rounded-md flex items-center gap-1" data-target="skill">
    <i class="ri-hammer-fill"></i> Skills
  </button>
  <button class="tab-button snap-start shrink-0 px-4 py-2 rounded-md flex items-center gap-1" data-target="experience">
    <i class="ri-flask-fill"></i> Experience
  </button>
  <button class="tab-button snap-start shrink-0 px-4 py-2 rounded-md flex items-center gap-1" data-target="developed">
    <i class="ri-forbid-fill"></i> In Developed
  </button>
</div>


      <!--- About Me --->
      <div id="aboutme" class="transition-all duration-300 ease-in-out opacity-100 scale-100">
      <h2 class="text-sm font-semibold uppercase opacity-60 mb-2"><i class="ri-user-3-line mr-1"></i> About Me</h2>
       <p class="text-sm leading-relaxed">
    Saya adalah developer junior yang passionate di bidang frontend & backend development. Saat ini fokus di pengembangan tools dan automation menggunakan JavaScript & Node.js. Ngoding itu seru cik XD
  </p>
      </div>
      <!--- About Me End --->

      <!--- Project---> 
      <div id="project" class="transition-all duration-300 ease-in-out hidden opacity-0 scale-95 space-y-6">
        ${project()}
      </div>
      <!--- Project End --->

    <!-- Skill -->
      <div id="skill" class="transition-all duration-300 ease-in-out hidden opacity-0 scale-95 space-y-6">
        ${skill()}
      </div>
      <!--- Skill End --->
      
      <!-- Experience -->
      <div id="experience" class="transition-all duration-300 ease-in-out hidden opacity-0 scale-95 space-y-4">
        <h2 class="text-sm font-semibold uppercase opacity-60 mb-2"><i class="ri-briefcase-line mr-1"></i> Experience</h2>
        <div>
          <div class="font-semibold">Freelance Web Developer</div>
          <div class="text-xs opacity-60">2022 - Sekarang</div>
          <p class="text-sm mt-1">Membuat dan maintain beberapa website tools & bot API.</p>
        </div>
      </div>
      <!--- Experience End --->

    </div>
    `
}
