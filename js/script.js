//Loading screen to make sure all the elements in the page is loaded correctly
window.addEventListener('load', function() {
    console.log('All assets are loaded');
    const loader = document.getElementById("preloader");
    setTimeout(() => {
        loader.classList.add("hidden");
        document.body.removeChild(loader);
    }, 500);
   
})

//Navbar active functions
//Setup variables
const navbarbtns = document.querySelectorAll(".list");
//Set a function to remove all the active classes 
function RemoveAllActiveBtns(){
    navbarbtns.forEach(btn =>{
        btn.classList.remove("active");
    });
}

const contentPages = document.querySelectorAll(".content");
//For loop to ensure that all the nav buttons when clicked, 
//remove all the active classes before updating the active class to itself
navbarbtns.forEach(btn =>{
    btn.addEventListener("click", function(){
        RemoveAllActiveBtns();
        btn.classList.add("active");
        contentPages.forEach(section=>{
            if (("#" + section.id) == btn.getAttribute("href"))
            {
                console.log(section.id + " is equal to " + btn.getAttribute("href"));
                section.classList.remove("hidden");
            }
            else
            {
                console.log(section.id + " is not equal to " + btn.getAttribute("href"));
                section.classList.add("hidden");
            }
        });
    })
});



let timeoutHandle = 0;

window.addEventListener("scroll", function () {

    // navbar[0].style.display="none"; //hide div
    /*console.log("Hide nav");*/
    clearTimeout(timeoutHandle);
    // call function to hide box after 5 seconds
    timeoutHandle = setTimeout(hideBox, 250);
});

// hides box by setting display to 'none'
hideBox = () => {
    // navbar[0].style.display= "block";
    /*console.log("unhide nav");*/
};

//get the quick menu
var quickMenuButton = document.getElementById("menu-button");
var listOfNavBar = document.getElementsByClassName("list");

let cross = document.getElementById("menu-cross");
let menuline= document.getElementById("menu-line");
let dropdownline = document.getElementById("dropup-line");

quickMenuButton.addEventListener("click", function(){
    
    let navcont= document.getElementById("nav-content-container");

    navcont.classList.add("dropdown");
    if(navcont.classList.contains("dropdown-reverse"))
    {
        navcont.classList.remove("dropdown-reverse");
    }
    
    
    menuline.style.transform="scaleX(-1)";
    navcont.style.display= "block";
    navcont.style.visibility="visible";
    navcont.style.opacity="1";



    setTimeout(() => {
        quickMenuButton.style.visibility="hidden";
        quickMenuButton.style.opacity="0";
        quickMenuButton.style.display="none";
        cross.style.display="block";
    }, 500);

});

cross.addEventListener("click", function(){
    dropdownline.style.transform="scaleY(-1)";

    let navcont= document.getElementById("nav-content-container");
    navcont.classList.remove("dropdown");
    navcont.classList.add("dropdown-reverse");

    menuline.style.transform="scaleX(1)";

    

    setTimeout(() => {
        navcont.style.display= "none";
        navcont.style.opacity="0";
        navcont.style.visibility="hidden";

        quickMenuButton.style.visibility="visible";
        quickMenuButton.style.opacity="1";
        quickMenuButton.style.display="block";
    
        cross.style.display="none";
        dropdownline.style.transform="scaleY(1)";

    }, 500);
   
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










