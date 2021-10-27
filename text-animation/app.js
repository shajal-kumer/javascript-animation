const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.innerHTML = "";

for (let value of splitText) {
	text.innerHTML += `<span>${value}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
	const span = document.querySelectorAll("span")[char];
	span.classList.add("fade");
	char++;

	if (char === splitText.length) {
		complete();
	}
}

function complete() {
	clearInterval(timer);
	char = 0;
	timer = null;
}
