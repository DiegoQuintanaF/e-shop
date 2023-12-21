import mongoose from 'mongoose'

const custumerSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.UUID,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  }
})

const Customer = mongoose.model('Customer', custumerSchema)

export { Customer }
