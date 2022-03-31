const express = require('express')
const router = express.Router()
const usersDbConenct = require('../../mongodb')
const jwt = require('jsonwebtoken')

const { redis } = require('../../redis')

router.post('/', async (req, res) => {
    let data = await usersDbConenct.usersDbConenct()
    let emailCheck = await data.findOne({email : req.body.email})
    let passwordCheck = await data.findOne({password : req.body.password})

    if (!emailCheck || !passwordCheck) {
        res.status(400).send('Invalid Credentials')
    }
    else{
        const token = jwt.sign({email:req.body.email}, 'mykey',{expiresIn : 60*1});
        console.log("successfully logged in", token)

        // redis.set///
        const tokens=JSON.stringify(token)
          redis.set('token',tokens,(err,reply)=>{
            if(err) throw err;
            
            console.log(reply)
            res.end("token create succesfully")
          })

        res.status(200).send({
            message : 'successfully logged in',
            status : token || []
        })
    }
  })
  

  module.exports=router;