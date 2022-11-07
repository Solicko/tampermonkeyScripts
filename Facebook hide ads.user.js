// ==UserScript==
// @name         Facebook hide ads
// @namespace    https://github.com/Solicko/
// @version      0.1
// @description  try to take over the world!
// @author       Assaf Sela
// @match        https://www.facebook.com/*
// @require      https://cdn.jsdelivr.net/gh/Solicko/tampermonkeyScripts@latest/tamperScriptsCommonLibs.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const ids = ["pagelet_sidebar", "pagelet_rhc_footer", "pagelet_ego_pane"];
    hideAllById(ids);
})();