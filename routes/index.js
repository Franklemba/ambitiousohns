const express = require("express");
const router = express.Router();
const Quotation = require('../models/quotationSchema');

router.get("/", async (req, res) => {
  
    try{
      res.render("home/index",{
      });
    }catch(err){
      res.send("error hosting web")
      console.log(err)
    }
    
  });

  router.post('/', async (req,res)=>{
    var message = req.body.message
    var serializedMessage = message.trim();

    const quotation = new Quotation({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: serializedMessage
    })
    try{
       await quotation.save()
       console.log(quotation)
       res.render('home/index',{
        // message: `message sent successfully`,
        // url: "/"
       })
    //    console.log(comments)
    }catch(err){
       res.redirect('/')
       console.log(err)
    }
})

router.get('/quotations', async(req,res) =>{
   const quotations = await Quotation.find()
   res.send(quotations)
})



  module.exports = router;