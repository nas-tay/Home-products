const modal = () => {
  const bindModal = (triggerSelector, modalSelector, modalCloseSelector) => {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      modalCloseBtn = document.querySelector(modalCloseSelector);

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
      });
    });
    modal.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target;
      if (target === modal) {
        modal.classList.remove("active");
      }
    });
    modalCloseBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  };

  bindModal(".show-modal", ".order-modal", ".modal-close");
};

export default modal;
