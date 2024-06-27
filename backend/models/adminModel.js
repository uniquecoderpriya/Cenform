import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    officerId: {
        type: String,
        required: true,
        unique: true
    },
    aadharNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
