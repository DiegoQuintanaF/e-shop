import express from 'express'
import { index } from './page.model.js'

const routerPage = express.Router()

routerPage.get('/', index)

export { routerPage }
