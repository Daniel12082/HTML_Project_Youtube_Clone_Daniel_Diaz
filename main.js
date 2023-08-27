var menuIcon = document.querySelector(".ri-menu-line")
var sidebar = document.querySelector(".sidebar") 

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}
