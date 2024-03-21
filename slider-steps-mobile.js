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


const buttonLeft = document.querySelector('.arrow-contol_left');
const buttonRight = document.querySelector('.arrow-contol_right');
const circles = document.querySelectorAll('.slide-value__circle');
let currentIndicate = 0;

function updateCurrentIndicate(index) {
  if (index < 0) {
    index = circles.length - 1;
  }
  if (index > circles.length - 1) {
    index = 0;
  }
  return index;
}

buttonLeft.addEventListener('click', () => {
  currentIndicate = updateCurrentIndicate(currentIndicate - 1);
  circles.forEach((circle, i) => {
    if (i === currentIndicate) {
      circle.style.backgroundColor = '#313131';
    } else {
      circle.style.backgroundColor = '#D9D9D9';
    }
  });
});

buttonRight.addEventListener('click', () => {
  currentIndicate = updateCurrentIndicate(currentIndicate + 1);
  circles.forEach((circle, i) => {
    if (i === currentIndicate) {
      circle.style.backgroundColor = '#313131';
    } else {
      circle.style.backgroundColor = '#D9D9D9';
    }
  });
});

 circles.forEach((circle, i) => {
    circle.addEventListener('click', () => {
      currentIndicate = i;
      circles.forEach((c, j) => {
        if (i === j) {
          c.style.backgroundColor = '#313131';
        } else {
          c.style.backgroundColor = '#D9D9D9';
        }
      });
    });
  });
