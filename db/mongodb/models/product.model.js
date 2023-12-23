import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: {
    type: [String]
  },
  categoryId: {
    type: Number
  }
})

const Product = mongoose.model('Product', productSchema)

export { Product }
