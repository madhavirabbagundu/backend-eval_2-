const userData = require("../database/user");

async function allusers(req,res,next){
    const users = await userData.find();
    return res.send({
        data:users
    })
}

    async function postdata(req,res,next){
        const { user : datauser } = req.body;
        let users= new userData(datauser)
        await users.save();
    
        return res.send({
            message:"user data"
        });
    
    }


    //delete

    async function deleteuser(req, res, next) {
        const { id:userId } = req.params;
    
        await userData.findByIdAndDelete(userId)
    
        return res.send({
            message: "user deleted."
        })
    }


     //patch
     async function updateData(req,res,next){
        const { users:datauser} = req.body;
        const {id:userId} = req.params;
    
        let users = await userData.findById(userId)
       for(const [key,value] of Object.entries(datauser)){
           users[key] = value;
       }
       await users.save();
    
          return res.send({
            message:"updated",
            data:users,
        })
    
    }



module.exports = {
    allusers,
    postdata,
    updateData,
    deleteuser

}