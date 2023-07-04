import User from '../models/user.js';

export const signup = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email }).exec();
        if (existingUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        }
        
        const {
            firstName,
            lastName,
            email,
            password,
            contact
        } = req.body;
        
        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            contact,
            username: Math.random().toString(),
        });
        
        const savedUser = await newUser.save();
        return res.status(201).json({
            message: 'User was created'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: 'Something went wrong during user creation'
        });
    }
};

