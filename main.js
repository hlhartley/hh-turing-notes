var htmlFilterBtn = document.querySelector('.html-filter-btn');
var cssFilterBtn = document.querySelector('.css-filter-btn');
var jsFilterBtn = document.querySelector('.js-filter-btn');
var designFilterBtn = document.querySelector('.design-filter-btn');
var allFilterBtn = document.querySelector('.all-filter-btn');
var cardDiv = document.querySelector('.body-text');
var cardTitle = document.querySelectorAll('.card-title');
var cardDiv = document.querySelector('.body-text');

htmlFilterBtn.addEventListener('click', filterHTML);
cssFilterBtn.addEventListener('click', filterCSS);
jsFilterBtn.addEventListener('click', filterJS);
designFilterBtn.addEventListener('click', filterDESIGN);
allFilterBtn.addEventListener('click', displayAll);

function filterHTML() {
    console.log('html');
  cardTitle.forEach(function(card) {
    if(!card.innerText.includes('HTML')) {
      card.closest('div').classList.add('display-none');
    }
  })
}

function filterCSS() {
    console.log('css');
  cardTitle.forEach(function(card) {
    if(!card.innerText.includes('CSS')) {
      card.closest('div').classList.add('display-none');
    }
  })
}

function filterJS() {
    console.log('js');
  cardTitle.forEach(function(card) {
    if(!card.innerText.includes('JAVASCRIPT')) {
      card.closest('div').classList.add('display-none');
    }
  })
}

function filterDESIGN() {
  console.log('design');
  cardTitle.forEach(function(card) {
    if(!card.innerText.includes('DESIGN')) {
      card.closest('div').classList.add('display-none');
    }
  })
}

function displayAll() {
  location.reload();
}