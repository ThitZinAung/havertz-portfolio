document.addEventListener('DOMContentLoaded', function () {

var wow = new WOW();
wow.init();

// Function to show the loading overlay
function showLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'flex';
    
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'none';

}

// Event listener for the 'beforeunload' event (when the page is about to be refreshed)
window.addEventListener('beforeunload', function() {
    showLoadingOverlay();
    
    // Adding a delay to ensure the loading overlay is displayed before the page unloads
    setTimeout(function() {
        hideLoadingOverlay();
    }, 3000); // Adjust the delay as needed
});

var typed = new Typed("#element", {
    strings: ["Thit Zin Aung", "Web Developer", "Frontend Developer", "Backend Developer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});

// Sticky and Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        const targetNavLink = document.querySelector('.navbar-nav a[href="#' + sectionId + '"]');

        if (targetNavLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                targetNavLink.classList.add('active-link');
            } else {
                targetNavLink.classList.remove('active-link');
            }
        }
    });

    const homeSection = document.getElementById('home');
    const homeLink = document.querySelector('.navbar-nav a[href="#home"]');

    if (scrollY >= homeSection.offsetTop - 50 && scrollY < homeSection.offsetTop + homeSection.offsetHeight - 50) {
        homeLink.classList.add('active-link');
    } else {
        homeLink.classList.remove('active-link');
    }
}

function handleStickyHeader() {
    var scroll = window.scrollY;

    if (scroll >= 50) {
        document.querySelector(".sticky").classList.add("stickyadd");
    } else {
        document.querySelector(".sticky").classList.remove("stickyadd");
    }
}

window.addEventListener('scroll', function () {
    scrollActive();
    handleStickyHeader();
});

// Trigger scrollActive and handleStickyHeader once on page load to set the initial state
scrollActive();
handleStickyHeader();

});



