import  { moviess } from './dataObj.js';



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function showBanner() {
  let activeElement = document.querySelector('.active');
  let data= (activeElement.alt).split(";");
  document.querySelector('.home-title').innerHTML=data[0];
  document.querySelector('.watch-btn').href="play-page.html?titleID="+data[1];
}

let moviesbanner=shuffleArray(moviess);




for (let index = 1; index < 6; index++) {
  (document.getElementById(`img${index}`)).src= moviesbanner[index-1].backgroundimg;
  (document.getElementById(`img${index}`)).alt=moviesbanner[index-1].title+";"+moviesbanner[index-1].titleid;
}
showBanner();
const images = document.querySelectorAll('.slideshow-img');
let currentIndex = 0;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    if (i === index) {
      images[i].classList.add('active');
    } else {
      images[i].classList.remove('active');
    }

  }
showBanner();

}

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(changeImage, 5000);


let movies=shuffleArray(moviess);

let wrap= document.querySelector(".swiper-wrapper");


for (let index = 0; index < movies.length; index++) {
    if(movies[index].rating>3){

    let slide= document.createElement("div");
    slide.classList.add("swiper-slide");

    let moviebox= document.createElement("div");
    moviebox.classList.add("movie-box");

    let img= document.createElement("img");
    img.classList.add("movie-box-img");
    img.src=movies[index].vertimg;

    let boxtext=document.createElement("div");
    boxtext.classList.add("box-text");

    let title=document.createElement("h2");
    title.classList.add("movie-title");
    title.innerHTML= movies[index].title;

    let tags= document.createElement("span");
    tags.classList.add("movie-type");
    tags.innerHTML= movies[index].tag;

    let link= document.createElement("a");
    link.classList.add("watch-btn", "play-btn");
    link.href="play-page.html?titleID="+movies[index].titleid;

    let button= document.createElement("i");
    button.classList.add("bx", "bx-play-circle");


    link.appendChild(button);
    boxtext.appendChild(link);
    boxtext.appendChild(title);
    boxtext.appendChild(tags);
    moviebox.appendChild(img);
    moviebox.appendChild(boxtext);
    slide.appendChild(moviebox);
    wrap.appendChild(slide);



    }
    
}

let moviescontent= document.querySelector(".movies-content");

for (let index = 0; index < 12; index++) {

    let moviebox= document.createElement("div");
    moviebox.classList.add("movie-box");

    let img= document.createElement("img");
    img.classList.add("movie-box-img");
    img.src=movies[index].vertimg;

    let boxtext=document.createElement("div");
    boxtext.classList.add("box-text");

    let title=document.createElement("h2");
    title.classList.add("movie-title");
    title.innerHTML= movies[index].title;

    let tags= document.createElement("span");
    tags.classList.add("movie-type");
    tags.innerHTML= movies[index].tag;

    let link= document.createElement("a");
    link.classList.add("watch-btn", "play-btn");
    link.href="play-page.html?titleID="+movies[index].titleid;

    let button= document.createElement("i");
    button.classList.add("bx", "bx-play-circle");


    link.appendChild(button);
    boxtext.appendChild(link);
    boxtext.appendChild(title);
    boxtext.appendChild(tags);
    moviebox.appendChild(img);
    moviebox.appendChild(boxtext);
    
   moviescontent.appendChild(moviebox);


    
}

//fav movies add
let favcontent= document.querySelector(".favourites-content");

let favdata=JSON.parse(localStorage.getItem('myArrayKey'));
console.log(favdata.length);
if(favdata.length==0){
document.getElementById("boliao").style.display="block";
} 
else{
function getObjectById(id) {
  return moviess.find(item => item.titleid === id);
}

for (let index = 0; index < favdata.length; index++) {
  const foundObject = getObjectById(favdata[index]);
    let moviebox= document.createElement("div");
    moviebox.classList.add("movie-box");

    let img= document.createElement("img");
    img.classList.add("movie-box-img");
    img.src=foundObject.vertimg;

    let boxtext=document.createElement("div");
    boxtext.classList.add("box-text");

    let title=document.createElement("h2");
    title.classList.add("movie-title");
    title.innerHTML= foundObject.title;

    let tags= document.createElement("span");
    tags.classList.add("movie-type");
    tags.innerHTML= foundObject.tag;

    let link= document.createElement("a");
    link.classList.add("watch-btn", "play-btn");
    link.href="play-page.html?titleID="+foundObject.titleid;

    let button= document.createElement("i");
    button.classList.add("bx", "bx-play-circle");


    link.appendChild(button);
    boxtext.appendChild(link);
    boxtext.appendChild(title);
    boxtext.appendChild(tags);
    moviebox.appendChild(img);
    moviebox.appendChild(boxtext);
    
    
   favcontent.appendChild(moviebox);


    
}
}





