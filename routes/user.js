exports.login = function (req, res){
    // var ticket = req.query.ticket;
    var username = req.body.username,
        password = req.body.password;

}

exports.list = function(req, res){
    res.send("respond with a resource");
}

exports.middleware = function (req, res, next) {
    var user = req.session && req.session.user;
    if (!user) {    //如果没有登录
        console.log('not login');
        console.log(req.originalUrl);
        res.redirect('/login?from=' + req.originalUrl);
        return;
    }
    // console.log('user.middleware');
    return next();
}