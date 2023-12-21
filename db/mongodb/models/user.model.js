import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.UUID,
    required: true
  },
  custumerId: {
    type: mongoose.Schema.Types.UUID,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userStatus: {
    type: Boolean,
    required: true
  }
})

const User = mongoose.model('User', userSchema)

export { User }
