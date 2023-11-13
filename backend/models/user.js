import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {},
    password: {}
});

export default mongoose.model('User', userSchema);
