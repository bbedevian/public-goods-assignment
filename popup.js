const modal = document.querySelector(".modal")

const hideButton = modal.querySelector("#hide")

const showModal = () => {
    modal.hidden = false
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const delayShowModal = async () => {
    await delay(5000);
    showModal()
};

const delayHideModal = async () => {
    modal.classList.add('hideModal')
    await delay(2000);
    modal.hidden = true
};


hideButton.addEventListener('click', () => {
    delayHideModal()
})

delayShowModal()