// ==UserScript==
// @name         Mako ad hider
// @namespace    https://github.com/Solicko/
// @version      0.1
// @description  try to take over the world!
// @author       Assaf Sela
// @match        https://www.mako.co.il/*
// @require      https://cdn.jsdelivr.net/gh/Solicko/tampermonkeyScripts@latest/tamperScriptsCommonLibs.user.js
// @grant        none
// ==/UserScript==


window.addEventListener('load', function() {
    const ids = ["mako_main_glideDiv", "top-strip-v_2017", "GoogleActiveViewElement", "ads.tapet", "TopVideo", "INDbtnWrap"];
    hideAllById(ids);

    const classesOfOne = ["navWrap not_for_print", "responsive", "large-mid-ad", "header large"]
    hideFirstByClassname(classesOfOne);

    const classnames = ["ad"];
    hideAllByClassName(classnames);
//    document.querySelector('[id^="google_ads_iframe"]').style.display="none"
    hide(document.querySelector('a.gentPU[href*="/spirituality-newage/horoscope"]').parentElement)

    Array.from(document.getElementsByClassName("time")).forEach(function (item, index) {
        var prt = item.parentElement;
        // left side timers should hide themselves, not parents
        if (prt.hasAttribute('title') ) {
            hide(item);
        } else {
            hide(prt)
        }
    });

}, false);