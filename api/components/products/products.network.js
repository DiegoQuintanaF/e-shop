import express from 'express'
import { ctrl } from './products.controller.js'

const routerProducts = express.Router()

routerProducts.get('/', ctrl.getProducts)
routerProducts.post('/', ctrl.createProduct)

export { routerProducts }
