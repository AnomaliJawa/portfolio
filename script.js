document.addEventListener('DOMContentLoaded', function() {
    // Update tahun di footer secara dinamis
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Fungsi untuk toggle menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('#navbar .nav-links'); // Lebih spesifik

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Mengubah ikon hamburger menjadi 'X' dan sebaliknya (opsional)
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Menutup menu mobile ketika salah satu link di dalamnya diklik (untuk SPA feel)
    if (navLinks) {
        const linksInsideNav = navLinks.querySelectorAll('a');
        linksInsideNav.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    // Kembalikan ikon ke bars
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Smooth scroll untuk semua link anchor (opsional, browser modern banyak yang sudah handle)
    // Anda sudah punya scroll-behavior: smooth; di CSS, jadi ini mungkin tidak perlu.
    // Tapi jika ingin kontrol lebih:
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */
});