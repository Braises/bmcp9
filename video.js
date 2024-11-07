const videos = [
    {
        url: "https://www.youtube.com/embed/l3G2HsYgCgA?si=C-Lx1kfbRMf2HW8o",
        title: "Selamat Datang di Bina Motor",
        description: "Temukan mengapa kami menjadi pilihan utama untuk perawatan kendaraan berkualitas. Dalam video ini, Anda akan melihat komitmen kami terhadap keunggulan dan pelayanan terbaik. Dari servis rutin hingga perbaikan kompleks, kami siap memastikan kendaraan Anda selalu dalam kondisi prima. Saksikan bagaimana kami bekerja dan pengalaman pelanggan yang puas."
    },
    {
        url: "https://www.youtube.com/embed/UKPhKwHKTwk?si=06q3l5yb-LeVoDXe", // Ganti VIDEO_ID_2 dengan ID video kedua
        title: "Briefing Pagi, Sumber Semangat dan Inspirasi!",
        description: "Kami membahas agenda harian, berbagi cerita inspiratif, dan solusi kreatif untuk tantangan yang dihadapi. Setiap anggota tim didorong untuk berkontribusi dan mendukung satu sama lain, menciptakan lingkungan kerja yang dinamis dan kolaboratif. Briefing pagi kami menjadi fondasi semangat tim dan komitmen untuk memberikan pelayanan terbaik bagi pelanggan."
    },
    
];

let currentVideo = 0;

function updateVideo() {
    document.getElementById("video-frame").src = videos[currentVideo].url;
    document.getElementById("video-title").textContent = videos[currentVideo].title;
    document.getElementById("video-text").textContent = videos[currentVideo].description;
}

document.getElementById("next-video").addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    updateVideo();
});

document.getElementById("prev-video").addEventListener("click", () => {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    updateVideo();
});
