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

const div = slides[0];

for (var i = 0; i < slides.length; i++) {
	console.log(i);
}


var flecheGauche = document.querySelector(".arrow_left");

flecheGauche.onclick = function () {
	console.log("fleche gauche");
}

var flecheDroite = document.querySelector(".arrow_right");

flecheDroite.onclick = function () {
	console.log("fleche droite");
}


