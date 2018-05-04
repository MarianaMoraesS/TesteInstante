let imagem = document.querySelector(".carnaval")
let imagensPequenas = document.querySelectorAll("#noticias img")

imagem.onload = function(){
    imagem.style.transform = "translateX(100%)";
}

setTimeout(function(){
    imagensPequenas[0].style.transform = "translateX(250%)";
},2000);
setTimeout(function(){
    imagensPequenas[1].style.transform = "translateX(250%)";
},2400);
setTimeout(function(){
    imagensPequenas[2].style.transform = "translateX(250%)";
},2800);
setTimeout(function(){
    imagensPequenas[3].style.transform = "translateX(250%)";
},3200);

