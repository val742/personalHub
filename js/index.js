// Load opening page first
// query other menu items during this time
import navItemArray from "./navItems.js"

var isNavOpen = false;

// console.log(openPage)
// console.log(nextPage)

if (isNavOpen == true){
document.querySelector('.sidenav-overlay').setAttribute("style", "block")}
else{
document.querySelector('.sidenav-overlay').setAttribute("style", "none");}

const listContent = document.querySelector(".listContent");
const siteContent = document.querySelector(".maincontent");

// parallax setup
const parallax = (content, picture1="./images/code.jpg", 
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
      <div class="col s12 m10 offset-m1">
        ${content}
      </div>
      </div>
    </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="${picture2}"></div>
    </div>
    `);
    return newContent;
};

// Used to change content of page
const changePage = function (pageID){
  try{
    const desiredItem = navItemArray.find(navPages => navPages.id == pageID);
    console.log(desiredItem)
    siteContent.innerHTML = parallax(desiredItem.content, desiredItem.image1, desiredItem.image2)
  }catch{
    console.log("Error returned")
  };
};

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
        // Event to change 
        changePage(button.id);
        console.log(button.id);
      
    })

    return navList;
});

const contentList = navItemArray.map(function (items){
    let itemlist = document.createElement("div");
    itemlist.setAttribute("id", items.id);
    itemlist.innerHTML = items.content;

    return itemlist;
});

console.log(contentList[0].innerHTML);
var openPage=contentList[0].innerHTML;
// var nextPage;

// siteContent.innerHTML = navItemArray;
siteContent.innerHTML = parallax(openPage);


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
