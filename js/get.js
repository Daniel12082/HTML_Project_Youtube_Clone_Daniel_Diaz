const options = {
	headers: {
		'X-RapidAPI-Key': 'e508798965msh2a10695dc44196fp132678jsnfb54a0e8f81b',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};
export const SearchAll = async (p1) => {
    options.method = 'GET';
    const peticio = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=${p1}&hl=en&gl=US`, options);
    const json = await peticio.json();
    let cont = 0;
    let array = json.contents.map((val, id) => {
        if (val.playlist) return undefined;
        cont++;
        let localID = `${val.video.videoId}`;
        // Guardar localID en el local storage
        localStorage.setItem('localID', localID);
        if (cont <= 10) {
            return `<li style="color: black;"><a href="start.html" style="color: black;">${val.video.title}</a></li>`;
        }
    });
    document.querySelector("#SearchAll").innerHTML = null;
    document.querySelector("#SearchAll").insertAdjacentHTML("beforeend", array.join(" "));
};