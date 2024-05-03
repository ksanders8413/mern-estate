import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/67403482_2896625290563002_3730719858728370176_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uPpSRZJ4owsQ7kNvgGcX23G&_nc_ht=scontent-ord5-2.xx&oh=00_AfBE4R9wweXI5o4MotlnjSbdhdHOpVumXNTbpKFGhlxYTQ&oe=665B9CA5"
  },
}, {timestamps: true});


const User = mongoose.model('User', userSchema)


export default User