window.onload = function(){
}

let homebtn = document.getElementById("home-btn");
let aboutbtn = document.getElementById("abt-btn");
let skillbtn = document.getElementById("skill-btn");
let portbtn = document.getElementById("port-btn");
let contactbtn = document.getElementById("contact-btn");

let homepg = document.getElementById("welcome-page");
let abtpg = document.getElementById("about-page");

let navbar =  document.getElementsByClassName("nav-header");

function openQuickMenu(){
    alert("about button pressed");
}

function OpenHomePage(){
    homepg.style.display="block";
    abtpg.style.display="none";
    homebtn.classList.add("select");
    aboutbtn.classList.remove("select");
    skillbtn.classList.remove("select");
    portbtn.classList.remove("select");
    contactbtn.classList.remove("select");
}

function OpenAboutPage(){
    homepg.style.display="none";
    abtpg.style.display="block";
    aboutbtn.classList.add("select");
    homebtn.classList.remove("select");
    skillbtn.classList.remove("select");
    portbtn.classList.remove("select");
    contactbtn.classList.remove("select");
}

function OpenSkillPage(){
    aboutbtn.classList.remove("select");
    homebtn.classList.remove("select");
    skillbtn.classList.add("select");
    portbtn.classList.remove("select");
    contactbtn.classList.remove("select");
}

function OpenPortPage(){
    aboutbtn.classList.remove("select");
    homebtn.classList.remove("select");
    skillbtn.classList.remove("select");
    portbtn.classList.add("select");
    contactbtn.classList.remove("select");
}

function OpenContactPage(){
    aboutbtn.classList.remove("select");
    homebtn.classList.remove("select");
    skillbtn.classList.remove("select");
    portbtn.classList.remove("select");
    contactbtn.classList.add("select");
}

homebtn.addEventListener('click', OpenHomePage);

aboutbtn.addEventListener('click', OpenAboutPage);

skillbtn.addEventListener('click', OpenSkillPage);
portbtn.addEventListener('click', OpenPortPage);
contactbtn.addEventListener('click', OpenContactPage);

/*function hideNav(){
   navbar[0].style.display="None";
}
window.addEventListener("wheel", hideNav );*/

