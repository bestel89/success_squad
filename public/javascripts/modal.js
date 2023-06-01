//!CACHING DOM ELEMENTS
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".btn-close")

//Bespoke buttons
const createOKRBtn = document.getElementById('createOKRBtn')

//! SUPPORTING FUNCTIONS
function openModal() {
    console.log('run open modal')
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

function closeModal() {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

//!EVENT LISTENERS
createOKRBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
