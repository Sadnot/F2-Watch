// Xử lí sự kiện cuộn chuột phần Header
 let prevScrollpos = window.pageYOffset;
//  console.log(prevScrollpos)


 window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos)

    if (prevScrollpos > currentScrollPos) // khi cuộn chuột lên
    {
        document.getElementById('header').classList.remove('show');
    }
    else { document.getElementById('header').classList.add('show');
    }   

    prevScrollpos = currentScrollPos;
    if (prevScrollpos < 200) {
        document.getElementById('header').style.background = 'transparent';
    }
    else { document.getElementById('header').style.background = 'black';}
 }

// Xử lý slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"
}


// Countdown timer
const fulT = new Date("July 1, 2022 00:00:00").getTime()

setInterval(function() {
  let noW = new Date().getTime()
  let D = fulT - noW
  let days = Math.floor(D/(1000*24*60*60))
  let hours = Math.floor(D/(1000*60*60))
  let mins = Math.floor(D/(1000*60))
  let seconds = Math.floor(D/(1000))

  hours %=24
  mins %=60
  seconds %=60

  document.getElementById('days').innerText = days
  document.getElementById('hours').innerText = hours
  document.getElementById('minutes').innerText = mins
  document.getElementById('seconds').innerText = seconds
}, 1000);


// Menu
const menu = document.querySelector('.header-nav-item.menu');
const navLinkAdd = document.querySelector('.nav-link-add');
const closeBtn = document.querySelector('.close-btn');
const closeBtn2 = document.querySelector('.close-btn2');
const navSearch = document.querySelector('.nav-search');
const search = document.querySelector('.search');

menu.addEventListener('click', () => {
  // console.log(menu)
  navLinkAdd.classList.remove('hide');
  navLinkAdd.classList.add('show');
})

closeBtn.addEventListener('click', () => {
  navLinkAdd.classList.add('hide');
})

search.addEventListener('click', () => {
  navSearch.classList.remove('hide');
  navSearch.classList.add('show');
})

closeBtn2.addEventListener('click', () => {
  navSearch.classList.add('hide');
})
