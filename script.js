const arryofSlideImages = [




  'p.png',
  'o.png',
  'r.png',
  't.png',
  'f.png',
  'o.png',
  'l.png',
  'i.png',

  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  'o.png',
  '13.png', '14.png', '15.png'

]

const targetElemnt = document.getElementById("slideImage");
const targetElemnt1 = document.getElementById("imageContainer");
targetElemnt1.innerHTML = arryofSlideImages.map(Image => `<img src="${Image}"/>`).join("");


let Counter = 1;
setInterval(function () {
  Counter++;
  if (Counter >= arryofSlideImages.length) {
    Counter = 1
  }
  targetElemnt.src = arryofSlideImages[Counter];

}, 5000);

function getRandomColour() {
  let colour1 = Math.ceil(0 + Math.random() * 230);
  let colour2 = Math.ceil(0 + Math.random() * 230);
  let colour3 = Math.ceil(0 + Math.random() * 230);

  return `rgb(${colour1}, ${colour2},${colour3})`
}

setInterval(function () {
  document.getElementById("heada").style.color = getRandomColour();
  // document.getElementById("slideImage").style.border= `6px solid ${getRandomColour()}`;


}, 3000);

// Get a reference to the slider element

let check = document.querySelectorAll('input[type="radio"]');
check = [...check];  // Convert NodeList to Array (optional, but fine)

let currentCheckBox = 0;

setInterval(() => {
  // Uncheck all checkboxes
  check.forEach(radio => {
    radio.checked = false;
  });

  // Check the current checkbox
  check[currentCheckBox].checked = true;

  // Move to the next checkbox (loop back to the first one)
  currentCheckBox = (currentCheckBox + 1) % check.length;

}, 6000);  // Runs every second

img.addEventListener('mouseover', () => {

});