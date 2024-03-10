const buttons=document.querySelectorAll(".button");
const left=document.querySelector("#left");
const right=document.querySelector("#right");
const up=document.querySelector("#up");
const down=document.querySelector("#down");
const recenter=document.querySelector("#recenter");
const image=document.querySelector("#img");

function init(){
    image.style.position= 'relative';
    image.style.left = '0px';
    image.style.top='0px';
};

left.addEventListener("click",()=>{
    console.log("left clicked");
    image.style.left = parseInt(image.style.left) - 10 + 'px';
});
right.addEventListener("click",()=>{
    console.log("right clicked");
    image.style.left = parseInt(image.style.left) + 10 + 'px';
});
up.addEventListener("click",()=>{
    console.log("up clicked");
    image.style.top= parseInt(image.style.top) - 10 + 'px';
});
down.addEventListener("click",()=>{
    console.log("down clicked");
    image.style.top= parseInt(image.style.top) + 10 + 'px';
});
recenter.addEventListener("click",()=>{
    console.log("recenter clicked");
    image.style.top='0px';
    image.style.left='0px';
});

init();
