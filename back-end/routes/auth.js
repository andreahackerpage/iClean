const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const passport = require("passport");

function checkIfLoggedin(req,res, next){
    if(req.isAuthenticated()) return next()
    res.json({message:"no estas logueado"});
    console.log(req.user);
}

router.post('/signup', controller.signup);
router.post('/login', passport.authenticate('local'), controller.login);
router.post('/logout', controller.logout);
router.get('/loggedin', controller.loggedin);
router.get('/users', checkIfLoggedin, controller.getUsers);


module.exports = router;