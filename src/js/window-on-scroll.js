
window.addEventListener('scroll', windowScroll);
function windowScroll() {

    if (document.documentElement.scrollTop > 50) {
        document.querySelector('.header-container').classList.add('scroll');
    }
    else { 
        document.querySelector('.header-container').classList.remove('scroll');
    }
};
 