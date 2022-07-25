const  mongoose  = require("mongoose");

const  userName = new mongoose.Schema({
    title:{
        type:String,
    },
    Note:{
        type:String,
    },
    Label:{
        type:String,
    }

        

})
const userData = new mongoose.model("user1",userName)
 module.exports= userData