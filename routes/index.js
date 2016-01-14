var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '~WESMPC1!a',
    database: 'pattern_library',
    multipleStatements: true,
    debug: false
});
var sanitizer = require('sanitizer');
var path = require('path');
var appDir = path.dirname(require.main.filename);
//var validate = require('./rest-get.js');
/* GET home page. */

//----------------POSTS---------------------
router.post('/general-patterns/:pattern', function (req, res, next) {
    if (req.body.type == "select") {
        getPostPage('/general-patterns/', req, res);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/general-patterns/', req, res);
    };
});
router.post('/jquery/general/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/jquery/general/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/jquery/general/', req, res);
    };
});
router.post('/jquery/selector/:pattern', function (req, res) {

    if (req.body.type == "select") {
        getPostPage('/jquery/selector/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/jquery/selector/', req, res);
    };
});
router.post('/jquery/publish-subscribe/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/jquery/publish-subscribe/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/jquery/publish-subscribe/', req, res);
    };
});
router.post('/jquery/plugin/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/jquery/plugin/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/jquery/plugin/', req, res);
    };
});
router.post('/literals-constructors/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/literals-constructors/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/literals-constructors/', req, res);
    };
});
router.post('/functions/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/functions/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/functions/', req, res);
    };
});
router.post('/functions/api/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/functions/api/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/functions/api/', req, res);
    };
});
router.post('/functions/initialization/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/functions/initialization/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/functions/initialization/', req, res);
    };
});
router.post('/functions/performance/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/functions/performance/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/functions/performance/', req, res);
    };
});
router.post('/object-creation/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/object-creation/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/object-creation/', req, res);
    };
});
router.post('/code-reuse/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/code-reuse/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/code-reuse/', req, res);
    };
});
router.post('/code-reuse/classical/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/code-reuse/classical/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/code-reuse/classical/', req, res);
    };
});
router.post('/code-reuse/preferred/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/code-reuse/preferred/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/code-reuse/preferred/', req, res);
    };
});
router.post('/design/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/design/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/design/', req, res);
    };
});
router.post('/design/creational/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/design/creational/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/design/creational/', req, res);
    };
});
router.post('/design/structural/:pattern', function (req, res) {
    if (req.body.type == "select") {
        getPostPage('/design/structural/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/design/structural/', req, res);
    };
});
router.post('/design/behavioral/:pattern', function (req, res) {
    getPostPage('/design/behavioral/', req, res, 1);
    if (req.body.type == "select") {
        getPostPage('/design/behavioral/', req, res, 1);
    } else if (req.body.type == 'postComment') {
        postCommentItem('/design/behavioral/', req, res);
    };
});
//----------------GETS---------------------
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.get('/terminal', function (req, res, next) {
    res.render('terminal');
});

router.get('/about', function (req, res) {
    res.send('How about that');
});
router.get('/general-patterns/', function (req, res) {
    res.send("general-patterns");
});
router.get('/general-patterns/:pattern', function (req, res) {
    getPage('/general-patterns/', req, res);
});
router.get('/jquery/general/:pattern', function (req, res) {
    getPage('/jquery/general/', req.params.pattern);
});
router.get('/jquery/selector/:pattern', function (req, res) {
    getPage('/jquery/selector/', req.params.pattern);
});
router.get('/jquery/publish-subscribe/:pattern', function (req, res) {
    getPage('/jquery/publish-subscribe/', req.params.pattern);
});
router.get('/jquery/plugin/:pattern', function (req, res) {
    getPage('/jquery/plugin/', req.params.pattern);
});
router.get('/literals-constructors/:pattern', function (req, res) {
    getPage('/literals/constructors/', req.params.pattern);
});
router.get('/functions/:pattern', function (req, res) {
    getPage('/functions/', req.params.pattern);
});
router.get('/functions/api/:pattern', function (req, res) {
    getPage('/functions/api/', req.params.pattern);
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
var postCommentItem = function (organizer, req, res){

    var itemKey;
    //NB: not the spirit of the Rich Text Editor, but, for this purpose:
    var squeakyClean = sanitizer.sanitize(req.body.commentTxt);
    //console.log(squeakyClean);
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log(err);
        }
        //console.log("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like '" + req.params.pattern + "'");
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
            var commentTxt = squeakyClean;
            var nameTxt = req.body.nameTxt;
            var sqlStmt = '';
            console.log("comment click: " + req.body.comment_click_id);
            if (req.body.comment_click_id !== 'undefined'){
                var tmpArray = req.body.comment_click_id.split("-");
                console.log(tmpArray);
                if (tmpArray[0] == "secondary"){
                    var fk = tmpArray[2];
                    console.log("secondary")
                    sqlStmt = "SET @result = " + result + "; SET @fk = " + fk + "; SET @commentTxt = '" + commentTxt + "'; SET @nameTxt = '" + nameTxt + "'; INSERT INTO pattern_library.secondary_comments (fk, commentator, comment) VALUES (@fk, @nameTxt, @commentTxt); CALL htmlCommentsOnly( @result); Select * from patterns where pk=@result; SELECT @result as inout_i";
                }else if (tmpArray[0] == "empty"){
                    console.log("empty");
                    sqlStmt = "SET @result = " + result + "; SET @commentTxt = '" + commentTxt + "'; SET @nameTxt = '" + nameTxt + "'; INSERT INTO pattern_library.comments (fk, commentator, comment) VALUES (@result, @nameTxt, @commentTxt); CALL htmlCommentsOnly( @result); Select * from patterns where pk=@result; SELECT @result as inout_i";
                }else if (tmpArray[0] == "primary"){
                    var fk = tmpArray[1];
                    console.log("primary");
                    sqlStmt = "SET @result=" + result + "; SET @fk = " + fk + "; SET @commentTxt = '" + commentTxt + "'; SET @nameTxt = '" + nameTxt + "'; INSERT INTO pattern_library.secondary_comments (fk, commentator, comment) VALUES (@fk, @nameTxt, @commentTxt); CALL htmlCommentsOnly( @result); Select * from patterns where pk=@result; SELECT @result as inout_i";
                }
            }
            console.log(sqlStmt);
            connection.query(sqlStmt, function (err, rows, fields)  {
                if (err) {
                    res.status(501).send({ error: "err.msg" });
                    connection.release();
                }
                var tmpHtml = '',
                    patternName;
                //console.log(rows);
                for (var i = 0; i < rows.length; i++) {
                    for (idx in rows[i]) {
                        if (!isNaN(idx)) {
                            var tmpObj = eval(rows[i][idx]);
                            if (typeof tmpObj.html == 'undefined') {
                                if (typeof(tmpObj.pattern) != 'undefined') {
                                    patternName = tmpObj.pattern;
                                }
                            } else {
                                tmpHtml += tmpObj.html;
                            }
                        }
                    }
                }
                console.log(tmpHtml);
                res.send(tmpHtml);
                connection.release();

            });
        }, function (err) {
            connection.release();
        });
    });
}
var getPostPage = function (organizer, req, res, level) {
    var itemKey;
    pool.getConnection(function (err, connection) {
        if (err) {
            connection.release();
            console.log("connection errors");
            console.log(err);
        }
        console.log("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like'" + req.params.pattern + "'");
        var oPromise = new Promise(function (resolve, reject) {
            connection.query("Select pk as keyVal from patterns where route_a like '" + organizer + "' and route_b like'" + req.params.pattern + "'", function (err, rows, fields) {
                //if (err) throw err;
                if (!err) {
                    resolve(rows[0].keyVal);
                }
                else {
                    connection.release();
                    reject("It failed");
                }
            });
        });
        oPromise.then(function (result) {
            //Select * from patterns where pk=" + result
            console.log("track 1");
            connection.query('SET @test = ' + result + '; CALL htmlCommentsOnly( @test); Select * from patterns where pk=@test; SELECT @test as inout_i', function (err, rows, fields) {
                if (err) throw err;
                var paraText = "<p>Recognition hybrid hyperlinked passive specification nominal line scan algorithm development. Protocol multiplexed normalizing backbone or cable serial. Patch ethernet boolean solid prototype bridgeware coordinated array vector gigabyte. interface audio optical video resistor optical nano phase. Femtosecond read-only technician logarithmic disk resistor internet fragmentation analog nano extension. Pulse PC connectivity interval.</p><p>Gigabyte recursive vector equipment. Effect inertia sequential PC proxy limiter modular. Gigabyte in amplified extended digital bridgeware optical nano fiber. Frequency normalizing capacitance hyperlinked analog passive application theory line nominal rate includes.</p><p>For right now, must end with a br break...</p><br>"
                var tmpHtml = '',
                    patternName;
                //console.log(rows);
                console.log("track 2");
                for (var i = 0; i < rows.length; i++) {
                    for (idx in rows[i]) {
                        if (!isNaN(idx)) {
                            var tmpObj = eval(rows[i][idx]);
                            if (typeof tmpObj.html == 'undefined') {
                                if (typeof(tmpObj.pattern) != 'undefined') {
                                    patternName = tmpObj.pattern;
                                }
                            } else {
                                tmpHtml += tmpObj.html;
                            }
                        }
                    }
                }
                //console.log(tmpHtml);
                console.log("track 3");
                res.render('patternFragmentPage', {
                    title: patternName,
                    postContent: paraText,
                    commentContent: tmpHtml
                }, function (err, html) {
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
