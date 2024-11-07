// Inisialisasi variabel posisi
let currentPosition = 0;
const serviceBoxWidth = 220; // Lebar box layanan termasuk margin
const totalServices = document.querySelectorAll(".service-box").length;
const serviceWrapper = document.querySelector(".service-wrapper");

// Fungsi untuk memindahkan layanan ke kiri satu per satu
function moveLeft() {
    if (currentPosition > 0) {
        currentPosition -= 1;
    } else {
        currentPosition = totalServices - 1;
    }
    updateServicePosition();
}

// Fungsi untuk memindahkan layanan ke kanan satu per satu
function moveRight() {
    if (currentPosition < totalServices - 1) {
        currentPosition += 1;
    } else {
        currentPosition = 0;
    }
    updateServicePosition();
}

// Fungsi untuk memperbarui posisi layanan
function updateServicePosition() {
    serviceWrapper.style.transform = `translateX(-${currentPosition * serviceBoxWidth}px)`;
}

// Variabel untuk menyimpan posisi sentuhan awal
let touchStartX = 0;
let touchEndX = 0;

// Fungsi untuk mulai menangkap sentuhan
serviceWrapper.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, { passive: true }); // Menambahkan opsi passive: true

// Fungsi untuk mengakhiri sentuhan dan menentukan gerakan
serviceWrapper.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
}, { passive: true }); // Menambahkan opsi passive: true

// Fungsi untuk menangani gerakan geser (swipe)
function handleGesture() {
    if (touchEndX < touchStartX) {
        moveRight(); // Geser ke kanan jika swipe kiri
    }
    if (touchEndX > touchStartX) {
        moveLeft(); // Geser ke kiri jika swipe kanan
    }
}
