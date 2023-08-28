var menuIcon = document.querySelector(".ri-menu-line")
var sidebar = document.querySelector(".sidebar")
var content = document.querySelector(".content")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    content.classList.toggle("small-content")
}
