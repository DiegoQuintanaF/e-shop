import { db } from '../../db/index.js'

const bootstrap = async (app, config) => {
  console.log('[bootstrap] Starting server...')
  await db.connect()

  app.listen(config.port, () => {
    console.log(`[bootstrap] Server listening on ${config.host}:${config.port}`)
  })
}

export { bootstrap }
