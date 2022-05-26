// loading page
var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
    loader.style.display = "none";
})

//JS of responsive nav menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");


document.querySelector('.nav-home').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-about').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-services').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-portfolio').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}

document.querySelector('.nav-contact').onclick =() =>{
    navigation.classList.remove("active")
    menuBtn.classList.remove("active")
}


menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
   
});

//JS of video  nav scroll
var nav = document.querySelector('header');

window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-light','shadow');
    }else{
        nav.classList.remove('bg-light','shadow');
    }
})