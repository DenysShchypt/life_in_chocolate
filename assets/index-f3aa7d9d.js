(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",c());window.addEventListener("resize",c);function c(){var t=document.querySelector(".header-container"),o=t.offsetHeight;document.body.style.paddingTop=o+"px"}(()=>{const t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");const n=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};o.addEventListener("click",i),r.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(t){typeof t.matches!="function"&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(o){for(var r=this,i=(r.document||r.ownerDocument).querySelectorAll(o),e=0;i[e]&&i[e]!==r;)++e;return Boolean(i[e])}),typeof t.closest!="function"&&(t.closest=function(o){for(var r=this;r&&r.nodeType===1;){if(r.matches(o))return r;r=r.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");t.forEach(function(i){i.addEventListener("click",function(e){e.preventDefault();var n=this.getAttribute("data-modal"),s=document.querySelector('.modal[data-modal="'+n+'"]');s.classList.add("active"),o.classList.add("active"),document.body.classList.add("modal-open")})}),r.forEach(function(i){i.addEventListener("click",function(e){var n=this.closest(".modal");n.classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("modal-open")})}),document.body.addEventListener("keyup",function(i){var e=i.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),o.classList.remove("active"),document.body.classList.remove("modal-open"))},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),document.body.classList.remove("modal-open")})});new Swiper(".reviews-swiper",{loop:!0,direction:"horizontal",initialSlide:0,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}},pagination:{el:".reviews-swiper-pagination",clickable:!0},mousewheel:{sensitivity:.4},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1}});new Swiper(".products-swiper",{loop:!0,direction:"horizontal",initialSlide:0,breakpoints:{768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}},pagination:{el:".products-swiper-pagination",clickable:!0},mousewheel:{sensitivity:.4},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!1}});window.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".video");t.addEventListener("click",function(){t.classList.contains("ready")||(t.classList.add("ready"),t.innerHTML='<iframe class="how-made-video" src="https://www.youtube.com/embed/xPe1jMuX32s" style="border: none" allowfullscreen title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> </iframe>')})});window.addEventListener("scroll",a);function a(){document.documentElement.scrollTop>50?document.querySelector(".header-container").classList.add("scroll"):document.querySelector(".header-container").classList.remove("scroll")}