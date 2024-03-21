// Устанавливаем начальное положение слайдера
let offset = 0;

// Получаем слайдер из дерева
const sliderLine = document.querySelector('.slider');

// При ширине окна равной 1366px, создаем функцию, которая прибавляет к начальному положению 1222px (длина одного слайда)
// Если сдвигаемая длина больше чем 1222, возвращаемся к изначальному положению
if (window.innerWidth === 1366) {
    function moveRight() {
        offset = offset + 1222;
        if (offset > 1222) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
}

// Вызываем функцию moveRight каждые 4 секунды
setInterval(moveRight, 4000);


// При ширине окна равной 1366px, создаем функцию, которая прибавляет к начальному положению 375px (длина одного слайда + расстояние между ними)
// Если сдвигаемая длина больше чем 1675, возвращаемся к изначальному положению
if (window.innerWidth === 375) {
    function moveRightMobile() {
        offset = offset + 335;
        if (offset > 1675) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    }
}

// Вызываем функцию moveRightMobile каждые 4 секунды
setInterval(moveRightMobile, 4000);