const slides = document.querySelectorAll("#slides > img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let curr = 0;

//set onclick function 
prev.onclick = showPrevSlide;
next.onclick = showNextSlide;

//init slide
initSlide();



function initSlide()
{
    //두번째 이후 슬라이드는 모두 hide 처리
    for(let i=1; i<slides.length; i++)
        slides[i].style.display = "none";

    //2초 간격으로 슬라이드 자동 전환
    let timerId = setInterval(showNextSlide, 2000);
    //5초후 타이머 삭제 
    setTimeout(() => clearInterval(timerId), 7000);   
}

function showPrevSlide()
{
    slides[curr].style.display = "none";
    curr = (curr === 0) ? slides.length - 1 : curr - 1;
    slides[curr].style.display = "block";
}

function showNextSlide()
{
    slides[curr].style.display = "none";
    curr = (curr === slides.length - 1) ? 0 : curr + 1;
    slides[curr].style.display = "block";
}




