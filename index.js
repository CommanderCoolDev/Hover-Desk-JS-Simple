"use strict";
 const board = document.querySelector("#board"),
 colors = ['#1fad37', '#07ff03','#db2e62', '#24c8ed', '#f2cb07', '#d10af0', '#d1f00a', '#8cf00a', '#6d0af0'],
 SQUARES_NUMBER = 944;

 for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div');

    square.classList.add('square');
    square.addEventListener('mouseover', setColor);
    square.addEventListener('mouseleave', removeColor);
    board.append(square);
 }

 function setColor (ev) {
    const el = ev.target;
     const color = getRandomColor();
     el.style.backgroundColor = color;
     el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
 }
 function removeColor(ev) {
   const el = ev.target;
    el.style.backgroundColor = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`;

 }
 function getRandomColor() {
return colors[Math.floor(Math.random() * colors.length)];
 }