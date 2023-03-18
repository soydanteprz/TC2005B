module.exports = (req, res, next) => {
    if(!(req.session.privilegios.indexOf('admin') >= 0)) {
        return res.redirect('/sportid/nba');
    }
    next();
};