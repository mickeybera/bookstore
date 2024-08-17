import User from '../model/user.model.js';
import bcryptjs from "bcryptjs";

// Controller function to create a new user
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ massage: "user is already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({ massage: "user created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
            password:createdUser.password,
        }});
    } catch (error) {
        console.log("Error: " + error.massage)
        res.status(500).json({ message: "Internal server error" });
    }
};

// login 

export const login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        // Check if the user with the provided email exists
        const user = await User.findOne({ email });
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({massage:"invalid username or password!"})
        }else{
            res.status(200).json({massage:"login successfull!",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                password:user.password
            }})
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error"});
    }
}



