const toggleButton = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", function () {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
});

document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        sidebar.style.width = "0";
    });
});

let popup = document.getElementById("popup");
const inputs = document.querySelectorAll(".contactme");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
            input.style.border = "1px solid red";
        } else {
            input.style.border = "1px solid #4AA8FF";
        }
    });

    if (allFilled) {
        popup.classList.add("open-popup");
    }
});

function closePopup() {
    popup.classList.remove("open-popup");
}
