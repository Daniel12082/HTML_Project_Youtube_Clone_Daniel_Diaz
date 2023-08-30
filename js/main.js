
var menuIcon = document.querySelector(".menu-icon"); 
var sidebar = document.querySelector(".sidebar");    
var container = document.querySelector(".container"); 

menuIcon.onclick = function() { 
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
import { SearchAll } from "./get.js";
document.querySelector("#chartSearch").addEventListener("change", (e)=>{
    SearchAll(e.target.value)
});
document.querySelector("#chartSearch").addEventListener("change", (e) => {
    const activeElement = document.querySelector("#active"); // Obtén el elemento con ID "active"
    activeElement.style.height = "210px"; // Cambia la altura a 300px
});
document.querySelector("#chartSearch").addEventListener("click", (e) => {
    const activeElement = document.querySelector("#active"); // Obtén el elemento con ID "active"
    activeElement.style.visibility="visible"; // Mostrar la barra de busqueda
});

document.addEventListener("click", (e) => {
    const activeElement = document.querySelector("#active");
    if (e.target !== activeElement) {
activeElement.style.visibility="visible";
}
});
SearchAll()
