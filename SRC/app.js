const dropDownMenu = document.getElementById("drop-down-menu");
const hamburger = document.getElementById("hamburger-button");
const body = document.getElementById("body");
const closeButton = document.getElementById("close-button");

hamburger.addEventListener("click", () => {
	dropDownMenu.setAttribute("class", "flex h-screen bg-black");
	body.setAttribute("class", "bg-stone-400 overflow-hidden");
	hamburger.setAttribute("class", "hidden");
	closeButton.setAttribute(
		"class",
		"flex flex-col w-16 p-4 absolute self-center"
	);
});
