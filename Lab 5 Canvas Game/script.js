const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const img1 = new Image();
myImg.src = 'Netherite.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}

const img2 = new Image();
myImg.src = 'Iron.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}

const img3 = new Image();
myImg.src = 'Diamond.png';
myImg.onload = function(){
    ctx.drawImage(myImg, x, y, width, height); 

}

setInterval(drawFunction, 1000);
let x = 0, y = 0;
function drawFunction()     {
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     x++;       
     y += 2;
    ctx.drawImage(myImg, x, y, 100, 100);
x = Math.random() * canvas.width;
y = Math.random() * canvas.height;

}


myCanvas.onmousedown = function(event) {         
     alert("Location " + event.clientX + ","    
                           + event.clientY);  
}

myCanvas.onmousedown = function(e) {
    if (e.clientX > x && 
        e.clientX < x + imageWidth &&            
        e.clientY > y && 
        e.clientY < y + imageHeight)  
       {      }
    }

    function scoreFunction() {
        score++;
        document.getElementById("score").innerHTML = score;
    }
    let score = 0;
    document.getElementById("score").innerHTML = score;