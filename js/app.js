const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const destinations = document.querySelector("#destinations");
const switchBtn_1 = document.querySelector("#switch-1");
const switchBtn_2 = document.querySelector("#switch-2");
const switchBtn_3 = document.querySelector("#switch-3");
const switchImg_1 = document.querySelector("#switch-1-img");
const switchImg_2 = document.querySelector("#switch-2-img");
const switchImg_3 = document.querySelector("#switch-3-img");

navBtn.onclick = () => {
	if (nav.classList.toggle("open")) {
		navBtn.classList.add("active");
	} else {
		navBtn.classList.remove("active");
	}
}
switchBtn_1.onclick = () => {
		switchBtn_1.classList.add("active");
		switchBtn_2.classList.remove("active");
		switchBtn_3.classList.remove("active");
		switchImg_1.classList.add("right");
		switchImg_2.classList.add("right");
		switchImg_3.classList.add("right");
		switchImg_1.classList.remove("left");
		switchImg_2.classList.remove("left");
		switchImg_3.classList.remove("left");
}
switchBtn_2.onclick = () => {
	switchBtn_1.classList.remove("active");
	switchBtn_2.classList.add("active");
	switchBtn_3.classList.remove("active");
	switchImg_1.classList.remove("right");
	switchImg_2.classList.remove("right");
	switchImg_3.classList.remove("right");
	switchImg_1.classList.remove("left");
	switchImg_2.classList.remove("left");
	switchImg_3.classList.remove("left");
}
switchBtn_3.onclick = () => {
	switchBtn_1.classList.remove("active");
	switchBtn_2.classList.remove("active");
	switchBtn_3.classList.add("active");
	switchImg_1.classList.add("left");
	switchImg_2.classList.add("left");
	switchImg_3.classList.add("left");
	switchImg_1.classList.remove("right");
	switchImg_2.classList.remove("right");
	switchImg_3.classList.remove("right");
}