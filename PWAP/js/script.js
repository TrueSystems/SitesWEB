var banners  = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1);
    
    var slide = document.getElementById('slide-screen');
    slide.src = banners[bannerAtual];

    if (bannerAtual === 8) {
        bannerAtual = 0;
        slide.src = banners[bannerAtual];
    }	
}

setInterval(trocaBanner, 3000);
