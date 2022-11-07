// ==UserScript==
// @name         ynet ad hider
// @namespace    https://github.com/Solicko/
// @version      0.1
// @description  ynet hide ads
// @author       Assaf Sela
// @match        https://www.ynet.co.il/*
// @require      https://cdn.jsdelivr.net/gh/Solicko/tampermonkeyScripts@latest/tamperScriptsCommonLibs.user.js
// ==/UserScript==

function isMainPage() {
    // true only for ynet home page
    return window.location.href.includes("/home/");
}

window.addEventListener('load', function() {

    const ids = ["ads.ozen_left", "ads.ozen.right", "ads.newspaper", "ads.top", "ads.sargel", "ads.mivzakon", "hdr_wrapper",
                 "WinWinHP1024-1", "bigdealhomepage-1", "ynet_user_login", "pphpMultiImages-2", "teaserxnet-1"];
    hideAllById(ids);
/*
    document.querySelectorAll('[id^="ads.300x250"]').forEach(function(el) {
        hide(el);
    });
*/
    const classnames = ["author", "digitalLinksArea", "leftTitleText", "weatherItem"];
    hideAllByClassName(classnames);

    const classOnes = ["block B2b spacer", "block B1 spacer", "main_search", "layoutItem radio-homepage-player", "topStoryDate"];
    hideFirstByClassname(classOnes);

    hide (document.getElementsByClassName('layoutItem yplus-promo-gallery')[0].parentElement);

    if (isMainPage()) {
        hide (document.getElementById("YnetHeader").parentElement.parentElement.parentElement.parentElement.parentElement);
    } else {
        hide (document.getElementById("YnetHeader").parentElement.parentElement.parentElement.parentElement);
    }

    var e1 = document.querySelectorAll('.moreInfoRow,.authorField');
    e1.forEach(function (item, index) {
        var e2 = item.parentElement.childNodes;
        e2.forEach(function (item2, index2) {
            hide(item2);
        });
    });

}, false);
