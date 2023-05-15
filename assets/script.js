const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Dots
function generetedDots() {
	for (let i = 0; i < slides.length; i++) {
		const dotsParent = document.querySelector(".dots");
		const dotChild = document.createElement("div");
		dotChild.classList.add("dot");
		dotsParent.appendChild(dotChild);
	}
}

function firstElementDots() {
	const dotsParent = document.querySelector(".dots");
	const dotChild = document.querySelector(".dot");
	dotChild.classList.add("dot_selected");
}


// Contenu 
function generetedSlider(slides) {
	for (let i = 0; i < slides.length; i++) {

		const imageSlides = document.createElement("img");
		imageSlides.src = "./assets/images/slideshow/" + slides[i].image;

		const taglineSlides = document.createElement("p");
		document.body.appendChild(taglineSlides);
		taglineSlides.appendChild(imageSlides);

		console.log(slides[i].image);

	}

}

generetedDots();
generetedSlider(slides);
firstElementDots();


var slideIndex = 0;
const slideShow = slides[slideIndex];
var flecheGauche = document.querySelector(".arrow_left");

// Fleches
flecheGauche.onclick = function () {
	if (slideIndex === 0) {
		slideIndex = slides.length - 1
	}
	else slideIndex--;

	console.log(slideIndex);
}

var flecheDroite = document.querySelector(".arrow_right");

flecheDroite.onclick = function () {
	if (slideIndex === slides.length - 1) {
		slideIndex = 0
	}
	else slideIndex++;

	console.log(slideIndex);
}

//teste
// const dotsSlides = document.querySelector(".dots");
// dotsSlides.addEventListener('div', function () {
// 	const slidesFilter = slides.filter(function (slides) {
// 		return slides.item <= dotsSlides.ariaValueMax;
// 	});
// 	document.querySelector("banner").innerHTML = "";
// 	generetedSlider(slides);

// });


