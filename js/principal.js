let video =async()=>{
    let videos = await fetch(`../json/videos.json`);
    let channel = await fetch(`../json/channel.json`);
    let vid = await videos.json();
    let cha = await channel.json();
    let Selection = document.querySelector("#video");
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
    <a href="/index.html"><img src="${sid.sidebar.principal.images}"><p>${sid.sidebar.principal.text}</p></a>
    ${sid.sidebar.secondary.map((value)=>/*html*/ `
    <a href=""><img src="${value.images}"><p>${value.text}</p></a>
    `  ).join(" ")}
    <hr>
`)
}
video()
sidebaright()
