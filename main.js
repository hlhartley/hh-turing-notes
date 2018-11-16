var htmlFilterBtn = document.querySelector('.html-filter-btn');
var cssFilterBtn = document.querySelector('.css-filter-btn');
var jsFilterBtn = document.querySelector('.js-filter-btn');
var designFilterBtn = document.querySelector('.design-filter-btn');
var cardTitle = document.querySelectorAll('.card-title');
var cardDiv = document.querySelector('.body-text');

htmlFilterBtn.addEventListener('click', filterButtons);
cssFilterBtn.addEventListener('click', filterButtons);
jsFilterBtn.addEventListener('click', filterButtons);
designFilterBtn.addEventListener('click', filterButtons);

function filterButtons() {
  cardTitle.forEach(function(card) {
    if(!card.innerText.includes('HTML')) {
      card.closest('div').classList.add('display-none');
    }
  })
}
