fetch("views/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

const roles = ["Web Developer", "IT Support", "Software Engginer", "IT Enthusiast"];
let index = 0;
const roleElement = document.getElementById("role");

setInterval(() => {
  index = (index + 1) % roles.length;
  roleElement.textContent = roles[index];
}, 1000);

// Mengambil konten dari certificates.html dan menambahkannya ke index.html
document.addEventListener("DOMContentLoaded", function () {
  fetch("/views/sertifikat.html")
    .then((response) => response.text())
    .then((data) => {
      // Memasukkan konten dari certificates.html ke dalam div dengan id certificate-container
      document.getElementById("certificate-container").innerHTML = data;
    })
    .catch((error) => console.log("Error loading certificates:", error));
});

// Membuka modal dan menampilkan gambar
function openModal(imageSrc) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.src = imageSrc;
}

document.getElementById("profile").addEventListener("click", function () {
  window.location.href = "/about.html";
});

// Menutup modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});

fetch("views/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.body.insertAdjacentHTML("beforeend", data);
  });
