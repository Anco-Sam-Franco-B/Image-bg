const composeModal = document.getElementById("composeModal");
  const openBtn = document.getElementById("openCompose");
  const closeBtn = document.getElementById("closeCompose");
  const minimizeBtn = document.getElementById("minimizeCompose");

  openBtn.addEventListener("click", () => {
    composeModal.classList.remove("hidden");
    composeModal.classList.add("flex");
  });

  closeBtn.addEventListener("click", () => {
    composeModal.classList.add("hidden");
    composeModal.classList.remove("flex");
  });

  minimizeBtn.addEventListener("click", () => {
    composeModal.classList.toggle("h-14");
  });
