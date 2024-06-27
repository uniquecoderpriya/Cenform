import Admin from '../models/adminModel.js';

const signup = async (req, res) => {
    const { officerId, aadharNumber, password } = req.body;

    try {
        const existingAdmin = await Admin.findOne({ officerId });
        if (existingAdmin) {
            return res.status(400).json({ success: false, message: 'Admin with this officer ID already exists' });
        }
        const newAdmin = new Admin({ officerId, aadharNumber, password });
        await newAdmin.save();
        res.status(200).json({ success: true, message: 'Admin created successfully' });
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
const login = async (req, res) => {
    const { officerId, password } = req.body;

    try {
        const admin = await Admin.findOne({ officerId });

        if (!admin || admin.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        res.status(200).json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export { signup,login };

