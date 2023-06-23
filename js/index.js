//showing contact as popup
document.querySelector('.number').addEventListener('click', number)

//functions
function number(){
    alert('01689925465')
}
document.querySelector('#offers').addEventListener('click', function(){
    let value = confirm('Want to see offers')
    if(value){
        alert('here is your offers')
    }
    else{
        alert('fuckoff')
    }
})

var c = document.querySelector('#mycan')
var cx = c.getContext('2d')
cx.fillStyle = "green"
cx.fillRect(4,4,60,40)
var x = c.width /2
var y = c.height /2
cx.beginPath()
cx.arc(x,y,10,0,2*Math.PI, false)
cx.fillStyle = "red"
cx.fill()

const slideshowElements = document.querySelectorAll(".slideshow-element");
console.log(slideshowElements)

let countElements = 1;

setInterval(() => {
  countElements++;
  console.log("countElements")
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElements > slideshowElements.length) {
    slideshowElements[0].classList.add("current");
    countElements = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);