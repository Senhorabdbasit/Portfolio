/* ==========================================================
   CONFIG — edit these and every matching element on the site
   updates automatically. This is the ONE place to change your
   DM / booking link.
   ========================================================== */
const CONFIG = {
  // Replace with your real X (Twitter) profile so the DM button works
  dmLink: "https://x.com/your_handle",
};

// Apply the link to every button/text marked with class "js-dm-link"
document.querySelectorAll(".js-dm-link").forEach((el) => {
  el.setAttribute("href", CONFIG.dmLink);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener noreferrer");
});

/* ==========================================================
   VIDEO MODAL — clicking any .video-card opens the YouTube
   video from its data-yt attribute in a lightbox player.
   ========================================================== */
const modal = document.getElementById("videoModal");
const modalIframe = document.getElementById("modalIframe");
const modalClose = document.getElementById("modalClose");

function openVideo(youtubeId) {
  modalIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  modal.classList.add("open");
}
function closeVideo() {
  modal.classList.remove("open");
  modalIframe.src = "";
}

document.querySelectorAll(".video-card").forEach((card) => {
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Play video");
  const id = card.getAttribute("data-yt");
  card.addEventListener("click", () => openVideo(id));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openVideo(id);
    }
  });
});

modalClose.addEventListener("click", closeVideo);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeVideo();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideo();
});

/* ==========================================================
   MOBILE NAV — simple toggle for the burger menu
   ========================================================== */
const burger = document.getElementById("navBurger");
const navLinks = document.querySelector(".nav-links");
if (burger) {
  burger.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "64px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "#0A0A0A";
    navLinks.style.padding = "20px 6vw";
    navLinks.style.gap = "16px";
  });
}

/* ==========================================================
   FOOTER YEAR
   ========================================================== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
