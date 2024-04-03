const express = require("express")
const app = express()
let PORT = 3020
const { connectDB } = require("./connection")
const { UserModel } = require("./UserSchema")
const cors = require("cors")

connectDB()

app.use(express.json())
app.use(cors())

app.get("/api/getdata", async (req,res)=> {
  
  try {
    const Users = await UserModel.find({})

    if(!Users) {
      return res.status(404).json({success: false, massage: "On found User"})
    }

    res.status(200).json({seccess: true  , massage: "User Fached", Users})

  } catch (error) {
    res.status(500).json({seccess: false , massage: error.massage})
  }

})

app.post("/api/data", async (req, res) => {
  const { name, phone, email, massage } = req.body 

  try {
    let user = await UserModel.create({ name, phone, email, massage })
    await user.save()

    return res.status(201).json({ seccess: true, massage: "User Created Seccessfully " })

  } catch (error) {
    res.status(500).json({ status: false, massage: error.massage })
  }
})


app.delete("/api/delete/:id", async (req,res) => {

  const { id }  = req.params

  try {
    
    let user = await UserModel.findByIdAndDelete(id)
    if(!user) {
       res.status(404).json({seccess: false, massage: "User Not Found "})
    }
    
  } catch (error) {
    res.status(500).json({seccess: false, massage: error.massage})
  }

  return res.status(200).json({seccess: true, massage: "User delete seccsessfully"})

})

app.listen(PORT, () => {
  console.log(`Server listening At http://localhost:${PORT}`);
})