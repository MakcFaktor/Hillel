document.addEventListener("DOMContentLoaded", () => {
  const MODAL_ACTIVE_CLASS_NAME = "modal-active";

  const formModal = document.querySelector("#form-modal");
  const openFormModalBtn = document.querySelector("#open-form-modal-btn");
  const closeBtns = document.querySelectorAll(".close-btn");
  const pageLoader = document.getElementById("pageLoader");

  if (!pageLoader) {
    console.error("pageLoader НЕ знайдено в HTML");
    return;
  }

  openFormModalBtn.addEventListener("click", () => {
    pageLoader.classList.add("active");

    setTimeout(() => {
      pageLoader.classList.remove("active");
      formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
    }, 800);
  });

  const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
  };

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeFormModal();
    });
  });
});
