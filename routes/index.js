var express = require('express');
var router = express.Router();
var validate = require('./rest-get.js');
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.send('Hello World!');
    res.render('index', {title: 'Express'});
});


router.get('/about', function (req, res) {
    res.send('How about that');
});
router.get('/general-patterns/', function (req, res) {
    res.send("general-patterns");
});
router.get('/general-patterns/:pattern', function (req, res) {
    console.log(req.params.pattern);
    getPage('/general-patterns/', req, res);
});
router.get('/jquery/general/:pattern', function (req, res) {
    getPage('/jquery/general/', req.params.pattern);
    res.send("ok");
});
router.get('/jquery/selector/:pattern', function (req, res) {
    getPage('/jquery/selector/', req.params.pattern);
    res.send("ok");
});
router.get('/jquery/publish-subscribe/:pattern', function (req, res) {
    getPage('/jquery/publish-subscribe/', req.params.pattern);
    res.send("ok");
});
router.get('/jquery/plugin/:pattern', function (req, res) {
    getPage('/jquery/plugin/', req.params.pattern);
    res.send("ok");
});
router.get('/literals-constructors/:pattern', function (req, res) {
    getPage('/literals/constructors/', req.params.pattern);
    res.send("ok");
});
router.get('/functions/:pattern', function (req, res) {
    getPage('/functions/', req.params.pattern);
    res.send("ok");
});
router.get('/functions/api/:pattern', function (req, res) {
    getPage('/functions/api/', req.params.pattern);
    res.send("ok");
});
router.get('/functions/initialization/:pattern', function (req, res) {
    getPage('/functions/initialization/', req.params.pattern);
    res.send("ok");
});
router.get('/functions/performance/:pattern', function (req, res) {
    getPage('/functions/performance/', req.params.pattern);
    res.send("ok");
});
router.get('/object-creation/:pattern', function (req, res) {
    getPage('/object-creation/', req.params.pattern);
    res.send("ok");
});
router.get('/code-reuse/:pattern', function (req, res) {
    getPage('/code-reuse/', req.params.pattern);
    res.send("ok");
});
router.get('/code-reuse/classical/:pattern', function (req, res) {
    getPage('/code-reuse/classical/', req.params.pattern);
    res.send("ok");
});
router.get('/code-reuse/preferred/:pattern', function (req, res) {

    getPage('/code-reuse/preferred/', req.params.pattern);
    res.send("ok");
});
router.get('/design/:pattern', function (req, res) {

    getPage('/design/', req.params.pattern);
    res.send("ok");
});
router.get('/design/creational/:pattern', function (req, res) {
    getPage('/design/creational/', req.params.pattern);
    res.send("ok");
});
router.get('/design/structural/:pattern', function (req, res) {

    getPage('/design/structural/', req.params.pattern);
    res.send("ok");
});
router.get('/design/behavioral/:pattern', function (req, res) {
    getPage('/design/behavioral/', req.params.pattern);
    res.send("ok");
});
getPage = function(organizer, request, response){
    var mysql = require('mysql');
    var returnVal = 0;
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '~WESMPC1!a',
        database: 'pattern_library'
    });
    connection.connect();
    connection.query("Select count(*) as value from patterns where route_a like '" + organizer + "' and route_b like'" + request.params.pattern + "'", function (err, rows, fields) {
        if (err) throw err;
        console.log("now returning: " + rows[0].value);
        if (rows[0].value == 1) {
            response.render('patternPage', {title: 'Test'});
        }


    });
    connection.end();
    return returnVal;
}
//endregion
//region Test: Router List
// interesting, router.stack[i].route begins with an empty set, thus i==0 throws an error
/*
 console.dir(router.stack.length);
 */
/*
 for (i = 1; i < router.stack.length; i++){
 console.log (router.stack[i].route.path);
 console.log("--------" + i + "----------");
 }
 */

module.exports = router;
