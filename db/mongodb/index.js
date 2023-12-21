import mongoose from 'mongoose'
import config from '../../config.js'
import './models/category.model.js'
import './models/customer.model.js'
import './models/order.model.js'
import './models/product.model.js'
import { DatabaseConnectionError, InvalidQueryError, NotFoundDBError } from '../utils/dbErrors.js'

const { dbUser, dbPassword, dbHost, dbName } = config

const mongoUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

const modelNames = {
  user: 'User',
  custumer: 'Custumer',
  category: 'Category',
  product: 'Product',
  order: 'Order'
}

Object.freeze(modelNames)

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl)
    console.log('[db] Connection success!')
  } catch (error) {
    console.error(`[db] Connection failed: ${error}`)
    throw new DatabaseConnectionError(error.message)
  }
}

const findAll = async (coll) => {
  coll = coll.toLowerCase()
  if (!modelNames[coll]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }

  try {
    const data = await mongoose.model(modelNames[coll]).find({})
    return data
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

const findOne = async (coll, id) => {
  coll = coll.toLowerCase()
  if (!modelNames[coll]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }

  try {
    const data = await mongoose.model(modelNames[coll]).findOne({ _id: id })
    return data
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

const insertOne = async (coll, data) => {
  coll = coll.toLowerCase()
  if (!modelNames[coll]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }

  try {
    const result = await mongoose.model(coll).create(data)
    return result
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

export {
  connect,
  findAll,
  findOne,
  insertOne,
  modelNames as colls
}
