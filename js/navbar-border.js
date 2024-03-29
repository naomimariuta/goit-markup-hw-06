document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll(".navbar-list-item");

    navLinks.forEach(function(navLink) {
        if (navLink.href === currentLocation) {
            navLink.classList.add("active-page");
        }
    });
});