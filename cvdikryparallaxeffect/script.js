let langit = document.getElementById('langit');
let laut = document.getElementById('laut');
let awan1 = document.getElementById('a1');
let awan2 = document.getElementById('a2');
let Gunung = document.getElementById('gunung');
let Pkiri = document.getElementById('pkiri');
let Pkanan = document.getElementById('pkanan');
let R1kiri = document.getElementById('r1kiri');
let R1kanan = document.getElementById('r1kanan');
let R2kiri = document.getElementById('r2kiri');
let R2kanan = document.getElementById('r2kanan');
let waktu = document.getElementById('waktu');
// FOOTER
let background1 = document.getElementById('dasar0');
let background2 = document.getElementById('dasar1');
let batukanan = document.getElementById('btkanan');
let pasir = document.getElementById('pasir');
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    waktu.style.marginTop = value * -1.5 + 'px';
//Langit 
    //langit.style.top = value * -1.5 + 'px'
//Awan 1
    awan1.style.top = value * 0.2 + 'px';
//Awan 2
    awan2.style.top = value * 0.2 + 'px';
//Gunung
    Gunung.style.top = value * 0.2 + 'px';
//Rumput 1
   // R1kanan.style.top = value * -1.5 + 'px';
    R1kanan.style.left = value * 1.5 + 'px';
   // R1kiri.style.top = value * -1.5 + 'px';
    R1kiri.style.left = value * -1.5 + 'px';
//Rumput 2
    //R2kanan.style.top = value * -1.5 + 'px';
    R2kanan.style.left = value * 1.5 + 'px';
    //R2kiri.style.top = value * -1.5 + 'px';
    R2kiri.style.left = value * -1.5 + 'px';
//Pulau
    // Pkanan.style.top = value * -0.8 + 'px';
    Pkanan.style.left = value * 0.8 + 'px';
    //Pkiri.style.top = value * -0.8 + 'px';
    Pkiri.style.left = value * -0.8 + 'px';
    // langit.style.top = value * -1 + 'px';

    //laut.style.top = value * -1 + 'px';

     //background1.style.top = value * -0.2 + 'px';
});

// JS SWIPER


// ikan
const ikan = document.getElementById("ikan");
let x = 0;
let y = 0;

function setRandomTransform() {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;

  // Menghitung perbedaan antara posisi sekarang dan posisi yang baru
  const deltaX = randomX - x;
  const deltaY = randomY - y;

  // Menghitung sudut rotasi berdasarkan perbedaan posisi
  const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // Mengatur transformasi dengan sudut rotasi yang sesuai
  ikan.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${rotation}deg)`;
  
  // Memperbarui posisi x dan y
  x = randomX;
  y = randomY;
}

function animateIkan() {
  setRandomTransform();
  setTimeout(animateIkan, 3000); // Ganti setiap 3 detik
}

animateIkan();


        // Fungsi untuk menampilkan tanggal dan waktu real-time
        function Tampilkanwaktu() {
            const waktuSaatIni = new Date();
            const waktuElement = document.getElementById('waktu');
            const jam = String(waktuSaatIni.getHours()).padStart(2, '0'); // Tambahkan nol di depan jika perlu
            const menit = String(waktuSaatIni.getMinutes()).padStart(2, '0'); // Tambahkan nol di depan jika perlu
            const detik = String(waktuSaatIni.getSeconds()).padStart(2, '0'); // Tambahkan nol di depan jika perlu
            
            const waktuTampil = `${jam}:${menit}:${detik}`;
            waktuElement.textContent = waktuTampil;
        }

        // Panggil fungsi Tampilkanwaktu setiap detik (1000 ms)
        setInterval(Tampilkanwaktu, 1000);