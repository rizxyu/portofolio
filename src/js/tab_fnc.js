setTimeout(() => {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const targetSection = document.getElementById(target);

        // Sembunyiin semua section berdasarkan data-target yang ada
        tabButtons.forEach(b => {
          const id = b.dataset.target;
          const el = document.getElementById(id);
          if (el && id !== target) {
            el.classList.remove('opacity-100', 'scale-100');
            el.classList.add('opacity-0', 'scale-95');
            setTimeout(() => el.classList.add('hidden'), 200);
          }
        });

         // Tampilkan section yang dipilih
         if (targetSection) {
          targetSection.classList.remove('hidden', 'opacity-0', 'scale-95');
          targetSection.classList.add('opacity-100', 'scale-100');
        }

        // Ganti state tombol aktif
        tabButtons.forEach(b => b.classList.remove('font-bold', 'text-primary'));
        btn.classList.add('font-bold', 'text-primary');
      });
    });
  }, 0);