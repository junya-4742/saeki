document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSlideshow();
});

// ナビゲーションメニューの初期化
function initNavbar() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = nav.querySelectorAll('a');

  const closeMenu = () => {
    nav.classList.remove('show');
    toggle.classList.remove('hide');
  };

  toggle.addEventListener('click', () => {
    nav.classList.add('show');
    toggle.classList.add('hide');
  });

  closeBtn.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// ヒーロースライドショーの初期化
function initSlideshow() {
  const images = [
    'images/hero1.jpg',
    'images/hero2.jpg',
    'images/hero3.jpg',
    'images/hero4.jpg'
  ];

  const slideshow = document.querySelector('.slideshow');
  if (!slideshow) return;

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('slide');
    if (index === 0) img.classList.add('active');
    slideshow.appendChild(img);
  });

  const slides = document.querySelectorAll('.slide');
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}
