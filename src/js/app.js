import profile from '/profile.jpg';
import sampul from '/bg-gojo.gif';
import pages from './page.js';
import 'remixicon/fonts/remixicon.css';

document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center p-2 space-y-10 w-full max-w-4xl mx-auto">
    <!-- PROFILE CNT-->
    <div class="flex flex-col items-center text-center space-y-4 w-full relative">
      
      <!-- Sampul -->
      <div class="w-screen h-48 bg-cover bg-center rounded-xl" style="background-image: url('${sampul}');"></div>

      <!-- Avatar -->
      <div id="profil" class="avatar absolute top-30">
        <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 avatar-online">
          <img src="${profile}" alt="Profile Picture" />
        </div>
      </div>
      
      <!-- NAME -->
      <div class="flex flex-wrap items-center justify-center gap-2 items-center mt-16">
      <h1 class="text-2xl font-bold">
        Rizky Adi N.
      </h1>
      <!-- VERIFIED -->
      <i class="ri-verified-badge-fill text-lg text-blue-500"></i>
      </div>
      <!-- DESCRIPTION -->
      <p class="max-w-md mt-[-15px] text-gray-500">Im just newbie</p>

      <!-- Badge -->
      <div class="flex flex-wrap gap-2">
        <div class="badge badge-outline badge-info flex items-center gap-1">
          <i class="ri-code-s-slash-line text-lg"></i> Coding
        </div>
        <div class="badge badge-outline badge-info flex items-center gap-1">
          <i class="ri-gamepad-line text-lg"></i> Gaming
        </div>
        <div class="badge badge-outline badge-info flex items-center gap-1">
          <i class="ri-music-fill text-lg"></i> Music
        </div>
      </div>
      <!-- Badge end -->

      <!-- Sosmed -->
      <div class="flex gap-3 text-2xl">
        <a href="https://youtube.com/@rizxyu" target="_blank" class="hover:text-red-500 transition" rel="noopener noreferrer">
          <i class="ri-youtube-fill"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100064516381260" target="_blank" class="hover:text-blue-500 transition" rel="noopener noreferrer">
          <i class="ri-facebook-circle-fill"></i>
        </a>
        <a href="https://www.instagram.com/kyad_ue/" target="_blank" class="hover:text-pink-500 transition" rel="noopener noreferrer">
          <i class="ri-instagram-line"></i>
        </a>
        <a href="https://t.me/rizxyu" target="_blank" class="hover:text-blue-400 transition" rel="noopener noreferrer">
          <i class="ri-telegram-fill"></i>
        </a>
        <a href="https://github.com/rizxyu" target="_blank" class="hover:text-blue-400 transition" rel="noopener noreferrer">
          <i class="ri-github-fill"></i>
        </a>
        <a href="https://wa.me/message/XSLJWDRWSN6ZP1" target="_blank" class="flex items-center gap-1 bg-base-200 px-2 py-0.5 rounded-xl text-sm hover:bg-base-100 hover:text-green-500 transition" rel="noopener noreferrer">
          <i class="ri-whatsapp-fill"></i> Rizky
        </a>
      </div>
      <!-- Sosmed end -->
    </div>
    <!-- PROFILE CNT END -->

    <!-- PAGE CONTENT -->
    ${pages()}
    <!-- PAGE CONTENT end-->

    <footer class="w-full footer sm:footer-horizontal footer-center bg-base-100 text-base-content p-4">
  <aside>
    <p>Copyright © ${new Date().getFullYear()} Rizxyu - All rights reserved</p>
  </aside>
</footer>
  </div>
`;
