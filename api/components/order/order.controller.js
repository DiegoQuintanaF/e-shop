import { colls, findAll } from '../../../db/mongodb/index.js'
import { InternalServerError } from '../../utils/apiErrors.js'

const getCateries = async (req, res, next) => {
  try {
    const categories = await findAll(colls.category)
    console.log(categories)
    res.json(categories)
  } catch (error) {
    next(new InternalServerError(error.message))
  }
}

export {
  getCateries
}
