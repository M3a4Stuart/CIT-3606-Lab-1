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

document.getElementById(imgsize).value=onchange=function(){
    var value=document.getElementById("imgsize").value;
    if (value=="Small"){
        img.width=200;
    }
    else if (value=="Medium"){
        img.width=400;
    }
    else if (value=="Large"){
        img.width=600;
    }
}
