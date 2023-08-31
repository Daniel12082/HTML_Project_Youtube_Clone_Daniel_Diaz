var menuIcon = document.querySelector(".menu-icon"); 
var sidebar = document.querySelector(".sidebar");    
var container = document.querySelector(".container");
var urls = null
var urlchanel = null
var urls = `https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`;
var urlchanel =`https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'da3f7e9588mshb54e3de64184886p154afcjsnc803f0e29d9d',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
/*Funcion que abre la sidebar al precionar el icono */
menuIcon.onclick = function() { 
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
/*Funcion que trae todos los video de la pagina principal*/
let video =async()=>{
    let videos = await fetch(urls, options);
    let channel = await fetch(urlchanel, options);
    let vid = await videos.json();
    let cha = await channel.json();
    /*Funcion Para reordenar los video y que sean random */
    function newarray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const parametro = vid.contents
    const newcontents = newarray(parametro)
    let Selection = document.querySelector("#videos");
    /*Ingreso de datos de los video al htmls */
    Selection.insertAdjacentHTML("beforeend",/*html*/ `
        ${newcontents.map((value)=>/*html*/` 
        <div class="vid-list" data-video-id="${value.video.videoId}">
            <a href="start.html"><img src="${value.video.thumbnails[3].url}" class="thumbnai1"></a>
            <div class="flex-div">
                <img src="${cha.avatar[2].url}">
                <div class="vid-info">
                    <a href="start.html">${value.video.title}</a>
                    <p>${cha.title}</p>
                    <p>${value.video.stats.views} views &bull; ${value.video.publishedTimeText}</p>
                </div>
            </div>
        </div>`).join(" ")}
    `)
/*Funcion que guarda el id del video en localstorage y lo llamo en el el javascript del reproductor de video*/
    const info = document.querySelectorAll(".vid-list")
        info.forEach(video =>{
            video.addEventListener('click', () =>{
                let videoID = video.getAttribute("data-video-id")
                localStorage.setItem('Id', videoID)
                window.location.href = 'start.html';
            })
        })
/*Cambio de banner */
    let Selection2 = document.querySelector("#banner")
    Selection2.insertAdjacentHTML("beforeend",/*html*/ `
    <div class="banner">
            <img src="${cha.banner.desktop[5].url}" alt="">
    </div>
    `)
}
let sidebaright = async()=>{
    let sidebarpos = await fetch(`../json/config.json`);
    let sid = await sidebarpos.json();
    let selection3 = document.querySelector("#sidebar")
    selection3.insertAdjacentHTML  ("beforeend", /*html*/ `
    <a href="index.html"><img src="${sid.sidebar.principal.images}"><p>${sid.sidebar.principal.text}</p></a>
    ${sid.sidebar.secondary.map((value)=>/*html*/ `
    <a href=""><img src="${value.images}"><p>${value.text}</p></a>
    `  ).join(" ")}
    <hr>
`)
}
video()
sidebaright()
