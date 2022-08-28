import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
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
    },
    isOnline: {
      type: Boolean,
      required: true,
      default: false,
    },
    permission: {
      type: String,
      required: true,
      default: 'user',
    },
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', userSchema);
