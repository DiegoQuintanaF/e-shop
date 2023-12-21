import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  }
})

const Category = mongoose.model('Category', categorySchema)

export { Category }
