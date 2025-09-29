document.getElementById('Ukraine').onclick = function() {
	img=document.getElementById('Landmarkimg');
    img.src="gorod-pripyat-chernobyl.webp";
};

document.getElementById('Sweeden').onclick= function() {
    changeimg=document.getElementById('landmarkimg')
    img.src="Icehotel_entre_ms.jpg";
}

document.getElementById('Warzaw').onclick= function() {
    changeimg=document.getElementById('landmarkimg')
    img.src="Sztuczna_palma_w_Warszawie_2025.jpg";
}

Button.onclick= function() {
    img=document.getElementById('landmarkimg');
    img.width=100;
    img.height=100;
}
Button.onclick= function() {
    img=document.getElementById('landmarkimg');
    img.width=200;
    img.height=200;
}
Button.onclick= function() {
    img=document.getElementById('landmarkimg');
    img.width=300;
    img.height=300;
}