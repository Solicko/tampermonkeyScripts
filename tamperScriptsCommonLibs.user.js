var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function hide(elm) {
    if (elm) {
        elm.style.display="none";
    }
}

function hideAllById(ids) {
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

function hideFirstByClassname(classOnes) {
    classOnes.forEach(function (item, index) {
        var elm;
        if (elm = document.getElementsByClassName(item)) {
            if (elm.length > 0) {
                hide(elm[0]);
            }
        }
    });
}
 