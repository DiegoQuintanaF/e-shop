import { db } from '../../../db/mongodb/index.js'

function controller(db) {
  const getOrders = async (req, res, next) => {
    try {
      const categories = await db.findAll(db.models.order)
      res.json({ categories })
    } catch (error) {
      next(error)
    }
  }

  return {
    getOrders
  }
}

export const ctrl = ((db) => controller(db))(db)
