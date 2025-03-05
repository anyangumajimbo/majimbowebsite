function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navLinksContainer = document.getElementById("navLinks");
        navLinksContainer.classList.remove("active"); // Remove the "active" class
    });
});