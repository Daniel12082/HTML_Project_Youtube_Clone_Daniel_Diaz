export const SearchAll = async() =>{
    let peticion = await fetch("../json/videos.json");
    let respuesta = await peticion.json();
    let array = respuesta.contents.map((value,id)=>{ 
        if(value.playlist) return undefined;
        return /*html*/ `<li><a style="color:black" href="https://www.youtube.com/watch?v=${value.video.id}">${value.video.title}</a></li>` 
    })
    document.querySelector("#SearchAll").insertAdjacentHTML("beforeend",array.join(" "))
}