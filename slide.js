
window.onload = function() {
    const kindWrap = document.querySelector('.kind_wrap');
    const slider = kindWrap.querySelector('.slider');
    const slideLis = slider.querySelectorAll('li');
    const moveButtons = kindWrap.querySelectorAll('.arrow a , .arrow_button a');

    /* ul 넓이 계산해 주기 */
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    slider.style.width = `${sliderWidth}px`;


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

    // 마우스가 슬라이드에 올라갔을 때 자동 슬라이드 멈추기
    kindWrap.addEventListener('mouseover', () => {
        clearInterval(interval);
    });

    // 마우스가 슬라이드에서 벗어났을 때 다시 자동 슬라이드 시작
    kindWrap.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(() => {
            const nextIdx = (currentIdx + 1) % slideLis.length;
            moveSlide(nextIdx);
        }, 5000);
    });
};