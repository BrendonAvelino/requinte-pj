const images = [
    "../imgs/carrossel01.png",
    "../imgs/carrossel02.png",
    "../imgs/carrossel04.png",
    "../imgs/carrossel05.png",
    "../imgs/carrossel06.png"
];
let currentIndex = 0;

function updateCarousel() {
    const imgElements = document.querySelectorAll(".carousel img");
    imgElements.forEach((img, index) => {
        img.src = images[(currentIndex + index) % images.length];
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

// Inicializar o carrossel
document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
    document.getElementById("nextBtn").addEventListener("click", nextImage);
    document.getElementById("prevBtn").addEventListener("click", prevImage);
});
