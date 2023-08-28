const path = "videos"
let video =async()=>{
    let videos = await fetch(`../json/videos.json`);
    let channel = await fetch(`../json/channel.json`);
    let vid = await videos.json();
    let cha = await channel.json()
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
}
video()
console.log(vid())