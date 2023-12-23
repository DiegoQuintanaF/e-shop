import { db } from '../../../db/mongodb/index.js'
import { InternalServerError } from '../../utils/apiErrors.js'

const controller = (db) => {
  const getProducts = async (req, res, next) => {
    try {
      const products = await db.findAll(db.models.product)
      res.json({ products })
    } catch (error) {
      next(new InternalServerError(error))
    }
  }

  const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
      const product = await db.findOne(db.models.product, id)
      res.json({ product })
    } catch (error) {
      next(error)
    }
  }

  const createProduct = async (req, res, next) => {
    const { body: product } = req
    try {
      const productCreated = await db.insertOne(db.models.product, product)
      res.status(201).json({ product: productCreated })
    } catch (e) {
      next(e)
    }
  }

  return {
    getProducts,
    getProductById,
    createProduct
  }
}

export const ctrl = ((db) => controller(db))(db)
