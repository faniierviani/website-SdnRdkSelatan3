// === TANDAI MENU NAVBAR YANG AKTIF ===
document.addEventListener("DOMContentLoaded", () => {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll(".nav-link");

  menuItems.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add("active");
    }
  });

  // === LOAD DATA GALERI DARI JSON ===
  if (window.location.pathname.includes("galeri.html")) {
    fetch("galeri.json")
      .then(response => response.json())
      .then(data => {
        const galeriContainer = document.getElementById("galeri-container");
        data.forEach(item => {
          const col = document.createElement("div");
          col.className = "col-md-4";

          col.innerHTML = `
            <div class="card shadow-sm mb-4">
              <img src="${item.gambar}" class="card-img-top" alt="${item.judul}">
              <div class="card-body">
                <h5 class="card-title">${item.judul}</h5>
                <p class="card-text">${item.deskripsi}</p>
              </div>
            </div>
          `;
          galeriContainer.appendChild(col);
        });
      })
      .catch(error => {
        console.error("Gagal memuat galeri:", error);
      });
  }
});

// === SMOOTH SCROLL UNTUK ANCHOR LINK (#id) ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === SCROLL KE ATAS SAAT RELOAD ===
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// === TOMBOL SCROLL TO TOP ===
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollToTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.backgroundColor = "#007bff";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
document.body.appendChild(scrollBtn);

// Tampilkan tombol saat scroll
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Klik tombol -> scroll ke atas
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});