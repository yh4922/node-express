exports.showIndex = function(req, res){
    res.render('index',{msg:'Hello NodeJs!'});
}
exports.showAll = function(req, res){
    res.render('404',{msg:'没有找到当前页'});
}