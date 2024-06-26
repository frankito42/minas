import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    user: String,
    pass: String,
  }, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel