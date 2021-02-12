
$(document).ready(function () {
  $('.clients__wrapper').slick({
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    cssEase: 'linear',
    swipe: true
  });
});


const dates = document.getElementsByClassName('date')
for (let i = 0; i < dates.length; i++) {
  console.log(dates[i]);
  dates[i].innerHTML = `${moment().format("MMMM DD, YY")}`
}


const navMenu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('.nav__btn')
const menuItems = document.querySelectorAll('.nav__menu--item')

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open')

  if (navMenu.classList.contains('open')) {
    menuBtn.innerHTML = '<i class="fas fa-times"></i>'

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        navMenu.classList.remove('open')
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
      })
    });
  } else {
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>'
  }
})

