// Popup close
var closebtn = document.querySelector(".close");
var offersection = document.querySelector(".offer");

closebtn.addEventListener("click", function() {
    offersection.style.display = "none";
});

// navbar

var menu=document.getElementById("menubar")
var closenav =document.getElementById("closenav")
var sidenav=document.getElementById("sidenav")

menu.addEventListener("click",function(){
    sidenav.style.left="0"
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})