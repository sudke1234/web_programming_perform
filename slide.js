/*슬라이드 불러오기 슬라이드 넓이 구하기  */
const Slide = document.querySelector(".slide slide_wrap");
let SlideWidth = Slide.clientWidth;

const button_prev = document.querySelector(".slide_prev_button");
const button_next = document.querySelector(".slide_next_button");

let SlideItems = document.querySelectorAll(".slide_item");
const maxSlide = SlideItems.length;

const pagination = document.querySelector(".slide_pagenation");
