import User from '../model/userSchema.js';

export const signup = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email }).exec();
        if (existingUser) {
            return res.status(400).json({
                message: 'User already registered'
            });
        }
        
        // Create a new user using the data from req.body
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,  // Make sure username is provided in the request
            email: req.body.email,
            countryCode: req.body.countryCode,  // Make sure countryCode is provided in the request
            contactNumber: req.body.contactNumber,
            password: req.body.password,
            // ... other fields ...
        });

        await newUser.save();
        
        return res.status(201).json({
            message: 'Signup successful',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong during user creation'
        });
    }
};
