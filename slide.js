
window.onload = function() {
    const kindWrap = document.querySelector('.kind_wrap');/* slider 스타일 지정하는 거 */
    const slider = kindWrap.querySelector('.slider');/* 슬라이더들 가지고 오기 */
    const slideLis = slider.querySelectorAll('li');/* 슬라이더 이미지 전부 가지고 오기 */
    const moveButtons = kindWrap.querySelectorAll('.arrow a , .arrow_button a');/*버튼 가지고 오기*/

    /* ul 넓이 계산해 주기 */
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    slider.style.width = `${sliderWidth}vw`;


    /* 리스너 설치하기 */
    let currentIdx = 0; // 슬라이드 현재 번호
    let translate = 0; // 슬라이드 위치 값

    moveButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (button.classList.contains('first')) {
                if (currentIdx !== 0) {
                    translate = 0;
                    slider.style.transform = `translateX(${translate}px)`;
                    currentIdx = 0;
                }
            } else if (button.classList.contains('second')) {
                if (currentIdx !== 1) {
                    translate = -liWidth;
                    slider.style.transform = `translateX(${translate}px)`;
                    currentIdx = 1;
                }
            } else if (button.classList.contains('third')) {
                if (currentIdx !== 2) {
                    translate = -liWidth * 2;
                    slider.style.transform = `translateX(${translate}px)`;
                    currentIdx = 2;
                }
            } else if (button.classList.contains('fourth')) {
                if (currentIdx !== 3) {
                    translate = -liWidth * 3;
                    slider.style.transform = `translateX(${translate}px)`;
                    currentIdx = 3;
                }
            }
        });
    });

    const moveSlide = (index) => {
        translate = -liWidth * index;
        slider.style.transform = `translateX(${translate}px)`;
        currentIdx = index;
    };


    moveButtons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentIdx !== index) {
                moveSlide(index);
            }
        });
    });

    // 자동 슬라이드 기능 추가
    let interval = setInterval(() => {
        const nextIdx = (currentIdx + 1) % slideLis.length;
        moveSlide(nextIdx);
    }, 3000);

z
};