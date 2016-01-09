/**
 * Created by Rob on 1/8/2016.
 */
var localStorage = require('localStorage');
localStorage.clear();
var sys = require("system");
var pageFactory = require('./pageFactory.js'),
    sPre = "   --  ",
    completedScripts = [],
    lastScript = "launch";
var page = Object.create(pageFactory.getBlank(), {
    scriptArray: {writable: true, configurable: true, value: ["login"]},
    url: {writable: true, configurable: true, value: 'http://localhost:3000/'},
    currentTestName: {writable: true, configurable: true, value: 'notAssigned'},
    user: {writable: true, configurable: true, value: 'rw@wheatbridge.com'},
    password: {writable: true, configurable: true, value: ''}
});
page.setInstance("page");
page.setLogging("other");
page.scriptArray = ["getHrefs","end"];
page.viewportSize = {width: 800, height: 600};
page.currentTestName = "init";
page.open('http://localhost:3000/', function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    }else{
        var links = page.evaluate(function() {
            return [].map.call(document.querySelectorAll('a'), function(link) {
                return link.getAttribute('href');
            });
        });
        console.log(links.join('\n'));
        for (i = 0; i < links.length; i++){
            getSinglePage("http://localhost:3000" + links[i], 'a' + i.toString());
            //console.log(links[i]);
        }
    }
});
getSinglePage = function(address, item){
    //insert test here...
};
executeNext = function (script) {
    console.log("execute: " + script);
    return eval(script + "()");
};
initResults = function () {
    console.log("init results");
    localStorage.setItem(page.currentTestName, JSON.stringify(true));
    return true;
};
getHrefs = function () {
    page.evaluate(function () {
        console.log("in hrefs");
        phantom.exit();
    });
};
loginResults = function () {
    var result = page.evaluate(function () {
        var el = document.documentElement.innerHTML;
        bResult = el.indexOf("Bad credentials") > -1;
        return !bResult;
    });
    localStorage.setItem(page.currentTestName, JSON.stringify(result));
    console.log(page.currentTestName + ": " + result);
    return result;
};
endResults = function () {

};
end = function () {
    console.log("poll local storage");
    var sPre = "      ";
    for (var idx in localStorage){
        console.log(sPre + idx + ": " + localStorage[idx]);
    }
    console.log("tests complete");
    phantom.exit();
};