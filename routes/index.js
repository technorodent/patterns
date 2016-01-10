var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: '',
    password: '',
    database: 'pattern_library',
    debug: false
});
//var validate = require('./rest-get.js');
/* GET home page. */

//----------------POSTS---------------------
router.post('/general-patterns/:pattern', function (req, res, next) {
    getPostPage('/general-patterns/', req, res);
    //res.render('patternFragmentPage');
    //res.end('{"success" : "Updated Successfully", "status" : 200}');
});
router.post('/general-patterns/:pattern', function (req, res, next) {
    getPostPage('/general-patterns/', req, res);
});
router.post('/jquery/general/:pattern', function (req, res) {
    getPostPage('/jquery/general/', req.params.pattern, 1);
    console.log("here");
});
router.post('/jquery/selector/:pattern', function (req, res) {
    getPostPage('/jquery/selector/', req.params.pattern, 1);
});
router.post('/jquery/publish-subscribe/:pattern', function (req, res) {
    getPostPage('/jquery/publish-subscribe/', req.params.pattern, 1);
});
router.post('/jquery/plugin/:pattern', function (req, res) {
    getPostPage('/jquery/plugin/', req.params.pattern, 1);
});
router.post('/literals-constructors/:pattern', function (req, res) {
    getPostPage('/literals/constructors/', req.params.pattern, 1);
});
router.post('/functions/:pattern', function (req, res) {
    getPostPage('/functions/', req.params.pattern, 1);
});
router.post('/functions/api/:pattern', function (req, res) {
    getPostPage('/functions/api/', req.params.pattern, 1);
});
router.post('/functions/initialization/:pattern', function (req, res) {
    getPostPage('/functions/initialization/', req.params.pattern, 1);
});
router.post('/functions/performance/:pattern', function (req, res) {
    getPostPage('/functions/performance/', req.params.pattern, 1);
});
router.post('/object-creation/:pattern', function (req, res) {
    getPostPage('/object-creation/', req.params.pattern, 1);
});
router.post('/code-reuse/:pattern', function (req, res) {
    getPostPage('/code-reuse/', req.params.pattern, 1);
});
router.post('/code-reuse/classical/:pattern', function (req, res) {
    getPostPage('/code-reuse/classical/', req.params.pattern, 1);
});
router.post('/code-reuse/preferred/:pattern', function (req, res) {
    getPostPage('/code-reuse/preferred/', req.params.pattern, 1);
});
router.post('/design/:pattern', function (req, res) {
    getPostPage('/design/', req.params.pattern, 1);
});
router.post('/design/creational/:pattern', function (req, res) {
    getPostPage('/design/creational/', req.params.pattern, 1);
});
router.post('/design/structural/:pattern', function (req, res) {
    getPostPage('/design/structural/', req.params.pattern, 1);
});
router.post('/design/behavioral/:pattern', function (req, res) {
    getPostPage('/design/behavioral/', req.params.pattern, 1);
});
//----------------GETS---------------------
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
    //console.log(req.params.pattern);
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
/*
testDB = function (organizer, oAddress) {
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log(err);
        }
        //console.log('connected as id ' + connection.threadId);
        var oPromise = new Promise(function (resolve, reject) {
            console.log("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like'" + oAddress + "'");
            connection.query("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like '" + oAddress + "'", function (err, rows, fields) {
                if (!err) {
                    if (typeof rows[0] == 'undefined') {
                        console.log("Undefined: " + organizer + " " + oAddress);
                        connection.release();
                        reject("It failed");
                    } else {
                        connection.release();
                        console.log("....itemKey: " + rows[0].keyVal);
                        resolve(rows[0].keyVal);
                    }
                }
                else {
                    console.log("failure");
                    connection.release();
                    reject("It failed");
                }
            });
        });
        connection.on('error', function (err) {
            console.log("connection.on error: " + err.message);
        });
    });
}
var restMe = new Array("function-declarations", "conditionals", "global-object-access", "single-var", "hoisting", "for-loop", "for-in-loop", "augment-built-in-prototypes", "switch", "implied-typecasting", "eval", "number-conversion", "globals", "globals");
for (var i = 0; i < restMe.length; i++) {
    console.log(restMe[i]);
    testDB("/general-patterns/", restMe[i]);
}
*/
var getPostPage = function (organizer, req, res, level) {
    var itemKey;
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log(err);
        }
        //console.log('connected as id ' + connection.threadId);
        var oPromise = new Promise(function (resolve, reject) {
            connection.query("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like'" + req.params.pattern + "'", function (err, rows, fields) {
                //if (err) throw err;
                if (!err) {
                    console.log("....itemKey: " + rows[0].keyVal);
                    resolve(rows[0].keyVal);
                }
                else {
                    connection.release();
                    reject("It failed");
                }
            });
        });
        oPromise.then(function (result) {
            connection.query("Select * from patterns where pk=" + result, function (err, rows, fields) {
                if (err) throw err;
                res.render('patternFragmentPage', {title: rows[0].pattern}, function (err, html) {
                    if (err)throw err;
                    res.send(html);
                    connection.release();
                });
            });
        }, function (err) {
            connection.release();
        });
    });
};
var getPage = function (organizer, req, res) {
    var returnVal = 0;
    connection.connect();
    connection.query("Select count(*) as value from patterns where route_a like '" + organizer + "' and route_b like'" + req.params.pattern + "'", function (err, rows, fields) {
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
