
import  { moviess } from './dataObj.js';

let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let close = document.querySelector('.close-video');
let haram = document.getElementById("download");
let movies = moviess;

playButton.onclick = () => {
    video.classList.add('show-video');
}

close.onclick = () => {
    video.classList.remove('show-video');
}

haram.onclick = () => {
    alert("For legal purposes it doesnt work")
}

const searchParams = new URLSearchParams(window.location.search);
let movieinfo = movies[parseInt(searchParams.get("titleID")) - 1];
document.getElementById('movietitle').innerHTML = movieinfo.title;
document.getElementById('aboutmovietitle').innerHTML = movieinfo.title;
document.getElementById('aboutmoviedesc').innerHTML = movieinfo.description;
document.querySelector('.play-img').src = movieinfo.backgroundimg;
let rating = document.querySelector('.rating');
for (let index = 0; index < movieinfo.rating; index++) {
    let y = document.createElement("i");
    y.classList.add("bx", "bxs-star");
    rating.appendChild(y);

}
let tags = (movieinfo.tag).split(",");
let taglist = document.querySelector('.tags');
for (let index = 0; index < tags.length; index++) {
    let y = document.createElement("span");
    y.innerText = tags[index];
    taglist.appendChild(y);

}

let cast = (movieinfo.cast).split(",");
let castlist = document.querySelector('.cast');
for (let index = 0; index < cast.length; index++) {
    let y = document.createElement("div");
    y.classList.add("cast-box");

    let imgadd = document.createElement("img");
    imgadd.classList.add("class-img");
    imgadd.src = movieinfo.castimg[index];

    let nameadd = document.createElement("span");
    nameadd.classList.add("cast-title");
    nameadd.innerHTML = cast[index];

    y.appendChild(imgadd);
    y.appendChild(nameadd);

    castlist.appendChild(y);

}

document.getElementById("myvideo").src = "https://www.youtube.com/embed/" + movieinfo.playlink;
let isliked = false;
let likedvalues=JSON.parse(localStorage.getItem('myArrayKey'));
let liked=[];

if(likedvalues==null){
 liked=[];

}
else{
    liked=likedvalues;

if (likedvalues.includes(movieinfo.titleid)) {
    document.getElementById("fav-button").style.background = "red";
    isliked = true;
}

}
document.getElementById("fav-button").onclick = () => {
    if (isliked == false) {
        liked.push(movieinfo.titleid);
        localStorage.setItem('myArrayKey', JSON.stringify(liked));
        document.getElementById("fav-button").style.background = "red";
        isliked = true;
        console.log(liked);
    }
    else {
        
        const indexToRemove = liked.indexOf(movieinfo.titleid);
        if (indexToRemove !== -1) {
            liked.splice(indexToRemove, 1);
          }
          localStorage.setItem('myArrayKey', JSON.stringify(liked));
        console.log(liked);
        document.getElementById("fav-button").style.background = "black";
        isliked = false;
    }
}

export {liked};

