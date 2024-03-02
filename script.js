document.addEventListener("DOMContentLoaded", function () {
    var loadingContainer = document.getElementById("loading-container");
    var websiteContent = document.getElementById("website-content");

    // Simulate loading time (you can adjust the delay as needed)
    setTimeout(function () {
        // Add fade-out class to the loading container
        loadingContainer.classList.add("fade-out");

        // Show website content after the fade-out effect
        setTimeout(function () {
            loadingContainer.style.display = "none";
            websiteContent.style.display = "block";
            // Allow overflow after loading
            document.body.style.overflow = "auto";
        }, 1000); // Adjust the time (in milliseconds) based on the transition duration
    }, 4000); // Adjust the time (in milliseconds) as needed
});
