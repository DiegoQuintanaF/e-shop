import express from 'express'
import { ctrl } from './order.controller.js'

const routerOrder = express.Router()

routerOrder.get('/', ctrl.getOrders)

export { routerOrder }
