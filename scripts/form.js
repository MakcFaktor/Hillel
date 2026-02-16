const MODAL_ACTIVE_CLASS_NAME = "modal-active";

const formModal = document.querySelector("#form-modal");
const successModal = document.querySelector("#success-modal");
const form = document.querySelector("#form");

const openFormModalBtn = document.querySelector("#open-form-modal-btn");
const launchBtn = document.querySelector("#launch-btn");
const closeBtns = document.querySelectorAll(".close-btn");

openFormModalBtn.addEventListener("click", () => {
  formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const closeSuccessModal = () => {
  successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
  successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeFormModal();
    closeSuccessModal();
  });
});
