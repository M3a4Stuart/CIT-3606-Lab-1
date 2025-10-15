const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const myImg = new Image();
myImg.src = 'Netherite.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}

const myImg = new Image();
myImg.src = 'Iron.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}

const myImg = new Image();
myImg.src = 'Diamond.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}
