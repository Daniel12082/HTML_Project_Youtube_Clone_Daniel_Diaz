let localID = localStorage.getItem('Id')
let listvideo =async()=>{
    let videos = await fetch(`../json/videos.json`);
    let channel = await fetch(`../json/channel.json`);
    let vid = await videos.json();
    let cha = await channel.json();
    let Selection = document.querySelector("#videos");
    Selection.insertAdjacentHTML("beforeend",/*html*/ `
        ${vid.contents.map((value)=>/*html*/` 
        <div class="box-video">
        <a href="" class="small-thumbnail"><img src="${value.video.thumbnails[3].url}"></a>                
                <div class="vid-info">
                    <a href="start.html">${value.video.title}</a>
                    <p>${cha.title}</p>
                    <p>${value.video.stats.views} views &bull; ${value.video.publishedTimeText}</p>
                </div>
        </div>`).join(" ")}
    `)
}

let screenvideo= async()=>{
    let channel = await fetch(`../json/channel.json`);
    let details = await fetch(`../json/videodetils.json`);
    let det = await details.json();
    let cha = await channel.json();
    let Selection2 = document.querySelector("#play-video");
    Selection2.insertAdjacentHTML("beforeend",/*html*/ `
    <video controls autoplay>
        <source src="img/video.mp4" type="video/mp4">
    </video>
    <h3>${det.title}</h3>
    <div class="play-video-info">
        <p>${det.stats.views} &bull; ${det.publishedDate}</p>
        <div>
            <a href=""><img src="img/like.png">${det.stats.likes}</a>
            <a href=""><img src="img/dislike.png">0</a>
            <a href=""><img src="img/share.png">share</a>
            <a href=""><img src="img/save.png">save</a>
        </div>
    </div>
    <hr>
    <div class="plublisher">
        <img src="${det.author.avatar[2].url}">
        <div>
            <p>${det.author.title}</p>
            <span>${det.author.stats.subscribersText}</span>
        </div>
        <button type="button">Subscribe</button>
    </div>
    <div class="vid-description">
        <p>${cha.joinedDateText} </p>
        <p>${det.description}</p>
        <hr>
        <h4>The comments are disabled.</h4>
    </div>
    `)
}

screenvideo()
listvideo()