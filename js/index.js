//showing contact as popup
$('.number').click(function number(){
  alert('01689925465')
})

//functions
$('#offers').click(function(){
    let value = confirm('Want to see offers')
    if(value){
        alert('here is your offers')
    }
    else{
        alert('okay')
    }
})

//showing catagories
$("ul .mens").mouseenter(function () { 
  $(".men").slideDown()
  $(".men").animate({transition: "0.5s",borderRadius: "10px",margin: "7px"})
})
$("ul .mens").mouseleave(function () { 
  $(".men").hide()
})

$("ul .womens").mouseenter(function () { 
  $(".women").slideDown()
  $(".women").animate({transition: "0.5s",borderRadius: "10px",margin: "7px"})
})
$("ul .womens").mouseleave(function () { 
  $(".women").hide()
})

$("ul .kids").mouseenter(function () { 
  $(".kid").slideDown()
  $(".kid").animate({transition: "0.5s",borderRadius: "10px",margin: "7px"})
})
$("ul .kids").mouseleave(function () { 
  $(".kid").hide()
})

$("ul .accss").mouseenter(function () { 
  $(".accs").slideDown()
  $(".accs").animate({transition: "0.5s",borderRadius: "10px",margin: "7px"})
})
$("ul .accss").mouseleave(function () { 
  $(".accs").hide()
})


//bd flag
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


//payment system slide-show
const slideshowElements = $(".slideshow-element");
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