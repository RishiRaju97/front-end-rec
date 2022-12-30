const accordion = document.querySelectorAll('.container');
const btn = document.querySelector('.start-trading');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

// Mouse events for start trading button-----------------------------------------------
btn.addEventListener('mouseover', function () {
  btn.style.backgroundColor = '#7181FC';
})

btn.addEventListener('mouseout', function () {
  btn.style.backgroundColor = '#4F62F6';
})

btn.addEventListener('mousedown', function () {
  btn.style.backgroundColor = '#354BF4';
})

btn.addEventListener('mouseup', function () {
  btn.style.backgroundColor = '#7181FC';
})
// ----------------------------------------------------------------------------------------


