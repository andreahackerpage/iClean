const User = require('../models/User');

exports.signup = (req,res,next)=>{
    User.register(req.body, req.body.password, (err, account)=>{
        if(err) return res.status(500).send(err);
        return res.status(201).json(account);
    });
}

exports.login = (req,res)=>{
    console.log(req.user);
    const onlySafeData = req.user;
    //onlySafeData['hash'] = 'raulito';
    res.status(200).json(onlySafeData);
}

exports.logout = (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Success' });
  }

exports.loggedin = (req, res, next) => {
    if (req.isAuthenticated()) {
      res.status(200).json(req.user);
      return;
    }
  
    res.status(403).json({ message: 'Unauthorized' });
  }

 


exports.getUsers = (req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(e=>res.send(e))
}