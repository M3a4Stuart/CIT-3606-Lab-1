document.getElementById('Ukraine').onclick = function() {
	img=document.getElementById('Landmarkimg');
    img.src="gorod-pripyat-chernobyl.webp";
    iframe=document.getElementById('Mapframe');
    iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19910.414635627865!2d30.033107092178483!3d51.40669584455878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a7daa5b69c469%3A0x32d80be9b6bf089a!2sPryp&#39;yat&#39;%2C%20Kyiv%20Oblast%2C%20Ukraine!5e0!3m2!1sen!2sus!4v1759410809754!5m2!1sen!2sus" 
    info=document.getElementById("info");
    info.innerHTML="Pripyat, Ukraine, is a ghost town located near the Chernobyl Nuclear Power Plant. It was founded in 1970 to house workers and their families who were employed at the plant. The town was evacuated in 1986 following the catastrophic nuclear disaster at Chernobyl, which released large amounts of radioactive material into the environment. Today, Pripyat remains abandoned and is part of the Chernobyl Exclusion Zone. It has become a popular destination for tourists interested in exploring the remnants of Soviet-era architecture and learning about the history of the Chernobyl disaster."
}


document.getElementById('Sweeden').onclick= function() {
    changeimg=document.getElementById('landmarkimg')
    img.src="Icehotel_entre_ms.jpg";
    iframe=document.getElementById('mapframe');
    iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6017.19753570806!2d20.578547191332827!3d67.84988316222072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45d0c79c4842e779%3A0x516382f753ff1ebc!2sICEHOTEL!5e0!3m2!1sen!2sus!4v1759411485901!5m2!1sen!2sus" 
    info=document.getElementById("info");
    info.innerHTML="The ICEHOTEL in Jukkasjärvi, Sweden, is a world-famous hotel made entirely of ice and snow. It was established in 1989 and is rebuilt every year with a new design and theme. The hotel features unique ice sculptures, ice rooms, and even an ice bar where guests can enjoy drinks served in ice glasses. The ICEHOTEL offers a one-of-a-kind experience for visitors, allowing them to sleep in sub-zero temperatures while surrounded by stunning ice art. It also provides various winter activities such as dog sledding, snowmobiling, and northern lights viewing."
}

document.getElementById('Warzaw').onclick= function() {
    changeimg=document.getElementById('landmarkimg')
    img.src="Sztuczna_palma_w_Warszawie_2025.jpg";
    iframe=document.getElementById('mapframe');
    iframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.632505497268!2d21.018403075619226!3d52.23189417198705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd00277fa34b%3A0x7d041058b24c965f!2sPalma%20warszawska!5e0!3m2!1sen!2sus!4v1759770710364!5m2!1sen!2sus"
    info=document.getElementById("info");
    info.innerHTML="The Palm Tree in Warsaw is an artificial palm tree located in the Praga-Południe district of Warsaw, Poland. It was created by artist Joanna Rajkowska and installed in 2002 as a symbol of hope and a reminder of the city's multicultural past. The palm tree stands approximately 15 meters tall and is made of metal and fiberglass. It has become a popular landmark and gathering place for locals and tourists alike, often serving as a backdrop for protests, celebrations, and cultural events."
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

