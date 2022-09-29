const mobileMenuToggle = document.querySelector(".mobile-nav-toggle");
const mobileMenu = document.querySelector("#primary-navigation");

mobileMenuToggle.addEventListener('click', handleClick);

function handleClick(e) {
    const visibility = mobileMenu.dataset.visible;
    if (visibility === "false") {
        mobileMenu.style.display = "flex";
        mobileMenu.dataset.visible = true;
        mobileMenuToggle.ariaExpanded = true;
    } else {
        mobileMenu.style.display = "none";
        mobileMenu.dataset.visible = false;
        mobileMenuToggle.ariaExpanded = false;
    }
}