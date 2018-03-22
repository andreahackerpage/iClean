const Schema = require("mongoose").Schema;
const cleanerSchema = new require("mongoose").Schema({
    
    name:{
        type:String
    },
    lastname:{
        type:String,
        
    },
    email:{
      type:String,
     
    },
    avatar:{
        type: Array,
        default:[]
    },
    address:{
      type:String,
    
    },
    password:{
        type:String
    }
  
});

module.exports = require("mongoose").model("Cleaner", cleanerSchema);