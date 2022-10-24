const DADDYCONTAINER = document.getElementById('DADDYCONTAINER')

let smallButton = document.getElementById('smallButton')
let mediumButton = document.getElementById('mediumButton')
let largeButton = document.getElementById('largeButton')

let clearButton = document.getElementById('clearButton')
let eraserButton = document.getElementById('eraserButton')
let blackButton = document.getElementById('blackButton')
let rainbowButton = document.getElementById('rainbowButton')

const smallContainer = document.createElement('div')
smallContainer.className = 'smallContainer'

const mediumContainer = document.createElement('div')
mediumContainer.className = 'mediumContainer'

const largeContainer = document.createElement('div')
largeContainer.className = 'largeContainer'

let rainbow = 'inactive';
let eraser = 'inactive'
let black = 'active'

resetButton.onclick = () => location.reload(DADDYCONTAINER);
smallButton.onclick = () => createCanvas(256, smallContainer);
mediumButton.onclick = () => createCanvas(1024, mediumContainer);
largeButton.onclick = () => createCanvas(4096, largeContainer);

rainbowButton.addEventListener('click', () => {
  black = 'inactive';
  eraser = 'inactive';
  rainbow = 'active';
})

eraserButton.addEventListener('click', () => {
  rainbow = 'inactive';
  black = 'inactive';
  eraser = 'active';
})

blackButton.addEventListener('click', () => {
  rainbow = 'inactive';
  eraser = 'inactive';
  black = 'active';
})

function randomRGB() {
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  let RGBcolor = `rgb(${r},${g},${b})`; // syntax = 'rgb(255, 190, 4)'
  return RGBcolor;
}

function createCanvas(boxNum, container) { 
  smallContainer.remove()
  mediumContainer.remove()
  largeContainer.remove()

  for (i = 0; i < boxNum; i++) {
    let box = document.createElement('div')
    container.append(box);
    box.classList.add('box')

    if (container === smallContainer) {
      DADDYCONTAINER.append(smallContainer)
      box.classList.add('defaultBox');
    } else if (container === mediumContainer) {
      DADDYCONTAINER.append(mediumContainer)
      box.classList.add('mediumBox')
    } else if (container === largeContainer) {
      DADDYCONTAINER.append(largeContainer)
      box.classList.add('largeBox')
    }

    box.addEventListener('mouseover', () => {
      if (rainbow === 'active') {
        box.style.backgroundColor = randomRGB();
      } else if (black === 'active') {
        box.style.backgroundColor = 'black';
      } else if (eraser === 'active') {
        box.style.backgroundColor = ''
      }
    })
  }
}

window.onload = () => {
  createCanvas(256, smallContainer)
}