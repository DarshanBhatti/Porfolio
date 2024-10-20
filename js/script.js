const menuIcon = document.querySelector("#menu-icons");
const navLinks = document.querySelector(".nav-links");

// Toggle the 'active' class on navLinks when the menuIcon is clicked
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

// Close navbar when a link is clicked
const navLinkItems = document.querySelectorAll(".nav-links a");

navLinkItems.forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("active");
}));





const toggleSwitch = document.querySelector('#switch');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

// Apply the current theme on page load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Listen for toggle switch change and apply theme
toggleSwitch.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

function downloadResume() {
    const link = document.createElement('a');
    link.href = '../darshan bhatii.pdf';
    link.download = 'resume.pdf'; 
    link.click();
}
