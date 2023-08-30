let localID = localStorage.getItem('Id')
var urls=null
var url=null
var urlchanel=null
var urls = `https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`;
var url = `https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US`;
var urlchanel = `https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e508798965msh2a10695dc44196fp132678jsnfb54a0e8f81b',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};
let listvideo = async () => {
    let videos = await fetch(urls, options);
    let channel = await fetch(urlchanel ? urlchanel : "../json/channel.json", options);
    let vid = await videos.json();
    let cha = await channel.json();
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
    Selection.insertAdjacentHTML("beforeend",/*html*/ `
        ${newcontents.map((value) =>/*html*/` 
        <div class="box-video" data-video-id="${value.video.videoId}">
        <a href="" class="small-thumbnail"><img src="${value.video.thumbnails[3].url}"></a>                
                <div class="vid-info">
                    <a href="start.html">${value.video.title}</a>
                    <p>${cha.title}</p>
                    <p>${value.video.stats.views} views &bull; ${value.video.publishedTimeText}</p>
                </div>
        </div>`).join(" ")}
    `)
    const info = document.querySelectorAll(".box-video")
    info.forEach(video => {
        video.addEventListener('click', () => {
            let videoID = video.getAttribute("data-video-id")
            localStorage.setItem('Id', videoID)
            window.location.href = 'start.html';
        })
    })
    function newarray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
let screenvideo = async () => {
    let id = localID
    console.log(id)
    let channel = await fetch(urlchanel ? urlchanel : "../json/channel.json", options);
    let details = await fetch(url ? url: "../json/videodetils.json", options);
    let det = await details.json();
    let cha = await channel.json();
    let Selection2 = document.querySelector("#play-video");
    Selection2.insertAdjacentHTML("beforeend",/*html*/ `
    <iframe id="video-grande" src="https://www.youtube.com/embed/${id}?si=uSQ-OWYwAACGFsV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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