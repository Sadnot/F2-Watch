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
