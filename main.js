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
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}