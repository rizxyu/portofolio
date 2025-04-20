import hutao from '/hutao.png';

export default function pages() {
  setTimeout(() => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const sections = {
      project: document.getElementById('project'),
      skill: document.getElementById('skill'),
    };
  
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
  
        Object.entries(sections).forEach(([key, section]) => {
          if (key === target) {
            section.classList.remove('hidden', 'opacity-0', 'scale-95');
            section.classList.add('opacity-100', 'scale-100');
          } else {
            section.classList.remove('opacity-100', 'scale-100');
            section.classList.add('opacity-0', 'scale-95');
            setTimeout(() => section.classList.add('hidden'), 200); // delay buat animasi keluar
          }
        });
  
        tabButtons.forEach(b => b.classList.remove('font-bold', 'text-primary'));
        btn.classList.add('font-bold', 'text-primary');
      });
    });
  }, 0);
  

  
    return `<!--- Tab ---> 
    <div class="w-full px-6 py-4">
      <div class="flex items-start justify-start gap-6 mb-6">
        <button class="tab-button flex items-center gap-1 font-bold text-primary" data-target="project"><i class="ri-git-repository-line"></i> Project</button>
        <button class="tab-button flex items-center gap-1" data-target="skill"><i class="ri-hammer-fill"></i> Skills</button>
      </div>

<!--- Project---> 
      <div id="project" class="transition-all duration-300 ease-in-out opacity-100 scale-100">
        <ul class="list bg-base-100 rounded-box shadow-md w-full">
          <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Currently on Project</li>
          
          <li class="list-row flex items-center justify-between gap-4 p-4">
            <div class="flex items-center gap-3">
              <img class="size-10 rounded-box" src="${hutao}"/>
              <div>
                <div>Hutao Tools</div>
                <div class="text-xs uppercase font-semibold opacity-60">Web downloader</div>
              </div>
            </div>
            <a href="https://hutatools.my.id" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-square btn-ghost">
                <i class="ri-external-link-line"></i>
              </button>
            </a>
          </li>

          <li class="list-row flex items-center justify-between gap-4 p-4">
            <div class="flex items-center gap-3">
              <img class="size-10 rounded-box" src="/hyeone.jpg"/>
              <div>
                <div>Hyeone MD</div>
                <div class="text-xs uppercase font-semibold opacity-60">BOT WHATSAPP</div>
              </div>
            </div>
            <a href="https://hyebot.wzblueline.xyz" target="_blank" rel="noopener noreferrer">
              <button class="btn btn-square btn-ghost">
                <i class="ri-external-link-line"></i>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <!--- Project End --->

    <!-- Skill -->
      <div id="skill" class="transition-all duration-300 ease-in-out hidden opacity-0 scale-95 space-y-6">
  <!-- Programming Languages -->
  <div>
    <h2 class="text-sm font-semibold uppercase opacity-60 mb-2"><i class="ri-code-box-line mr-1"></i> Programming</h2>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-javascript-line mr-1 text-yellow-400"></i> JavaScript</span><span>85%</span>
      </div>
      <progress class="progress progress-warning w-full" value="85" max="100"></progress>
    </div>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-code-line mr-1 text-blue-600"></i> TypeScript</span><span>75%</span>
      </div>
      <progress class="progress progress-info w-full" value="75" max="100"></progress>
    </div>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-braces-line mr-1 text-indigo-600"></i> PHP</span><span>80%</span>
      </div>
      <progress class="progress progress-secondary w-full" value="80" max="100"></progress>
    </div>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-python-line mr-1 text-green-500"></i> Python</span><span>70%</span>
      </div>
      <progress class="progress progress-success w-full" value="70" max="100"></progress>
    </div>
  </div>

  <!-- Databases -->
  <div>
    <h2 class="text-sm font-semibold uppercase opacity-60 mb-2"><i class="ri-database-2-line mr-1"></i> Database</h2>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-database-line mr-1 text-red-500"></i> MySQL</span><span>70%</span>
      </div>
      <progress class="progress progress-error w-full" value="70" max="100"></progress>
    </div>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-file-json-line mr-1 text-orange-400"></i> JSON</span><span>90%</span>
      </div>
      <progress class="progress progress-warning w-full" value="90" max="100"></progress>
    </div>
  </div>

  <!-- Web Technologies -->
  <div>
    <h2 class="text-sm font-semibold uppercase opacity-60 mb-2"><i class="ri-global-line mr-1"></i> Web</h2>

    <div class="mb-3">
      <div class="flex justify-between text-sm mb-1">
        <span><i class="ri-html5-line mr-1 text-orange-500"></i> HTML</span><span>95%</span>
      </div>
      <progress class="progress progress-warning w-full" value="95" max="100"></progress>
    </div>
  </div>
</div>

      <!--- Skill End --->
    </div>
    `
}
