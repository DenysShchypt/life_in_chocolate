document.addEventListener('DOMContentLoaded', autoPadding());
window.addEventListener('resize', autoPadding);
    function autoPadding() {
        var header = document.querySelector('.header-container');
        var headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    }
document.body.addEventListener('scrollTop', windowScroll);
function windowScroll() { 
    // var header = document.querySelector('.header-container');
  
   var scrolll = document.body.scrollTop;


    // if (window.scrollY <= 5) {
    //     window.scrollnY <= 5
    //     header.style.border = '1px, solid, black';
    // }

};
 console.log(scrolll);