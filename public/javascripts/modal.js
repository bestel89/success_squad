//!CACHING DOM ELEMENTS
const createObjModalEl = document.querySelector(".createObjModal")
const editObjModalEl = document.querySelector(".editObjModal")
const delBModalEl = document.querySelector(".delBModal")

const closeCreateEl = document.getElementById("closeCreateBtn")
const closeEditEl = document.getElementById("closeEditBtn")
const delBCancelBtnEl = document.getElementById("delBCancelBtn")

const overlay = document.querySelector(".overlay")

//Bespoke buttons
const createOKRBtn = document.getElementById('createOKRBtn')
const editOKRBtns = document.querySelectorAll('button[id^=editOKRBtn]')
const delBModalOpenBtnEl = document.getElementById("deleteBtn")

//Forms
const editObjFormEl = document.getElementById('editObjForm')

//! CONSTS
let objIDToEdit = null

//! SUPPORTING FUNCTIONS
function openObjCreateModal() {
    createObjModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

async function openObjEditModal(evtTarget) {
    console.log(evtTarget)
    editObjModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden")
    objIDToEdit = evtTarget.getAttribute("objID")
    await editObjFormEl.setAttribute("action", `/objectives/${objIDToEdit}?_method=UPDATE`)
}

function openDelModal() {
    console.log('del b modal firing')
    delBModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

function closeModal() {
    createObjModalEl.classList.add("hidden")
    editObjModalEl.classList.add("hidden")
    delBModalEl.classList.add("hidden")
    overlay.classList.add("hidden")
}

//!EVENT LISTENERS
editOKRBtns.forEach(function(btn) {
    btn.addEventListener('click', event => {
         console.log(event.target)
         openObjEditModal(event.target)
    })
})
createOKRBtn.addEventListener("click", openObjCreateModal)
delBModalOpenBtnEl.addEventListener("click", openDelModal)

closeCreateEl.addEventListener("click", closeModal)
closeEditEl.addEventListener("click", closeModal)
delBCancelBtnEl.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)


console.log(objIDToEdit)