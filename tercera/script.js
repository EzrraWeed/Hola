const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const letterModal = document.getElementById('letter-modal');

// Abrir carta
openBtn.addEventListener("click", () => {
  letterModal.classList.remove("hidden");
});

// Cerrar con la X
closeBtn.addEventListener("click", () => {
  letterModal.classList.add("hidden");
});

// Cerrar al hacer clic en el fondo
letterModal.addEventListener("click", (event) => {
  if (event.target === letterModal) {
    letterModal.classList.add("hidden");
  }
});