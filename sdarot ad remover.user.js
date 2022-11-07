// ==UserScript==
// @name         sdarot ad remover
// @namespace    https://github.com/Solicko/
// @version      0.1
// @description  try to take over the world!
// @author       Assaf Sela
// @match        https://sdarot.tw/*
// @match        https://sdarot.tv/*
// @match        https://sdarot.website/*
// @require      https://cdn.jsdelivr.net/gh/Solicko/tampermonkeyScripts@latest/tamperScriptsCommonLibs.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ids = ["joinUs", "slide", "sysMsg", "newSeries"];
    hideAllById(ids);
    const classnames = ["poster", "col-lg-3 col-md-4 col-sm-5 col-xs-12", "grecaptcha-badge"];
    hideAllByClassName(classnames);
    document.querySelector('footer').parentElement.appendChild(document.getElementById("mainSearch"));
    hide(document.querySelector('footer'));
    hide(document.querySelector('header').nextElementSibling);
    var e  = document.getElementById('afterLoad');
    hide(e.nextElementSibling);
    hide(e.nextElementSibling.nextElementSibling);
    hide(e.nextElementSibling.nextElementSibling.nextElementSibling);
})();