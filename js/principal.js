
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
let Selection2 = document.querySelector("#video")
Selection.insertAdjacentHTML("beforeend",/*html*/ `
<div class="banner">
        <img src="" alt="" id=" banner">
    </div>
`)
}

let sidebar = async()=>{
    let sidebarpos = await fetch(`../json/config.json`);
    let sid = await sidebarpos.json();
    let selection3 = document.querySelector("#sidebar")
    selection3.insertAdjacentHTML  ("beforeend", /*html*/ `
    <div class="shortcut-links">
    <a href="/index.html"><img src="${sid.sidebar[]}"><p>Home</p></a>
    ${sid.sidebar.map((value)`
    `)}
            
            <a href=""><img src="img/explore.png"><p>Explore</p></a>
            <a href=""><img src="img/subscription.png"><p>Subscription</p></a>
            <a href=""><img src="img/library.png"><p>Library</p></a>
            <a href=""><img src="img/history.png"><p>History</p></a>
            <a href=""><img src="img/playlist.png"><p>Playlist</p></a>
            <a href=""><img src="img/messages.png"><p>Messages</p></a>
            <a href=""><img src="img/show-more.png"><p>show More</p></a>
            <hr>`)
}
video()