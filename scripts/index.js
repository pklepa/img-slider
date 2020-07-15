const display = document.querySelector('.display');

const imgs = Array.from(document.querySelectorAll('img'));
let currentImg = 0;

const dots = Array.from(document.querySelectorAll('.nav-item'));
dots.forEach((dot) =>
	dot.addEventListener('click', () => refreshDisplay(dots.indexOf(dot)))
);

const next = document.querySelector('.btn#next');
next.addEventListener('click', nextImg);
const prev = document.querySelector('.btn#prev');
prev.addEventListener('click', previousImg);

let timer = setInterval(nextImg, 6000);

window.addEventListener('keydown', (e) => {
	e.code == 'ArrowLeft' ? previousImg() : nextImg();
});

function nextImg() {
	let nextImg;
	if (currentImg < imgs.length - 1) {
		nextImg = currentImg + 1;
	} else {
		nextImg = 0;
	}

	refreshDisplay(nextImg);
}

function previousImg() {
	let nextImg;
	if (currentImg > 0) {
		nextImg = currentImg - 1;
	} else {
		nextImg = imgs.length - 1;
	}

	refreshDisplay(nextImg);
}

function refreshDisplay(imgIndex) {
	clearInterval(timer);
	timer = setInterval(nextImg, 6000);

	imgs[currentImg].classList.toggle('hidden');
	dots[currentImg].classList.toggle('active');

	imgs[imgIndex].classList.toggle('hidden');
	dots[imgIndex].classList.toggle('active');

	currentImg = imgIndex;

	// This step is necessary to refresh the animation on the display (see https://css-tricks.com/restart-css-animation/)
	display.classList.remove('flash');
	void display.offsetWidth;
	display.classList.add('flash');
}
