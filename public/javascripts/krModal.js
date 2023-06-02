//!CACHING DOM ELEMENTS
//SUBMIT BUTTONS IN THE MODALS
const createKRModalEl = document.querySelector(".createKRModal")
// const editKRModalEl = document.querySelector(".editKRModal")

//BUTTONS TO CLOSE MODALS
const closeCreateKREl = document.getElementById("closeCreateKRBtn")
// const closeEditKREl = document.getElementById("closeEditKRBtn")

//OVERLAY
const krOverlay = document.querySelector(".krOverlay")

//BUTTONS TO OPEN MODALS
const addKRBtn = document.getElementById('addKRBtn')
// const editKRBtn = document.querySelectorAll('editKRBtn')

//Forms
// const editObjFormEl = document.getElementById('editObjForm')

// //! CONSTS
// let objIDToEdit = null

// //! SUPPORTING FUNCTIONS
function openKRCreateModal() {
    console.log('boom')
    createKRModalEl.classList.remove("hidden")
    krOverlay.classList.remove("hidden") 
}

// // function closeObjCreateModal() {
// //     createObjModalEl.classList.add("hidden")
// //     overlay.classList.add("hidden")
// // }

// async function openObjEditModal(evtTarget) {
//     console.log(evtTarget)
//     editObjModalEl.classList.remove("hidden")
//     overlay.classList.remove("hidden")
//     objIDToEdit = evtTarget.getAttribute("objID")
//     await editObjFormEl.setAttribute("action", `/objectives/${objIDToEdit}?_method=UPDATE`)
// }

// // function closeObjEditModal() {
// //     editObjModalEl.classList.add("hidden")
// //     overlay.classList.add("hidden")
// // }

function closeModal() {
    console.log('firing')
    createKRModalEl.classList.add("hidden")
    // editObjModalEl.classList.add("hidden")
    krOverlay.classList.add("hidden")
}

// //!EVENT LISTENERS
// editOKRBtns.forEach(function(btn) {
//     btn.addEventListener('click', event => {
//          console.log(event.target)
//          openObjEditModal(event.target)
//     })
//  })

addKRBtn.addEventListener("click", openKRCreateModal);
// // editOKRBtn.addEventListener("click", openObjEditModal);
// closeCreateEl.addEventListener("click", closeModal);
// closeEditEl.addEventListener("click", closeModal);
krOverlay.addEventListener("click", closeModal);
closeCreateKREl.addEventListener("click", closeModal)

// console.log(objIDToEdit)