import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.UUID,
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
    type: [{
      url: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }],
    required: [true, 'At least one image is required'],
    validate: {
      validator: function (images) {
        return images.length >= 1
      },
      message: 'At least one image is required'
    }
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
})

const Product = mongoose.model('Product', productSchema)

export { Product }
