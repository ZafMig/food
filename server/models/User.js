import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false }
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema);

