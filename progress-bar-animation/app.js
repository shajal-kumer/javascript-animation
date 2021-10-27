const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgresBar = () => {
	const scrollDistance = -section.getBoundingClientRect().top;
	const SectionHeight = section.getBoundingClientRect().height;
	const totalHeight = SectionHeight - document.documentElement.clientHeight;
	let progressWidth = Math.floor((scrollDistance / totalHeight) * 100);

	if (progressWidth <= 0) {
		progressWidth = 0;
	}
	// console.log(progressWidth);
	progressBar.style.width = progressWidth + "%";
};

window.addEventListener("scroll", animateProgresBar);
