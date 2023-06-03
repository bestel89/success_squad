//!CACHING DOM ELEMENTS
const createObjModalEl = document.querySelector(".createObjModal")
const editObjModalEl = document.querySelector(".editObjModal")
const overlay = document.querySelector(".overlay")
const closeCreateEl = document.getElementById("closeCreateBtn")
const closeEditEl = document.getElementById("closeEditBtn")

//Bespoke buttons
const createOKRBtn = document.getElementById('createOKRBtn')
const editOKRBtns = document.querySelectorAll('button[id^=editOKRBtn]')

//Forms
const editObjFormEl = document.getElementById('editObjForm')

//! CONSTS
let objIDToEdit = null

//! SUPPORTING FUNCTIONS
function openObjCreateModal() {
    createObjModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

// function closeObjCreateModal() {
//     createObjModalEl.classList.add("hidden")
//     overlay.classList.add("hidden")
// }

async function openObjEditModal(evtTarget) {
    console.log(evtTarget)
    editObjModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden")
    objIDToEdit = evtTarget.getAttribute("objID")
    await editObjFormEl.setAttribute("action", `/objectives/${objIDToEdit}?_method=UPDATE`)
}

// function closeObjEditModal() {
//     editObjModalEl.classList.add("hidden")
//     overlay.classList.add("hidden")
// }

function closeModal() {
    createObjModalEl.classList.add("hidden")
    editObjModalEl.classList.add("hidden")
    overlay.classList.add("hidden")
}

//!EVENT LISTENERS
editOKRBtns.forEach(function(btn) {
    btn.addEventListener('click', event => {
         console.log(event.target)
         openObjEditModal(event.target)
    })
})

createOKRBtn.addEventListener("click", openObjCreateModal);
// editOKRBtn.addEventListener("click", openObjEditModal);
closeCreateEl.addEventListener("click", closeModal);
closeEditEl.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


console.log(objIDToEdit)