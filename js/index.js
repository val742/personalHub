// Load opening page first
// query other menu items during this time
import navItemArray from "./navItems.js"

var isNavOpen = false;
var openPage;
var nextPage;

console.log(openPage)
console.log(nextPage)

if (isNavOpen == true){
document.querySelector('.sidenav-overlay').setAttribute("style", "block")}
else{
document.querySelector('.sidenav-overlay').setAttribute("style", "none");}

const listContent = document.querySelector(".listContent");
const siteContent = document.querySelector(".maincontent");

// Create list items from nav array
const navItemList = navItemArray.map(function (navitem) {
    let navList = document.createElement("li");
    navList.setAttribute("id", navitem.id);
    navList.classList.add("navItem");
    
    navList.innerHTML = `
    <a id="${navitem.id}" class="btn-flat">${navitem.name}</a>
    `;

    // console.log(navList.id)
    let button = navList
    
    button.addEventListener("click", ()=>{
        console.log(button.id);
        openPage = button.id;
        // let content = navItemArray.find(item => openPage);
        siteContent.innerHTML = parallax(button.content);
    })

    return navList;
});

// parallax setup
const parallax = (content=nextPage, picture1="./images/code.jpg", 
                           picture2="./images/code2.jpg") => {
    
    let newContent = (
    `
    <div class="parallax-container">
      <div class="parallax">
      <img src="${picture1}"></div>
    </div>

    <div class="section blue lighten-4">
    <div class="black-text lighten-text-4">
      <div class="row container">
        ${content}
      </div>
    </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="${picture2}"></div>
    </div>
    `);
    return newContent;
};

const navButton = (id, content) =>{
    const selected = navItemArray.find(id => id);
    openPage = id;
}




siteContent.innerHTML = navItemArray;
siteContent.innerHTML = parallax();

// Required Material listeners
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

navItemList.forEach((navitem) => {
    listContent.append(navitem);
});
