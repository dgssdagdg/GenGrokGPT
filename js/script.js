document.addEventListener('click', function(e) {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');
    let body =  document.body;
    if(e.target.closest('.menu-btn')) {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('body-overflow');
    } else if (menu.closest('.active') && !e.target.closest('.menu-row') && menuBtn.closest('.active') || e.target.closest('.header-link') && menu.closest('.active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('body-overflow');
    }

})

const swiper = new Swiper('.airdrops-swiper',{
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: '.airdrops-pagination',
      clickable: 'true'
    },
});