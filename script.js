// TANGGAL JADIAN
const startDate = new Date(2025, 0, 1);

// DATE TEXT
const opt = { day:'numeric', month:'long', year:'numeric' };
document.getElementById("dateText").innerText =
`Sejak ${startDate.toLocaleDateString('id-ID', opt)}, aku memilih kamu ❤️`;

// HITUNG HARI
const today = new Date();
today.setHours(0,0,0,0);
let diff = today - startDate;
if(diff < 0) diff = 0;
document.getElementById("daysCount").innerText =
Math.floor(diff / (1000*60*60*24));

// QUOTES
const quotes = [
    "Tidak ada hari tanpa kamu 🤍",
    "Aku jatuh cinta berkali-kali, semuanya ke kamu 💕",
    "Kalau boleh egois, aku mau kamu selamanya ♾️"
];
let q = 0;
setInterval(()=>{
    document.getElementById("quote").innerText = quotes[q];
    q = (q+1)%quotes.length;
},3000);

// MUSIC (PLAY AFTER CLICK)
const music = document.getElementById("music");
document.body.addEventListener("click",()=>{
    if(music.paused) music.play();
},{ once:true });

// GALLERY
const photos = ["Screenshot 2025-12-23 002545.png","Screenshot 2025-12-23 005051.png","Screenshot 2025-12-23 005123.png","Screenshot 2025-12-23 160016.png","Screenshot 2025-12-23 160040.png","Screenshot 2025-12-23 160127.png","Screenshot 2025-12-23 160204.png",];
let p = 0;
setInterval(()=>{
    const img = document.getElementById("slidePhoto");
    if(!img) return;
    img.style.opacity = 0;
    setTimeout(()=>{
        p=(p+1)%photos.length;
        img.src=photos[p];
        img.style.opacity=1;
    },500);
},3500);

// NAV
function openGallery(){
    mainCard.classList.remove("show");
    setTimeout(()=>{
        mainCard.classList.add("hidden");
        galleryCard.classList.remove("hidden");
        galleryCard.classList.add("show");
    },500);
}

function closeGallery(){
    galleryCard.classList.remove("show");
    setTimeout(()=>{
        galleryCard.classList.add("hidden");
        mainCard.classList.remove("hidden");
        mainCard.classList.add("show");
    },500);
}

function showLove(){
    document.getElementById("loveText").style.display="block";
}

