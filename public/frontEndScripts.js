
let deleteOverlay = document.getElementById("delete-overlay");
let deleteButtons = document.querySelectorAll("#delete-btn");
let deleteConfirm = document.getElementById("delete-confirm");
let deleteCancel = document.getElementById("delete-cancel");

let currentMessageId = null;

deleteButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();
        deleteOverlay.style.display = "flex";

        currentMessageId = this.getAttribute("data-id");
    })
})

deleteCancel.addEventListener("click", function(e) {
    e.preventDefault();
    deleteOverlay.style.display = "none";
    currentMessageId = null;
})

deleteConfirm.addEventListener("click", function(e) {
    e.preventDefault();

    if(currentMessageId) {
        window.location.href = `/messages/${currentMessageId}/delete`
    }

    deleteOverlay.style.display = "none";
})