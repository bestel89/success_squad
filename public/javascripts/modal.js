//!CACHING DOM ELEMENTS
const createObjModalEl = document.querySelector(".createObjModal")
const editObjModalEl = document.querySelector(".editObjModal")
const delBModalEl = document.querySelector(".delBModal")
const delObjModalEl = document.querySelector(".delObjModal")

const closeCreateEl = document.getElementById("closeCreateBtn")
const closeEditEl = document.getElementById("closeEditBtn")
const delBCancelBtnEl = document.getElementById("delBCancelBtn")
const delObjCancelBtnEl = document.getElementById("delObjCancelBtn2")

const overlay = document.querySelector(".overlay")

//Bespoke buttons
const createOKRBtn = document.getElementById('createOKRBtn')
const editOKRBtns = document.querySelectorAll('button[id^=editOKRBtn]')
const delBModalOpenBtnEl = document.getElementById("deleteBtn")
const delObjBtns = document.querySelectorAll('button[id^=delObjBtn]')

//Forms
const editObjFormEl = document.getElementById('editObjForm')
const delObjModalFormEL = document.getElementById('delObjModalForm')

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

async function openDelObjModal(evtTarget) {
    delObjModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden")
    objIDToDelete = evtTarget.getAttribute("objID")
    await delObjModalFormEL.setAttribute("action", `/objectives/${objIDToDelete}?_method=DELETE`)
}

function openDelModal() {
    console.log('del b modal firing')
    delBModalEl.classList.remove("hidden")
    overlay.classList.remove("hidden") 
}

function closeModal() {
    console.log('close modal firing')
    createObjModalEl.classList.add("hidden")
    editObjModalEl.classList.add("hidden")
    delBModalEl.classList.add("hidden")
    delObjModalEl.classList.add("hidden")
    overlay.classList.add("hidden")
}

//!EVENT LISTENERS
editOKRBtns.forEach(function(btn) {
    btn.addEventListener('click', event => {
         openObjEditModal(event.target)
    })
})

delObjBtns.forEach(function(btn) {
    btn.addEventListener('click', event => {
         openDelObjModal(event.target)
    })
})

createOKRBtn.addEventListener("click", openObjCreateModal)
delBModalOpenBtnEl.addEventListener("click", openDelModal)

closeCreateEl.addEventListener("click", closeModal)
closeEditEl.addEventListener("click", closeModal)
delObjCancelBtnEl.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)


console.log(objIDToEdit)