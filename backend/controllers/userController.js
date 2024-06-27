import User from '../models/userModel.js';

const signup = async (req, res) => {
    const { fullName, email, password, aadharNo } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User with this email already exists' });
        }
        const newUser = new User({ fullName, email, password, aadharNo });
        await newUser.save();
        res.status(200).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const login = async (req, res) => {
    const { email, password, aadharNo } = req.body;
    try {
        const user = await User.findOne({ email, password, aadharNo });
        if (user) {
            res.status(200).json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export { signup,login };

