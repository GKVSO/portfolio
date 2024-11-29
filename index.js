const cap = document.querySelector('.cap');
const sectionProjects = document.querySelector('.projects')

function calculateYDistance(firstEl, secondEl) {
	const firstElY = firstEl.getBoundingClientRect().bottom;
	const secondElY = secondEl.getBoundingClientRect().top;

	if(secondElY - firstElY >= 0) return 0;

	return (secondElY - firstElY) * -1;
}

function capHandler(cap, targetSection) {
	const offset = calculateYDistance(cap, targetSection);
	cap.style.setProperty('--offset', offset + 'px')
}

document.addEventListener('scroll', capHandler.bind(this, cap, sectionProjects)) 	
