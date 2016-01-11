//A series of helper functions

//Polyfill fix for the DOMParser
//without it the DOMParser returned element is null
/*
 * DOMParser HTML extension
 * 2012-02-02
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 */

/*! @source https://gist.github.com/1129031 */
var currentState = '';
var bodyGrp = document.getElementById("bodyGrp");
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
//TODO: integrate menu to include an "X" to close
//See below:
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
initType = function() {
    if( $('#editMe').length ) {
        console.log("it exists");
        $('#editMe').editable({
            inlineMode: false,
            //key for 75.70.198.162:3000
            key: '1F4A3B3C5B5F3B4A4E4B2B2B4C4==',
            // Set the image upload parameter.
            imageUploadParam:  'file',
            // Set the image upload URL.
            //imageUploadURL: 'http://10.0.0.4/testUpload.php',
            //imageUploadURL:    'http://wheatbridge.com/Rf-06GT6H1633si8.php', <-----------currently disabled
            imageUploadParams: {id: "patternsSite"},
            maxCharacters:     2000,
            height:            '221',
            background:        ' #cfe7f1',
            trackScroll: true
        });
    }else{
        console.log("fix timer @ initType");
    }
    //Handle nameTxt field, don't allow anything but letters & spaces
    var text = document.getElementById('nameTxt');
    text.onkeypress = checkInput;
    text.onpaste = checkInput;

}
function checkInput(e) {
    var patt = /^[a-zA-Z\s]*$/;
    var e = e || event,
        char = e.type == 'keypress'
            ? String.fromCharCode(e.keyCode || e.which)
            : (e.clipboardData || window.clipboardData).getData('Text');
    if (!patt.test(char)) {
        return false;
    }
}
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
    setTimeout(function() { initType(); }, 2000);

};
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
};
popularEmailValidator = function (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
submitComment = function(){
    var mailTxt = document.getElementById('mailTxt').value;
    if(popularEmailValidator(mailTxt)){
        var nameTxt = document.getElementById('nameTxt').value;
        if (nameTxt.length > 1){
            var commentTxt = document.getElementById('editMe').value;
            if (commentTxt.length < 5){
                swal({   title: "Oops!",   text: "Minimum comment is 5 letters...",   imageUrl: "../images/exclaim.jpg" });
            }else{
                postComment(mailTxt, nameTxt, commentTxt);
            }
        }else{
            swal({   title: "Oops!",   text: "Name must be more than one letter.",   imageUrl: "../images/exclaim.jpg" });
        }
    } else{
        swal({   title: "Oops!",   text: "E-mail address incorrectly formatted",   imageUrl: "../images/exclaim.jpg" });
    }
}
postComment = function(mailTxt, nameTxt, commentTxt){
    var xhttp = new XMLHttpRequest();
    console.log("document title: " + document.title);
    console.log(document.location.uri);
    var params = "type=postComment&mailTxt=" + mailTxt + "&nameTxt=" + nameTxt + "&commentTxt=" + commentTxt;
    xhttp.open("POST", document.location.href, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4) {
            if (xhttp.status != 200) {
                console.log("error")
            } else {
                //console.log("wtf");
                var commentCollection = document.getElementById("commentCollection");
                commentCollection.innerHTML = xhttp.responseText;
                //console.log("..." + xhttp.responseText);;
                /*var htmlPage = el.innerHTML;
                var popObj = {pgHTML: xhttp.responseText, pgTitle: xhttp.targetAddr};
                updateContent(popObj);
                window.history.pushState(popObj, xhttp.targetAddr, xhttp.targetAddr);
                */
            }
        }
    };
    xhttp.send(params);
};

