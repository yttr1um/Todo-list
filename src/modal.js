const formModal = document.querySelector("#modal");
export const form = document.querySelector("form");
export const title = document.querySelector("#title");
export const text = document.querySelector("#text");

export const addNoteBtn = document.querySelector("#submit-btn");
export const closeModalBtn = document.querySelector("#close-modal");

export function openModal() {
    formModal.showModal();
}

export function closeModal() {
    formModal.close();
}

form.addEventListener("submit", event => {
    //prevents page from refreshing.
    event.preventDefault();
    title.value = "";
    text.value = "";
})