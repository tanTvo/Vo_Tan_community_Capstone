import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const signupUser = async (req, res) => {
	try {
		const { name, email, username, password } = req.body;
		const user = await User.findOne({ $or: [{ email }, { username }] });

		if (user) {
			return res.status(400).json({ error: "User already exists" });
		}
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			name,
			email,
			username,
			password: hashedPassword,
		});
		await newUser.save();

        if(newUser){
            res.status(201).json({
                _id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				username: newUser.username,
            })
        }else {
			res.status(400).json({ error: "Invalid user data" });
		}

    }catch(err){
        res.status(500).json({message: error.message})
        console.log("Error in signupUser: ", err.message)
    }
};


export  {signupUser};