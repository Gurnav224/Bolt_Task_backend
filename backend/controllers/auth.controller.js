import { User } from "../models/user.model.js";


export  const register = async (req , res) => {
    const {username, email , password} = req.body;
    try {
  
        const newUser =  await User.create({username, email, password})

        // const user = new User({username, email, password})

        // await user.save();

        res.status(201).json({message:'new user created successfully', newUser})


    } catch (error) {
        console.log(error)
        res.status(500).json({error:'failed to register'})
    }
}

