import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.UUID,
    required: true
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  custumerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
})

const Order = mongoose.model('Order', orderSchema)

export { Order }
