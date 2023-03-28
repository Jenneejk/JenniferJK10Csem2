// === Resize navbar on Scroll ===
var navbar = document.querySelector(".navbar");

// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector('.menu-btn');

if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlick is clicked
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove(".active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Product Color
var pic = document.querySelector("#main-shoe");
var white = document.querySelector(".white");
var brown = document.querySelector(".brown");
var yellow = document.querySelector(".yellow");
var pink = document.querySelector(".pink");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
const colors = document.querySelectorAll(".color");
// store product info in object
var	info = [
	{
		src: "images/products/popmiewhite.png"
	},
	{
		src: "images/products/popmiebrown.png"
	},
	{
		src: "images/products/popmieyellow.png"
	},
	{
		src: "images/products/popmiepink.png"
	},
	{
		src: "images/products/popmiegreen.png"
	},
	{
		src: "images/products/popmiered.png"
	}
]
// change color
white.addEventListener("click",function(){
	pic.src = info[0].src;
})

brown.addEventListener("click",function(){
	pic.src = info[1].src;
})

yellow.addEventListener("click",function(){
	pic.src = info[2].src;
})

pink.addEventListener("click",function(){
	pic.src = info[3].src;
})

green.addEventListener("click",function(){
	pic.src = info[4].src;
})

red.addEventListener("click",function(){
	pic.src = info[5].src;
})

//active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}

colors.forEach(c => c.addEventListener('click', color));