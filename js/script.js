//Loading screen to make sure all the elements in the page is loaded correctly
window.addEventListener('load', function() {
    console.log('All assets are loaded');
    const loader = document.querySelector(".preloader");
    setTimeout(() => {
        loader.classList.add("hidden");
        document.body.removeChild(loader);
    }, 300);
   
})

//Navbar active functions
//Setup variables
const navbarbtns = document.querySelectorAll(".anchor");
//Set a function to remove all the active classes 
function RemoveAllActiveBtns(){
    navbarbtns.forEach(btn =>{
        btn.classList.remove("active");
    });
}
//For loop to ensure that all the nav buttons when clicked, 
//remove all the active classes before updating the active class to itself
navbarbtns.forEach(btn =>{
    btn.addEventListener("click", function(){
        RemoveAllActiveBtns();
        btn.classList.add("active");
    })
});



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










