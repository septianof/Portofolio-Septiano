const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Mengubah warna navbar saat scroll
    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark');
    } else {
        nav.classList.remove('nav-dark');
    }

    // Menentukan section mana yang aktif
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 3 && scrollPosition < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');

            // Menghapus kelas active dari semua link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Menambahkan kelas active pada link yang sesuai
            const activeLink = document.querySelector(`.nav-link[href="#${currentId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Menandai tautan "Profil" sebagai aktif saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.querySelector('.nav-link[href="#profil"]');
    if (profileLink) {
        profileLink.classList.add('active');
    }

    // Menggulung halaman ke bagian atas (section "Profil")
    window.scrollTo(0, 0);
});