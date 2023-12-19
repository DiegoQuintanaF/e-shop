import express from 'express'
import config from './config.js'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js'
import { routerApp } from './network/routes.js'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

const swaggerDocument = YAML.load(`${config.projectRoot}/swagger.yaml`)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
routerApp(app)

app.all('*', notFoundHandler)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`Example app listening on ${config.host}:${config.port} !`)
})
