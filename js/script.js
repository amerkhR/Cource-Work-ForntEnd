const offset = 100;
const scrollUp = document.querySelector('.scroll-up');

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//onScroll
window.addEventListener('scroll', () => {
	if (getTop() > offset){
		scrollUp.classList.add('scroll-up--acitive');
	} else {
		scrollUp.classList.remove('scroll-up--acitive');
	}
});

//click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

