function hide(elm) {
    if (elm) {
        elm.style.display="none";
    }
}

function hideAllIds(ids) {
    ids.forEach(function (item, index) {
        var elm;
        if (elm = document.getElementById(item)) {
            hide(elm);
        }
    });
}