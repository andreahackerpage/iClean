const User = require("../models/User");

exports.getUsers = function(req, res, next){
  User.find()
  .then(users=>res.status(200).json(users))
  .catch(e=>res.status(500).send(e));
}

exports.postUsers = (req, res, next)=>{
const newUser = new User({
  name: req.body.name,
  email: req.body.email,
  address: req.body.address,
  password: req.body.password,
  order: req.body.orderId
});

newUser.save()
.then(user=>res.status(201).json(user))
.catch(e=>res.status(500).send(e));

}



