// Get references to elements
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const heart = document.getElementById("heart");
const popupModal = document.getElementById("popup-modal");
const tryAgainButton = document.getElementById("try-again-button");
const clickText = document.getElementById("click-text");
const correctPopup = document.getElementById("correct-popup");
const continueButton = document.getElementById("continue-button");

// Ensure everything is hidden on page load
popupModal.classList.add("hidden");
correctPopup.classList.add("hidden");
clickText.classList.remove("hidden"); // Show "Click my heart" text initially

// Helper function to hide all popups
function hideAllPopups() {
    popupModal.classList.add("hidden");
    correctPopup.classList.add("hidden");
    clickText.classList.add("hidden");
}

// Event listener for pic1 click (Correct)
pic1.addEventListener("click", () => {
    hideAllPopups(); // Ensure other elements are hidden
    correctPopup.classList.remove("hidden"); // Show correct popup
});

// Event listener for pic2 or heart click (Wrong)
[pic2, heart].forEach(element => {
    element.addEventListener("click", () => {
        hideAllPopups(); // Ensure other elements are hidden
        popupModal.classList.remove("hidden"); // Show wrong popup
    });
});

// Try again button functionality
tryAgainButton.addEventListener("click", () => {
    popupModal.classList.add("hidden"); // Hide wrong popup
    clickText.classList.remove("hidden"); // Show "Click my heart" text
});

// Continue button functionality to navigate to a new page
continueButton.addEventListener("click", () => {
    window.location.href = "letter.html"; // Replace 'nextpage.html' with your target page
});
