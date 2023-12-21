import express from 'express'
import { getCateries } from './order.controller.js'

const routerOrder = express.Router()

routerOrder.get('/', getCateries)

export { routerOrder }
