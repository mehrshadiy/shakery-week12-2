let modalBtns = document.querySelectorAll(".modal-btn")
for (let modalBtn of modalBtns) {
    modalBtn.onclick = (e)=>{
        e.target.nextElementSibling.classList.toggle("hidden")
    }
}
let modals = document.querySelectorAll(".modal")
for (let modal of modals) {
    let modalContent = modal.querySelector(".modal-content")
    let closeBtn = modalContent.querySelector(".close-btn")
    let xClose = modalContent.querySelector(".x-close")

    function closeModal() {
        modal.classList.add("hidden")
    }
    modal.querySelector(".modal-blur").onclick = ()=>{
        closeModal()
    }
    // modalContent.onclick = (e)=>{
    //     e.stopPropagation()
    // }
    closeBtn.onclick = closeModal;
    xClose.onclick = closeModal;
}
