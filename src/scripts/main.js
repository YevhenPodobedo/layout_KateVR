'use strict';

import {
  query,
  queryID,
  queryAll,
  resizingWindow,
  changePositionItem,
  changePositionElement,
  classHtml
} from './utils.js';

import { eventProcessing, movingDots, openMenu, openWindow, clickToggle, clickClass } from './buttons.js';
import { navigation } from './slider.js';

// #region animate logo
  document.addEventListener('DOMContentLoaded', () => {
    const letters = queryAll('.top-bar__logo--letter');

    letters.forEach((letter, index) => {
      letter.style.setProperty('--index', index);
    });
  });
// #endregion

// #region animate favicon
  import favicon_1 from '../icon/favicons/favicon1.svg';
  import favicon_2 from '../icon/favicons/favicon2.svg';
  import favicon_3 from '../icon/favicons/favicon3.svg';

  const favicons = [favicon_1, favicon_2, favicon_3];
  let currentIndex = 0;

  function animateFavicon() {
    const favicon = queryID('animate-favicon');
    favicon.href = favicons[currentIndex];
    currentIndex = (currentIndex + 1) % favicons.length;
  };

  setInterval(animateFavicon, 1000);
// #endregion

// #region icon open menu
  openMenu('.top-bar__menu', 'add', '.top-bar__menu');
  openMenu('.drop-down-menu__icon', 'remove', '.top-bar__menu');
// #endregion

// #region window "language"
  openWindow('.link-language', 'add', '.language-page');
  openWindow('.language-page__icon', 'remove', '.language-page');
// #endregion

// #region window "FAQ"
  openWindow('.link-faq', 'add', '.faq-page');
  openWindow('.faq-page__icon', 'remove', '.faq-page');

  openWindow('.help-page__text--span', 'add', '.faq-page');
  openWindow('.faq-page__icon', 'remove', '.faq-page');
  openWindow('.faq-page__link', 'remove', '.faq-page');

  clickToggle('.faq-page__block');

  query('.faq-page__link').innerHTML = query('.header__bottom__link').innerHTML;

  clickClass('.link-faq', '.header__container', 'add', '--blurred-screen');
  clickClass('.faq-page__icon', '.header__container', 'remove', '--blurred-screen');
  clickClass('.faq-page__link', '.header__container', 'remove', '--blurred-screen');
  // #endregion

  // #region window "help"
  openWindow('.link-help', 'add', '.help-page');
  openWindow('.help-page__icon', 'remove', '.help-page');

  clickClass('.link-help', '.header__container', 'add', '--blurred-screen');
  clickClass('.help-page__icon', '.header__container', 'remove', '--blurred-screen');


// #endregion

// #region button "play-video"
  movingDots('.header__link-video--lines', 'dots', 'top');
  movingDots('.header__link-video--lines', 'dots', 'bottom');

  eventProcessing('.header__link-video', 'add', '--active', 'https://www.youtube.com/embed/SvTbB19bvIw?si=C6jgLg3OL_VWxo8Y');
  eventProcessing('.video-link--icon-close', 'remove', '--active', '');

  resizingWindow('.video-link', '.video-link--resizer');
//#endregion

// #region changing the position of elements
  window.addEventListener('DOMContentLoaded', () => {
    changePositionItem('--desktop', '.menu', '.top-bar', '.drop-down-menu');

    changePositionElement('--desktop', '.menu__list', 'li-1', '.top-bar__box');
    changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
    changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
    // location.reload;
  });

  window.addEventListener('resize', () => {
    changePositionItem('--desktop', '.menu', '.top-bar', '.drop-down-menu');

    changePositionElement('--desktop', '.menu__list', 'li-1', '.top-bar__box');
    changePositionElement('--desktop', '.menu__list', 'li-2', '.header__bottom__menu');
    changePositionElement('--desktop', '.menu__list', 'li-3', '.header__bottom__menu');
  });
// #endregion

// #region slider
  navigation(query('input[name="next"]'), 'forward');
  navigation(query('input[name="previous"]'), 'back');
// #endregion
