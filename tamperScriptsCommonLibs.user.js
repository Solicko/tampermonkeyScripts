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

function hideAllByClassName(classnames) {
    classnames.forEach(function (classname, index) {
	Array.from(document.getElementsByClassName(classname)).forEach(function (item, index2) {
		hide(item);
	});
    });
}