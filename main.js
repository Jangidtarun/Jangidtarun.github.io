const themebtn = document.getElementById('theme-btn');

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Apply initial theme based on system preference or saved preference
function applyInitialTheme() {
    const userPreference = localStorage.getItem('theme');
    if (userPreference) {
        document.body.classList.toggle('dark-theme', userPreference === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
    }
}

themebtn.addEventListener('click', toggleTheme);

applyInitialTheme();
