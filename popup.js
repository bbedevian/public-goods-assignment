const modal = document.querySelector(".modal")

const hideButton = modal.querySelector("#hide")

const showModal = () => {
    modal.hidden = false
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const delayedModal = async () => {
    await delay(5000);
    showModal()
};


hideButton.addEventListener('click', () => {
    modal.hidden = true
})

delayedModal()