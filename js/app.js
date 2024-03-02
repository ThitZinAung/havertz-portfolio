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


window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    console.log(scroll);
    if (scroll >= 50) {
        document.querySelector(".sticky").classList.add("stickyadd");
    } else {
        document.querySelector(".sticky").classList.remove("stickyadd");
    }

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

});



