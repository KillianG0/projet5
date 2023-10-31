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
  ];
  
  const images = document.querySelectorAll('.banner-img');
  const tagLine = document.getElementById('tagLine');
  const arrowLeft = document.querySelector('.arrow_left');
  const arrowRight = document.querySelector('.arrow_right');
  const dots = document.querySelectorAll('.dot');
  let currentImageIndex = 0;
  
  // Fonction pour afficher une image en fonction de son index
  function showImage(index) {
	images.forEach((image) => (image.style.display = 'none'));
	dots.forEach((dot) => dot.classList.remove('dot_selected'));
	images[index].style.display = 'block';
	tagLine.innerHTML = slides[index].tagLine;
	dots[index].classList.add('dot_selected');
	currentImageIndex = index;
  }
  
  // Fonction pour afficher l'image suivante
  function showNextImage() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	showImage(currentImageIndex);
  }
  
  // Fonction pour afficher l'image précédente
  function showPreviousImage() {
	currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	showImage(currentImageIndex);
  }
  
  // Gestionnaires d'événements pour les flèches
  arrowLeft.addEventListener('click', showPreviousImage);
  arrowRight.addEventListener('click', showNextImage);
  
  // Gestionnaire d'événements pour les indicateurs (dots)
  dots.forEach((dot, index) => {
	dot.addEventListener('click', () => showImage(index));
  });
  
 