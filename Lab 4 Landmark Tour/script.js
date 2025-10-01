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

onchange=document.getElementById(imgsize).value;
    if (onchange=="Small"){
        img.width=200;
    }
    else if (onchange=="Medium"){
        img.width=400;
    }
    else if (onchange=="Large"){
        img.width=600;
    }
    