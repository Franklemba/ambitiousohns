const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
  
    try{
      res.render("home/index",{
      });
    }catch(err){
      res.send("error hosting web")
      console.log(err)
    }
    // console.log(promoProducts);
    
  });



  module.exports = router;