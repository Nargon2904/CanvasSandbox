const Canvas = document.getElementById('canvas');
const ctx = Canvas.getContext('2d');

const Canvas2 = document.getElementById('canvas2');
const ctx2 = Canvas2.getContext('2d');

Canvas.height = 700;
Canvas.width = 600;

//const imageData = ctx.createImageData(Canvas.width, Canvas.height);
console.log(Canvas.height, Canvas.width);
//ctx.putImageData(imageData, Canvas.width, Canvas.height);

let imageData = 0;
/*
ctx.rect(10, 10, 100, 100);
ctx.fill();

let imageData = ctx.getImageData(60, 60, 200, 100);
ctx.putImageData(imageData, 150, 10);
*/



let drawing = false;
let posX = 0;
let posY = 0;
let spX = 0;
let spY = 0;

let arrX = [];
let arrY = [];

Canvas.addEventListener("mousedown", (e) => {
    init(e);
    drawing=true;
})
Canvas.addEventListener("mouseup", () => {
    drawing=false;
    //console.log(Math.min(...arrX), Math.min(...arrY), Math.max(...arrX), Math.max(...arrY));
    //imageData = ctx.getImageData(0, 0, Canvas.height, Canvas.width);
    imageData = ctx.getImageData(Math.min(...arrX), Math.min(...arrY), Math.max(...arrX)-Math.min(...arrX), Math.max(...arrY)-Math.min(...arrY));
    console.log(imageData);
    imageData2 = ctx2.getImageData(Math.min(...arrX), Math.min(...arrY), Math.max(...arrX)-Math.min(...arrX), Math.max(...arrY)-Math.min(...arrY));
    ctx2.putImageData(imageData, Math.min(...arrX), Math.min(...arrY));
    arrX = [];
    arrY = [];
})
Canvas.addEventListener("mousemove", (e) => {
    draw(e);
})

function init(e) {
    posX = e.offsetX;
    posY = e.offsetY;
    spX = posX;
    spY = posY;
}

function draw(e) {
    if (drawing) {
        ctx.beginPath();
        ctx.moveTo(posX, posY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.closePath();
        posX = e.offsetX;
        posY = e.offsetY;

        arrX.push(posX);
        arrY.push(posY);
    }
}


//кнопки

const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const blackBtn = document.getElementById('black-btn');
const redBtn = document.getElementById('red-btn');
const colorPicker = document.getElementById('color-picker-input');

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0,0, Canvas.width, Canvas.height);
})
blackBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#000000';
    colorPicker.value = '#000000';
})
redBtn.addEventListener('click', () => {
    ctx.strokeStyle = '#FF0000';
    colorPicker.value = '#FF0000';
})
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
})
