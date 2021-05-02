const navBtnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('.navbar__flex-container');

navBtnElm.addEventListener('click', () => {
  navElm.classList.toggle('closed');
});

const navElmAll = document.querySelectorAll('.navbar-link');

for (let i = 0; i < navElmAll.length; i++) {
  navElmAll[i].addEventListener('click', () => {
    navElm.classList.add('closed');
  });
}
