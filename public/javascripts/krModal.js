//!CACHING DOM ELEMENTS
//SUBMIT BUTTONS IN THE MODALS
const createKRModalEl = document.querySelector(".createKRModal")
const editKRModalEl = document.querySelector(".editKRModal")

//BUTTONS TO CLOSE MODALS
const closeCreateKREl = document.getElementById("closeCreateKRBtn")
const closeEditKREl = document.getElementById("closeEditKRBtn")

//OVERLAY
const krOverlay = document.querySelector(".krOverlay")

//BUTTONS TO OPEN MODALS
const addKRBtn = document.getElementById('addKRBtn')
const editKRBtns = document.querySelectorAll('button[id^=editKRBtn')

//Forms
const editKRFormEl = document.getElementById('editKRForm')

// //! SUPPORTING FUNCTIONS
function openKRCreateModal() {
    createKRModalEl.classList.remove("hidden")
    krOverlay.classList.remove("hidden") 
}


async function openKREditModal(evtTarget) {
    editKRModalEl.classList.remove("hidden")
    krOverlay.classList.remove("hidden")
    relatedObj = evtTarget.getAttribute("objID")
    krIDToEdit = evtTarget.getAttribute("krID")
    await editKRFormEl.setAttribute("action", `/krs/${krIDToEdit}?_method=UPDATE`)
}

function closeModal() {
    createKRModalEl.classList.add("hidden")
    editKRModalEl.classList.add("hidden")
    krOverlay.classList.add("hidden")
}

// //!EVENT LISTENERS
editKRBtns.forEach(function(btn) {
    btn.addEventListener('click', event => {
         console.log(event.target)
         openKREditModal(event.target)
    })
})

addKRBtn.addEventListener("click", openKRCreateModal)
krOverlay.addEventListener("click", closeModal)
closeEditKREl.addEventListener("click", closeModal)
closeCreateKREl.addEventListener("click", closeModal)