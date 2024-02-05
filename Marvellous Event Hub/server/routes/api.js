const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');//bcz of MongodbAtlass sathi haa driver lagto mongoose 
//Database store 2 options:
//1.mongodb compass like a picture(Movie) in laptop
//2.mongodbAtlass:picture save on drive whenever we access it
const User = require('../models/user');
const jwt = require('jsonwebtoken')//verify kartaa token
const db = "_________";//ithe mongodbAtlass chaa url takaaa haa cloud varti asnar laptopvar nasnar
//Data aplaaa node express server aheee haa try karaa data store in mongodbAtlass.....
//Ha data server kadun return hotoy
//Add: 
//1.Componenet which dispaly information like a Help Nav bar madhee add karaa
//2.User Take vr click karel tyaveli ek form dislaa pahijeee only display form
//3.Take admission chya at madhe flag deychaa ahee true or false (Disable /not clickable) 
//4.Dataa haa Mongodbcomapss madhee store karaa from the Server... 
//5.Default route haa eventss aheee.....to Help walaa default karaaa
//6.Create your own new Project....
/*
mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});
*/

function verifyToken(req, res, next) //next means special events chaa nav
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/events', (req,res) => {
  let events = [
    {
      "_id": "1",
      "name": "Angular: Web Development",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "Python: Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "Machine Learning",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "GoLang",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "IPhone Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "Android Programming",
      "description": "2 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(events)//It is nacked
})

router.get('/special', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "IOT",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "2",
      "name": "IOS Internals",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "3",
      "name": "LSP",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "4",
      "name": "Struts",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "5",
      "name": "Embedded Programming",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    },
    {
      "_id": "6",
      "name": "IOT Workshop",
      "description": "3 Days",
      "Teacher": "Piyush Manohar Khairnar"
    }
  ]
  res.json(specialEvents)//It is Protected
})

router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "Marvellous") && (userData.password == "Marvellous")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   //200 is sucess
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})

module.exports = router;