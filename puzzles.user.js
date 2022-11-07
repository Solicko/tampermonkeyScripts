// ==UserScript==
// @name         puzzles
// @namespace    https://github.com/Solicko/
// @version      0.1
// @description  try to take over the world!
// @author       Assaf Sela
// @match        https://www.puzzle-stitches.com/*
// @match        https://www.puzzle-shikaku.com/*
// @match        https://www.puzzle-futoshiki.com/*
// @match        https://www.puzzle-jigsaw-sudoku.com/*
// @match        https://www.puzzle-bridges.com/*
// @match        https://www.puzzle-battleships.com/*
// @match        https://www.puzzle-skyscrapers.com/*
// @match        https://www.puzzle-killer-sudoku.com/*
// @match        https://www.puzzle-nurikabe.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=puzzle-stitches.com
// @require      https://cdn.jsdelivr.net/gh/Solicko/tampermonkeyScripts@latest/tamperScriptsCommonLibs.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ids = ["btCont", "Skyscraper", "bannerTopSpacer", "SocialMenu", "SocialMenu", "menuAdditional", ];
    hideAllById(ids);
    const classesOfOne = ["langBar", "footer-buttons noprint hidden", ]
    hideFirstByClassname(classesOfOne);

    var e = document.getElementById('shareContainer').nextSibling;
    hide(e);
})();