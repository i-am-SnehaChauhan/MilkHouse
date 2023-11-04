import User from '../model/userSchema.js';

export const signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email }).exec();
        if (existingUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        }
        
        const newUser = new User({User});
        
        const savedUser = await newUser.save();
        return res.status(201).json({
            message: 'Signup successfull',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong during user creation'
        });
    }
};

