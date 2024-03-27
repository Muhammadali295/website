const express = require("express");
const router = new express.Router();
const conn = require("../db/connection");
// const bcrypt = require("bcrypt");
// user register data
router.post("/create",(req,res)=>{
    console.log(req.body);

    const {name,email,password,gender,phone,message} = req.body;
    // if all data send
    if( !name || !email || !password || !gender || !phone || !message ){
        res.status(422).json("plz fill entire form")
    }

    // check if user is new
    try{
        conn.query("SELECT * FROM users WHERE email = ?",email,(err,result)=>{
            if(result.length){
                res.status(422).json("This user already exist")
            }
            else{
                conn.query("INSERT INTO users SET ?",{name,email,password,gender,phone,message},(err,result)=>{
                    if(err){
                        console.log("err" + err)
                    }else{
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch(error){
        res.status(422).json(error);
    }
});

router.post("/submitform",(req,res)=>{
    console.log(req.body);

    const {name,email,password,gender,phone,message} = req.body;
    // if all data send
    if( !name || !email || !password || !gender || !phone || !message ){
        res.status(422).json("plz fill entire form")
    }

    // check if user is new
    try{
        conn.query("SELECT * FROM form_data WHERE email = ?",email,(err,result)=>{
            if(result.length){
                res.status(422).json("This user already exist")
            }
            else{
                conn.query("INSERT INTO form_data SET ?",{name,email,password,gender,phone,message},(err,result)=>{
                    if(err){
                        console.log("err" + err)
                    }else{
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch(error){
        res.status(422).json(error);
    }
});


router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    conn.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "An error occurred" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password2" });
      }
      const user = results[0];
      console.log("Entered Passsword:",password,"Database Password:",user.password)
      if (password !== user.password) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    // If passwords match
    res.json({ message: "Login successful", user: { id: user.id, email: user.email } });

//       const isMatch = await bcrypt.compare(password, user.password);
      
//       if (!isMatch) {
//         return res.status(401).json({ message: "Invalid email or password1" });
//       }
//       res.json({ message: "Login successful", user: { id: user.id, email: user.email } }); // Simplified, consider using tokens (e.g., JWT) for real apps
    });
  });

// get user data
router.get("/getusers",(req,res)=>{

    conn.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});
// user delete api
router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM users WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});
// update user
router.patch("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;

    conn.query("UPDATE users SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
            
        }
    })
});
module.exports = router;