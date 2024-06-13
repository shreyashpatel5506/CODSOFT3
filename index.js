document.getElementById("brands1").onclick=function(){
    window.scrollTo({top:1600,behavior:'smooth'});
}
document.getElementById("brands2").onclick=function(){
    window.scrollTo({top:1600,behavior:'smooth'});
}
document.getElementById("brand123").onclick=function(){
    window.scrollTo({top:2800,behavior:'smooth'});
}
document.getElementById("brands132").onclick=function(){
    window.scrollTo({top:2800,behavior:'smooth'});
}
document.getElementById("product123").onclick=function(){
    window.scrollTo({top:750,behavior:'smooth'});
}
document.getElementById("product132").onclick=function(){
    window.scrollTo({top:750,behavior:'smooth'});
}
document.getElementById("productpage").onclick=function(){
    window.scrollTo({top:850,behavior:'smooth'});
}
document.getElementById("productpage1").onclick=function(){
    window.scrollTo({top:850,behavior:'smooth'});
}
document.getElementById("store12").onclick=function(){
    window.scrollTo({top:2000,behavior:'smooth'});
}
document.getElementById("store123").onclick=function(){
    window.scrollTo({top:3500,behavior:'smooth'});
}
document.getElementById("f2").onclick=function(){
    window.scrollTo({top:1600,behavior:'smooth'});
}
document.getElementById("f3").onclick=function(){
    window.scrollTo({top:1600,behavior:'smooth'});
}
document.getElementById("f4").onclick=function(){
    window.scrollTo({top:2000,behavior:'smooth'});
}

document.getElementById("f1").onclick=function(){
    window.scrollTo({top:850,behavior:'smooth'});
}
document.getElementById("f5").onclick=function(){
    window.scrollTo({top:850,behavior:'smooth'});
}


function file(){
    let x=document.getElementById("menu123");
    if(x.className=="menu2"){
        x.className="menu1123";
          document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        x.className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
}

let menu=document.getElementById("product123");
menu.addEventListener("click",()=>{
    if(document.getElementById("menu123").className=="menu2"){
        document.getElementById("menu123").className="menu1123"
        document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        document.getElementById("menu123").className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
});

let menu1=document.getElementById("brand123");
menu1.addEventListener("click",()=>{
    if(document.getElementById("menu123").className=="menu2"){
        document.getElementById("menu123").className="menu1123"
        document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        document.getElementById("menu123").className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
});

let menu2=document.getElementById("brands132");
menu2.addEventListener("click",()=>{
    if(document.getElementById("menu123").className=="menu2"){
        document.getElementById("menu123").className="menu1123"
        document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        document.getElementById("menu123").className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
});
let menu4=document.getElementById("store123");
menu4.addEventListener("click",()=>{
    if(document.getElementById("menu123").className=="menu2"){
        document.getElementById("menu123").className="menu1123"
        document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        document.getElementById("menu123").className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
});
let menu5=document.getElementById("product132");
menu5.addEventListener("click",()=>{
    if(document.getElementById("menu123").className=="menu2"){
        document.getElementById("menu123").className="menu1123"
        document.getElementById("me").src="hamburger-button-computer-icons-menu-clip-art-icon-menu-removebg-preview.png";
    }
    else{
        document.getElementById("menu123").className="menu2";
        document.getElementById("me").src="215-2158188_wrong-coloring-page-hamburger-menu-close-icon-hd-removebg-preview.png";
    }
});

window.addEventListener("scroll",()=>{
if(window.scrollY >350){
    document.getElementById("uparrow").classList.add("up");
    document.getElementById("uparrow").classList.remove("none");

let up=document.getElementById("uparrow");
up.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});
}
else{
    document.getElementById("uparrow").classList.add("none");
    document.getElementById("uparrow").classList.remove("up");
}
});