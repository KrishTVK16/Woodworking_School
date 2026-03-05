/*
 * Woodcraft Academy - Main Interactions
 */

document.addEventListener('DOMContentLoaded', function () {

    // Header Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Theme Toggle
    const themeToggles = document.querySelectorAll('#theme-toggle, .theme-toggle');

    // Load Preference globally early
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    }

    if (themeToggles.length > 0) {
        // Init Icons on load
        const isDarkInitial = document.body.classList.contains('dark-mode');
        themeToggles.forEach(t => t.innerHTML = isDarkInitial ? '☀️' : '🌙');

        themeToggles.forEach(toggle => {
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                document.body.classList.toggle('dark-mode');

                // Save preference
                const isDark = document.body.classList.contains('dark-mode');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');

                // Update Icons
                themeToggles.forEach(t => t.innerHTML = isDark ? '☀️' : '🌙');
            });
        });
    }

    // Mirror desktop active page into offcanvas menu (mobile/tablet)
    const mobileMenu = document.getElementById('mobileMenu');
    const desktopActiveLink = document.querySelector('.navbar .navbar-collapse .navbar-nav .nav-link.active[href]');
    if (mobileMenu && desktopActiveLink) {
        const activeHref = desktopActiveLink.getAttribute('href');
        const mobileLinks = mobileMenu.querySelectorAll('.offcanvas-body .nav-link[href]');

        mobileLinks.forEach(function (link) {
            link.classList.remove('active');
        });

        mobileMenu.querySelectorAll('.offcanvas-body .nav-link[href="' + activeHref + '"]').forEach(function (link) {
            link.classList.add('active');
        });
    }

    // Initialize Bootstrap tooltips/popovers if needed
    // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

});
