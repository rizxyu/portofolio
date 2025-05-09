import hutao from '/hutao.png';

export default function pj() {
    return `<ul class="list bg-base-100 rounded-box shadow-md w-full">
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
        </ul>`
}