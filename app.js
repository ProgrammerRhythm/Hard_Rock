const input = document.getElementById('input').value;
const sir = document.getElementById('sir').addEventListener("click", function(){
const input = document.getElementById('input').value;
fetch(`https://api.lyrics.ovh/suggest/:${input}`)
.then(res => res.json())
.then(data => {
    const value = data.data;
    const show = document.getElementById('show');
    show.innerHTML='';
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        const artistName = element.artist.name;
        const songTitle = element.title;
        const show2 = document.createElement('p');
        show2.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${songTitle}</h3>
                <p class="author lead">Album by <span>${artistName}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyric('${artistName}','${songTitle}')" class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`
        show.appendChild(show2);
    }
    
})   
})
const getLyric = (artist, title) => {
const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
fetch(url)
.then(res => res.json())
.then(data => {
console.log(data);
const showLyrics = document.getElementById('showLyrics');
showLyrics.innerHTML = data.lyrics;
})
}