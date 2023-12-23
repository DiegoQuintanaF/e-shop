import express from 'express'
import swaggerUi from 'swagger-ui-express'
import helmet from 'helmet'
import YAML from 'yamljs'

import { config } from '../config.js'
import { routerApp } from './network/routes.js'
import { bootstrap } from './utils/bootstrap.js'
import { helmetOptions } from './utils/helmetOptions.js'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'

const swaggerDocument = YAML.load(`${config.projectRoot}/swagger.yaml`)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(helmet(helmetOptions))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routerApp(app)

app.all('*', notFoundHandler)
app.use(errorHandler)

bootstrap(app, config)
