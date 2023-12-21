import express from 'express'
import { search } from './search.model.js'

const routerSearch = express.Router()

routerSearch.get('/', search)

export { routerSearch }
