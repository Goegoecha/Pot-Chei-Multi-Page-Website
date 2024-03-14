// Special Countdown

let daysItem = document.querySelector('#days');
let hoursItem = document.querySelector('#hours');
let minItem = document.querySelector('#min');
let secItem = document.querySelector('#sec');

let countDown = () => {
  let currentDate = new Date();
  let futureDate = new Date('15 March 2024');
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown();

setInterval(countDown, 1000);

// Scroll Back To Top

function scrollTopBack() {
  let scrollTopButton = document.querySelector('#scrollUp');
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopButton.classList.add('scrollActive');
    } else {
      scrollTopButton.classList.remove('scrollActive');
    }
  }
}

scrollTopBack();

// nav hide


document.addEventListener('DOMContentLoaded', function () {
  let categoryLinks = document.querySelectorAll('.category-link');
  let navbarCollapse = document.querySelector('.navbar-collapse.collapse');

  categoryLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

  document.addEventListener('click', function () {
    navbarCollapse.classList.remove('show');
  });
});

// Back

function goBack() {
  window.history.back();
}



