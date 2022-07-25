const express = require('express')
const productData = require('../database/user')
const { allusers, postdata,updateData,deleteuser } = require('../handlers/user')
// const { allusers } = require('../handlers/user')


const userRouter = express.Router()
userRouter.get('/users/all',allusers)
userRouter.post('/user',postdata)

userRouter.patch('/user/:id',updateData)

userRouter.delete('/user/:id', deleteuser)

userRouter.delete('/user/:id', deleteuser)

module.exports=userRouter;