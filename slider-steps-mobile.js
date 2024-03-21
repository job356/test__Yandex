let stepsBoardOffset = 0;
const stepsBoard = document.querySelector('.steps-board');

document.querySelector('.arrow-contol_right').addEventListener('click', function(){
    stepsBoardOffset = stepsBoardOffset + 355;
    if (stepsBoardOffset > 1420) {
        stepsBoardOffset = 0;
    }
    stepsBoard.style.left = -stepsBoardOffset + 'px';
});

document.querySelector('.arrow-contol_left').addEventListener('click', function(){
    stepsBoardOffset = stepsBoardOffset - 355;
    if (stepsBoardOffset < 0) {
        stepsBoardOffset = 1420;
    }
    stepsBoard.style.left = -stepsBoardOffset + 'px';
});

