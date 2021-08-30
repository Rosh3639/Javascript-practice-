let modalBtn = document.querySelector(".modal-btn");
let modalOverlay = document.querySelector(".modal-overlay");
let closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", () => modalOverlay.classList.add("open-modal"));
closeBtn.addEventListener("click", () => modalOverlay.classList.remove("open-modal"));