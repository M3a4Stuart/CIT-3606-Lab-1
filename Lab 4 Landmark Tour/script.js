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

onchange=document.getElementById(imgsize).onchange=function(){
    size=document.getElementById(imgsize).value;
    if(Option=="Small"){
        img.width=200;
        img.height=150;
    }
    else if(Option=="Medium"){
        img.width=300;
        img.height=225;
    }
    else if(Option=="Large"){
        img.width=400;
        img.height=300;
    }
}
