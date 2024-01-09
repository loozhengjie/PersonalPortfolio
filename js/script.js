window.addEventListener('load', function() {
    console.log('All assets are loaded');
    const loader = document.querySelector(".loading-screen");
    loader.classList.add("hidden");
    document.body.removeChild(loader);
})

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
    /*homepg.style.display="block";
    abtpg.style.display="none";*/
    homebtn.classList.add("select");
    aboutbtn.classList.remove("select");
    skillbtn.classList.remove("select");
    portbtn.classList.remove("select");
    contactbtn.classList.remove("select");
}

function OpenAboutPage(){
    /*homepg.style.display="none";
    abtpg.style.display="block";*/
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

let timeoutHandle = 0;

window.addEventListener("scroll", function () {

    navbar[0].style.display="none"; //hide div
    /*console.log("Hide nav");*/
    clearTimeout(timeoutHandle);
    // call function to hide box after 5 seconds
    timeoutHandle = setTimeout(hideBox, 250);
});

// hides box by setting display to 'none'
hideBox = () => {
    navbar[0].style.display= "block";
    /*console.log("unhide nav");*/
};

var quickMenuButton = document.getElementById("quick-menu");
var listOfNavBar = document.getElementsByClassName("list");

let cross = document.getElementById("quick-menu-cross");

quickMenuButton.addEventListener("click", function(){
    
    [].forEach.call(listOfNavBar, function(el){
        /*el.add("right");*/
        el.style.display="block";
        el.style.fontSize= "100%"
        el.style.borderBottom= "1px solid rgba(73, 73, 73, 0.767)";
    });

    [].forEach.call(document.getElementsByClassName("logo"), function(el){
        el.style.display="flex";
    });

    

    document.getElementById("nav").classList.remove("flex");
    document.getElementById("nav").classList.add("right");

    let navcont= document.getElementById("nav-content-container");
    navcont.style.position= "fixed";
    navcont.style.right="0";
    navcont.style.bottom="0";
    navcont.style.top="5px";
    navcont.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    navcont.style.border="1px solid rgba(73, 73, 73, 0.767)";
    navcont.style.borderTopStyle= "none";
    navcont.style.height= "100%";

    quickMenuButton.style.display="none";

    cross.style.display="inline";
    cross.style.fontSize="75%";
    cross.style.float= right;

});

cross.addEventListener("click", function(){
    [].forEach.call(listOfNavBar, function(el){
        el.style.display="none";
    });

    [].forEach.call(document.getElementsByClassName("logo"), function(el){
        el.style.display="flex";
    });

    

    document.getElementById("nav").classList.remove("right");
    document.getElementById("nav").classList.add("flex");

    let navcont= document.getElementById("nav-content-container");
    navcont.style.position= "fixed";
    navcont.style.right="0";
    navcont.style.bottom="0";
    navcont.style.top="5px";
    navcont.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navcont.style.border="0px";
    navcont.style.height= "auto";

    quickMenuButton.style.display="inline";

    cross.style.display="none";
});



const navlinks = document.querySelectorAll('.anchor');
const sections = document.querySelectorAll('section');
let currentsection = "welcome-page"

window.addEventListener('scroll', ()=>{
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop -200)
        {
            currentsection = section.id;
        }
    });
    
    navlinks.forEach(navlink => {
        if(navlink.href.includes(currentsection))
        {
            console.log("current section: " + currentsection);
            document.querySelector('.select').classList.remove('select');
            navlink.classList.add("select");
        }
    });
});










