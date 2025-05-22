// This function toggles the visibility of a menu when a menu icon is clicked.
document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.id === 'menu-icon') {
        const menu = document.getElementById('dropdown-menu');
        menu.classList.toggle('hidden');
    }
});

// This function adds an active class to the menu link clicked.
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove 'active' class from all links
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        e.target.classList.add('active');
        // Hide the menu after clicking a link
        const menu = document.getElementById('dropdown-menu');
        menu.classList.add('hidden');
    })
});

// This function closes the menu when clicking outside of it.
document.addEventListener('click', function(e) {
    const menu = document.getElementById('dropdown-menu');
    const menuIcon = document.getElementById('menu-icon');
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.add('hidden');
    }
});