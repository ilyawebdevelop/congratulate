import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import "./../../node_modules/page-scroll-to-id/jquery.malihu.PageScroll2id.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


(function ($) {
  $(window).on("load", function () {
    /* Page Scroll to id fn call */
    $("#navigationMenu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
      highlightSelector: "#navigationMenu a",
      scrollSpeed: 50,
      offset: 150,
    });

    $(window).scroll(function () {

      const mediaQueryMin992 = window.matchMedia('(min-width: 992px)');

      if (mediaQueryMin992.matches) {
        if ($(this).scrollTop() > 185) {
          $('.headerB').addClass('fixed-on');
        }
        else if ($(this).scrollTop() < 185) {
          $('.headerB').removeClass('fixed-on');
        }
      }
    });
    let sidebarBtn = document.querySelector('.sidebarToggleBtn');
    let sidebarNav = document.querySelector('.sidebarNav');
    let sidebarLinkAll = document.querySelectorAll('.sidebarNav ul li a');
    sidebarBtn.addEventListener('click', () => {
      sidebarNav.classList.toggle('active');
    });
    sidebarLinkAll.forEach(el => {
      el.addEventListener('click', () => {
        sidebarNav.classList.remove('active');
      });
    });
    const sidebarHeightToTop = $('.sidebar').offset().top;
    $(window).scroll(function () {
      const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
      const heightToTop = $(window).scrollTop();
      const sidebarHeight = $('.sidebar').height();
      if (mediaQueryMax991.matches) {

        if ((sidebarHeightToTop - heightToTop + sidebarHeight + 68) < 0) {
          $('.sidebar').addClass('sidebar--sm');
        } else {
          $('.sidebar').removeClass('sidebar--sm');
        }
      }
    });

    let headerNavLinks = document.querySelectorAll('.headerNavSubShow');
    headerNavLinks.forEach(el => {
      let subNavBack = el.closest('li').querySelector('.headerNavSublistBack');
      let subNav = el.closest('li').querySelector('.headerNavSublistW');
      el.addEventListener('click', () => {
        subNav.classList.add('active');
        console.log('123');
      });
      subNavBack.addEventListener('click', () => {
        subNav.classList.remove('active');
      });
    });


  });

  // Burger
  const btnMenu = document.querySelector('#toggle');
  const menu = document.querySelector('.headerNav');
  const bodyEl = document.querySelector('body');
  const menuLine1 = document.querySelector('.top-bun');
  const menuLine2 = document.querySelector('.meat');
  const menuLine3 = document.querySelector('.bottom-bun');

  const toggleMenu = function () {
    menu.classList.toggle('active');
  }
  const toggleBurger = function () {
    btnMenu.classList.toggle('active');
  }
  const bodyOverflow = function () {
    bodyEl.classList.toggle('hidden');
  }
  const toggleMenuLine = function () {
    menuLine1.classList.toggle('active');
    menuLine2.classList.toggle('active');
    menuLine3.classList.toggle('active');
  }

  btnMenu?.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
    toggleBurger();
    bodyOverflow();
    toggleMenuLine();
  });


})(jQuery);

