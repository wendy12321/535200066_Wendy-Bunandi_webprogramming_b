const express = require("express");

const router = express.Router();

// router.get("/login", async (req, res) => {
//   res.render("pages/login");
// });


router.get("/login", async (req, res) => {
     // if the user has logged-in, redirect to index 
     if (req.session.user) {
          req.redirect("/"); 
     } else {
          res.render("pages/login", { layout: false }); 
     } 
}); 

router.post("/login", async (req, res) => {
     // get user input 
     const username = req.body.username; 
     const password = req.body.password; 

     if(username === "admin" && password === "admin") { 
          // TODO: implement sessions to check user is logged-in 
          // implement sessions to check user is logged-in 
          req.session.user = "admin"; 

          // redirect to member area 
          res.redirect("/"); 
     } 
     else {
          // TODO: render the login page with error information 
          // render the login page with error information 
          res.render("pages/login", { layout: false, error: "Wrong username or password."}); 
     } 
});  

router.get("/logout", async (req, res) => {
     // detroy all session 
     req.session.destroy(); 

     // redirect to login 
     res.redirect("/auth/login"); 
}); 



module.exports = router; 



