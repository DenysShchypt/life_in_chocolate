document.addEventListener('DOMContentLoaded', autoPadding());
window.addEventListener('resize', autoPadding);
    function autoPadding() {
        var header = document.querySelector('.header-container');
        var headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    }

