let localID = localStorage.getItem('Id')

const urls = `https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`;
const url = `https://youtube138.p.rapidapi.com/video/details/?id=${localID}&hl=en&gl=US`;
const urlchanel =`https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0bebbf360msha2b9e8f73d1e2aap10ff3cjsnd5d276805e77',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

let listvideo =async()=>{
    let videos = await fetch(urls,options);
    let channel = await fetch(urlchanel,options);
    let vid = await videos.json();
    let cha = await channel.json();
    let Selection = document.querySelector("#videos");
    Selection.insertAdjacentHTML("beforeend",/*html*/ `
        ${vid.contents.map((value)=>/*html*/` 
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

        info.forEach(video =>{
            video.addEventListener('click', () =>{
                let videoID = video.getAttribute("data-video-id")
                localStorage.setItem('Id', videoID)
                window.location.href = 'start.html';
            })
        })
}
let screenvideo= async()=>{
    let id = localID
    console.log(id)
    let channel = await fetch(urlchanel,options);
    let details = await fetch(url,options);
    let det = await details.json();
    let cha = await channel.json();
    let Selection2 = document.querySelector("#play-video");
    Selection2.insertAdjacentHTML("beforeend",/*html*/ `
    <iframe width=100% height=5% src="https://www.youtube.com/embed/${id}?si=uSQ-OWYwAACGFsV9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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