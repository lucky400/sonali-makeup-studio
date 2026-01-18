document.addEventListener("DOMContentLoaded", () => {

  /* ================= SHOW MORE GALLERY ================= */
  const images = document.querySelectorAll(".gallery-img");
  const showMoreBtn = document.querySelector(".show-more-btn");

  let visibleCount = 10;

  images.forEach((img, index) => {
    if (index >= visibleCount) {
      img.style.display = "none";
    }
  });

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      images.forEach(img => {
        img.style.display = "block";
      });
      showMoreBtn.style.display = "none";
    });
  }

  /* ================= LIGHTBOX ================= */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });

});