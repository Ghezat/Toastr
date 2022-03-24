let suc = document.getElementById('btnSuc');
let war = document.getElementById('btnWar');
let inf = document.getElementById('btnInf');
let erro = document.getElementById('btnErr');
let display = document.getElementById('bgDisplay');
let dispIcon = document.getElementById('icon');
let imgCaption = document.getElementById('imgCaption')
let tim_e = 3000;

let cont = 0;
const arr = ["./img/Anibal.png", "./img/Jack.png", "./img/Freddy.png", "./img/ET.png" ];
const descrip = [
"El Dr. Hannibal Lecter es un psicópata de ficción inventado por el novelista Thomas Harris, que se da a conocer en la novela El dragón rojo (1981). Sus vivencias continúan en The Silence of the Lambs (1988) (llevada al cine por Jonathan Demme), para culminar en Hannibal (1999).",
"Jack el Destripador (en inglés: Jack the Ripper) es el nombre dado a un asesino en serie sin identificar al que se le atribuyen al menos cinco homicidios en el barrio londinense de Whitechapel (East End) en 1888, y cuyo modus operandi estuvo caracterizado por cortes en la garganta, mutilaciones en las áreas genital y abdominal, extirpación de órganos y desfiguración del rostro de mujeres que se dedicaban a la prostitución.",
"Frederick Charles Krueger (o simplemente Freddy Krueger) es un personaje de la serie de películas A Nightmare on Elm Street. Apareció por primera vez en A Nightmare on Elm Street (1984), de Wes Craven, como el espíritu de un asesino en serie quemado que mata a sus víctimas en sus sueños, causando con ello su muerte en el mundo real.",
"Pennywise no tiene forma fija, pero suele aparecer en forma de payaso. Mientras que en la novela es descrito como un cruce entre Bozo y Ronald McDonald, vestido con un traje enteramente plateado con botones naranjas y con una tonalidad de piel blanca; en la mini-serie para televisión se le ve como un payaso calvo, con la cara blanca. En numerosas ocasiones le suelen aparecer colmillos amarillentos para atemorizar a sus víctimas. Tiene un sentido del humor muy extraño. Se suele reír y contar chistes grotescos."]

let bgcolor = localStorage.getItem('bgColor')
display.classList.add(bgcolor);
console.log(bgcolor);

let timeFunction = setInterval(changeImage, tim_e);

function changeImage(){
    
    if (cont < arr.length) {
    console.log(cont);
    document.getElementById('imgCaption').innerHTML = 
        `<img src="${arr[cont]}" class="imagen" id="imgCaption">`
    document.getElementById('descriptCaption').innerHTML =
        `<p>${descrip[cont]}</p>`    
        cont ++
        
    }else{ cont = 0}

};
    
imgCaption.addEventListener("click", ()=>{
    if (tim_e === 3000) {
        tim_e = 100;
        clearInterval(timeFunction)
        toastr["error"](tim_e, "Display detenido")
    }else {
        tim_e = 3000;
        timeFunction = setInterval(changeImage, tim_e);
        toastr["success"](tim_e, "Display reiniciado")
    }
   
})


suc.addEventListener('click', ()=>{
    bgcolor = localStorage.getItem('bgColor')
    if (bgcolor !== "bg-success") {
        localStorage.setItem('bgColor' , 'bg-success')
        toastr["success"]("bg-success", "titulo del mensaje")
        display.classList.replace(bgcolor, 'bg-success')
        dispIcon.classList.add('bi-clipboard2-data')
        dispIcon.classList.remove('bi-clipboard2','bi-clipboard2-pulse','bi-clipboard2-x','prueba-no-da-error')
    }else{
        toastr["success"](bgcolor, "titulo del mensaje")
        dispIcon.classList.add('bi-clipboard2-data')
        console.log("el valor del timer es :" + "" + tim_e)
    }

}); 



inf.addEventListener('click', ()=>{
    bgcolor = localStorage.getItem('bgColor')
    if (bgcolor !== "bg-info") {
        localStorage.setItem('bgColor' , 'bg-info')
        toastr["info"]('bg-info', "titulo del mensaje")
        display.classList.replace(bgcolor, 'bg-info')
        dispIcon.classList.add('bi-clipboard2')
        /* dispIcon.classList.remove('bi-clipboard2-data') */
    }else{
        toastr["info"](bgcolor, "titulo del mensaje")
        dispIcon.classList.add('bi-clipboard2')
    }
    
});



war.addEventListener('click', ()=>{
    bgcolor = localStorage.getItem('bgColor')
    if (bgcolor !== "bg-warning") {
        localStorage.setItem('bgColor' , 'bg-warning')
        toastr["warning"]( 'bg-warning', "titulo del mensaje")
        display.classList.replace(bgcolor, 'bg-warning')
        dispIcon.classList.add('bi-clipboard2-pulse')
        dispIcon.classList.remove('bi-clipboard2-data','bi-clipboard2','bi-clipboard2-x') 
    }else{
        toastr["warning"](bgcolor, "titulo del mensaje")
        dispIcon.classList.add('bi-clipboard2-pulse')
    }
    
});

erro.addEventListener('click', ()=>{
    bgcolor = localStorage.getItem('bgColor')
    if (bgcolor !== "bg-danger") {
        localStorage.setItem('bgColor' , 'bg-danger')
        toastr["error"]( 'bg-danger' , "titulo del mensaje")
        display.classList.replace(bgcolor, 'bg-danger')
        dispIcon.classList.add('bi-clipboard2-x')
        dispIcon.classList.remove('bi-clipboard2-data','bi-clipboard2','bi-clipboard2-pulse')
    }else{
        toastr["error"](bgcolor, "titulo del mensaje")
        dispIcon.classList.add('bi-clipboard2-x')
    }
    

});

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",// toast-top-right, toast-bottom-right, toast-bottom-left, toast-top-left, toast-top-full-width, toast-bottom-full-width, toast-top-center, toast-bottom-center
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
