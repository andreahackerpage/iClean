const Schema = require("mongoose").Schema;
const orderSchema = new require("mongoose").Schema({
    cleaner:{
        type:Schema.Types.ObjectId,
        ref:"Cleaner"
    },
    services:{
        type:String
    },
    rooms: Number,
    price:{
        type:Number
        
    },
    hour:{
      type:String
},
date:{
    type:String
},
    address:{
        type:String
    }
},{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
module.exports = require("mongoose").model("Order", orderSchema);