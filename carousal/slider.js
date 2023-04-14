const images = [
    'images/slider-1.jpg', 
    'images/slider-2.jpg', 
    'images/slider-3.jpg', 
]

let imgIndex = 0; 
const imgEl = document.getElementById('slider-img');
setInterval( () =>{
    // console.log(imgIndex);
    if(imgIndex === images.length){
        imgIndex = 0;
    }
    const imageLink = images[imgIndex]; 
    // console.log(imgIndex, imageLink);
    imgEl.setAttribute('src', imageLink);
    imgIndex++;
}, 1000)