// Function to be executed when the page loads
function onPageLoad() {
    alert("View my Resume?");
}

// Function to open the page when the "Open" button is clicked
function openPage() {
    // You can add code here to navigate to the desired page or perform other actions.
    alert("Opening the page..."); // For demonstration purposes
}

// Add an event listener to call onPageLoad when the page finishes loading
window.addEventListener("load", onPageLoad);

// Add an event listener to call openPage when the "Open" button is clicked
document.getElementById("openButton").addEventListener("click", openPage);
