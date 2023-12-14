document.addEventListener('DOMContentLoaded', function () {
    //Get the button and navigation links
    var button = document.getElementById('btn');
    var navlinks = document.getElementById("navlinks");
   
    //When the button is clicked, toggle the navigation
    button.onclick = function () {
       toggleNav();
    }
   
    function toggleNav() {
       if (navlinks.style.right === "0px") {
           hidemenu();
       } else {
           showmenu();
       }
    }
   
    function showmenu() {
       navlinks.style.right = "0";
    }
   
    function hidemenu() {
       navlinks.style.right = "-200px";
    }
   });