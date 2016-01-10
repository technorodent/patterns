//Below is a totally awesome polyfill fix for the DOMParser
//without it the DOMParser returned element is null
/*
 * DOMParser HTML extension
 * 2012-02-02
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/
var currentState = '';
var bodyGrp = document.getElementById("bodyGrp");
var elem, removalArray = [];
var sPre = "     -- ";
var sPreFail = "     xx ";
getBinary = function (strFrag) {
    var res = [];
    strFrag.split('').forEach(function (letter) {
        var bin = letter.charCodeAt(0).toString(2),
            padding = 8 - bin.length;
        res.push(new Array(padding + 1).join('0') + bin);
    });
    var returnString = res.toString();
    returnString = returnString.replace(/,/g, " ");
    return returnString;
};
(function (DOMParser) {
    "use strict";
    var DOMParser_proto = DOMParser.prototype
        , real_parseFromString = DOMParser_proto.parseFromString;
    // Firefox/Opera/IE throw errors on unsupported types
    try {
        // WebKit returns null on unsupported types
        if ((new DOMParser).parseFromString("", "text/html")) {
            // text/html parsing is natively supported
            return;
        }
    } catch (ex) {
    }
    DOMParser_proto.parseFromString = function (markup, type) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
            var doc = document.implementation.createHTMLDocument("")
                , doc_elt = doc.documentElement
                , first_elt;
            doc_elt.innerHTML = markup;
            first_elt = doc_elt.firstElementChild;
            if (doc_elt.childElementCount === 1
                && first_elt.localName.toLowerCase() === "html") {
                doc.replaceChild(first_elt, doc_elt);
            }
            return doc;
        } else {
            return real_parseFromString.apply(this, arguments);
        }
    };
}(DOMParser));
//integrate menu
/*
 jQuery(function ($) {
 $('.menu-btn').click(function () {
 $('.responsive-menu').addClass('expand');
 $('.menu-btn').addClass('btn-none');
 });
 $('.close-btn').click(function () {
 $('.responsive-menu').removeClass('expand');
 $('.menu-btn').removeClass('btn-none');
 });
 });
 */
jQuery(function ($) {
    $('.menu-btn').click(function () {
        $('.responsive-menu').toggleClass('expand')
    })
});
// Store the initial content so we can revisit it later
updateContent = function(data) {
    if (data == null)
        return;
    bodyGrp.innerHTML = data.pgHTML;
}
window.addEventListener('popstate', function (event) {
    updateContent(event.state);
});
window.onload = function () {
    var htmlPage = document.getElementById("bodyGrp");
    var popObj = {pgHTML: htmlPage.innerHTML, pgTitle: ''};
    history.replaceState(popObj, document.title, document.location.href);
}
$('#responsive-menu').on('click', 'li', function (ev) {
    var rObj = ev.target.getAttribute("loc");
    if (rObj) {
        var url = ev.target.attributes["loc"].value;
        loadPattern(url);
        ev.stopPropagation();
        ev.preventDefault();
    }
});
loadPattern = function(url){
    var xhttp = new XMLHttpRequest();
    var params = "type=select";
    xhttp.open("POST", url, true);
    console.log(url);
    xhttp.targetAddr = url;
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status != 200) {
                console.log("error")
            } else {
                $('.responsive-menu').toggleClass('expand');
                var parser = new DOMParser();
                var el = parser.parseFromString(xhttp.responseText, "text/html");
                var htmlPage = el.innerHTML;
                var popObj = {pgHTML: xhttp.responseText, pgTitle: xhttp.targetAddr};
                updateContent(popObj);
                window.history.pushState(popObj, xhttp.targetAddr, xhttp.targetAddr);
            }
        }
    };
    xhttp.send(params);
}
