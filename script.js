var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")


function opentab(tabname){
  //the for loop removes all active links and tabs
  for(tablink of tablinks){
      tablink.classList.remove("active-link");

  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");

}
  //the code below make sure if a link is selected the css funtion is applied
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0"
}
function closemenu(){
  sidemenu.style.right = "-200px"
}
