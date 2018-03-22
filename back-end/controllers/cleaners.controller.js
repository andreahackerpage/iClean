const Cleaner = require("../models/Cleaner");

exports.getCleaners = function(req, res, next){
  Cleaner.find()
  .then(cleaners=>res.status(200).json(cleaners))
  .catch(e=>res.status(500).send(e));
}

exports.postCleaners = (req, res, next)=>{
const newCleaner = new Cleaner({
  name: req.body.name,
  lastname: req.body.lastname,
  email: req.body.email,
  address: req.body.address,
  password: req.body.password,
 
});

newCleaner.save()
.then(cleaner=>res.status(201).json(cleaner))
.catch(e=>res.status(500).send(e));

}
