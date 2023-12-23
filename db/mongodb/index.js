import mongoose from 'mongoose'
import './models/category.model.js'
import './models/customer.model.js'
import './models/order.model.js'
import './models/product.model.js'

import { config } from '../../config.js'
import { DatabaseConnectionError, InvalidQueryError, NotFoundDBError } from '../utils/dbErrors.js'

const { dbUser, dbPassword, dbHost, dbName } = config

const mongoUrl = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`

const models = {
  user: 'User',
  custumer: 'Custumer',
  category: 'Category',
  product: 'Product',
  order: 'Order'
}

Object.freeze(models)

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl)
    console.log('[db] Connection success!')
  } catch (error) {
    console.error(`[db] Connection failed: ${error}`)
    throw new DatabaseConnectionError(error.message)
  }
}

const findAll = async (coll, offset = 0, limit = 20) => {
  if (!models[coll.toLowerCase()]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }
  console.log('coll -> ', coll)

  try {
    const data = await mongoose.model(models[coll]).find({}, { __v: 0 })
    return data
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

const findOne = async (coll, id) => {
  if (!models[coll.toLowerCase()]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }

  try {
    const data = await mongoose.model(coll).findOne({ _id: id })
    return data
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

const insertOne = async (coll, data) => {
  if (!models[coll.toLowerCase()]) {
    throw new InvalidQueryError(`[db] Collection "${coll}" not found!`)
  }

  try {
    const result = await mongoose.model(coll).insertMany(data)
    return result
  } catch (error) {
    throw new NotFoundDBError(error.message)
  }
}

export const db = {
  connect,
  findAll,
  findOne,
  insertOne,
  models
}
