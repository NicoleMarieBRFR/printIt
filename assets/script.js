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

// const slides = await fetch("tableaux-slides.json").then(slides => slides.json());

const div = slides[0];

function generetedDots() {
	for (let i = 0; i < slides.length; i++) {
		const dotsSlides = document.querySelector(".dots");
		const dotSlides = document.createElement("div");
		dotSlides.classList.add("dot");
		dotsSlides.appendChild(dotSlides);
	}
}


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

var flecheGauche = document.querySelector(".arrow_left");

flecheGauche.onclick = function () {
	console.log("fleche gauche");
}

var flecheDroite = document.querySelector(".arrow_right");

flecheDroite.onclick = function () {
	console.log("fleche droite");
}


