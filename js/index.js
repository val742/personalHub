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
const currentContent = document.querySelector(".currentContent");

const refreshSite = function(part2, ...args){
  siteContent.innerHTML = args[0] + part2 + args[1];}
  
// parallax setup
const parallax_pt1 = function(picture1="./images/code.jpg") {
    let Content = (`
    <div class="parallax-container">
      <div class="parallax">
        <img src=${picture1}>
      </div>
    </div>
    `);
    return Content;}

const parallax_pt2 = function(content) {
    let Content = (`
    <div class="section blue lighten-4">
      <div class="black-text lighten-text-4">
        <div class="row container">
          <div class="col s12 m10 offset-m1">
            <div class="currentContent">
              ${content}
            </div>
          </div>
        </div>
      </div>
    </div>`);
    return Content;}

const parallax_pt3 = function(picture2="./images/code2.jpg") {
    let Content = (`
    <div class="parallax-container">
      <div class="parallax">
        <img src=${picture2}>
      </div>
    </div>
    `);
    return Content;
};

// Used to change content of page
const changePage = function (pageID){
  try{
    const desiredItem = navItemArray.find(navPages => navPages.id == pageID);
    // console.log(desiredItem)
    // console.log(contentBlock)
    console.log(desiredItem.content);
    refreshSite(desiredItem.content, desiredItem.image1, desiredItem.image2,);
    
  }catch(e){
    console.log("Error returned",e)
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
        // console.log(button.id);
      
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
// var nextPage;

// siteContent.innerHTML = navItemArray;
// siteContent.innerHTML = parallax(contentList[0].innerHTML);


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
console.log(parallax_pt1)

var runOnce;


//site has ran once trigger
runOnce = !runOnce;
  
if(runOnce){
  var part1 = parallax_pt1();
  var part2 = parallax_pt2(contentList[0].innerHTML);
  var part3 = parallax_pt3();
  refreshSite(part2, part1, part3);
  console.log("worked")
}