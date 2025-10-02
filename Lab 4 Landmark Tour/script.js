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
document.getElementById('Ukaine').checked=true;
    iframe=document.getElementById('Mapframe');
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19910.414635627865!2d30.033107092178483!3d51.40669584455878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a7daa5b69c469%3A0x32d80be9b6bf089a!2sPryp&#39;yat&#39;%2C%20Kyiv%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1759410809754!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

document.getElementById('Sweeden').checked=true;
    iframe=document.getElementById('mapframe');
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.19753570806!2d20.578547191332827!3d67.84988316222072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0c79c4842e779%3A0x516382f753ff1ebc!2sICEHOTEL!5e0!3m2!1sen!2sus!4v1759411485901!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

document.getElementById('Warzaw').checked=true;
    iframe=document.getElementById('mapframe');
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2449.955648303634!2d21.012228176184803!3d52.22967597978771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccb0a6b5e6b7%3A0x8c8e7b8f74eaa6fb!2sWarsaw%20Palm%20Tree!5e0!3m2!1sen!2sus!4v1759411624905!5m2!1sen!