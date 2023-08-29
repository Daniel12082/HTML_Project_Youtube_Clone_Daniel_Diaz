var menuIcon = document.querySelector(".menu-icon"); 
var sidebar = document.querySelector(".sidebar");    
var container = document.querySelector(".container"); 

menuIcon.onclick = function() { 
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

let video =async()=>{
    let videos = await fetch(`../json/videos.json`);
    let channel = await fetch(`../json/channel.json`);
    let vid = await videos.json();
    let cha = await channel.json();
    let Selection = document.querySelector("#videos");
    Selection.insertAdjacentHTML("beforeend",/*html*/ `
        ${vid.contents.map((value)=>/*html*/` 
        <div class="vid-list">
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

// let wrapSuggestions = async (query) => {
//     // const url = `https://youtube138.p.rapidapi.com/channel/search/?id=${channelId}&q=${query}&hl=en&gl=US`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '65ad5ad44bmsh773a97a88fa6da5p1534e5jsn00dec9fa147b',
//             'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch("../json/videos.json");
//         const result = await response.json();
//     } catch (error) {
//         console.error(error);
//     }
// }

video()
sidebaright()
