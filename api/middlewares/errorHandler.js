import { NotFoundError } from '../utils/apiErrors.js'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(err.status).send('Página no encontrada este handler -> ' + err.message)
  }

  console.error(new Date(), `${err.stack}\n`)
  res.status(err.status ?? 500).send('Error en el servidor')
}

export const notFoundHandler = (req, res, next) => {
  const err = new NotFoundError('No se encontró la ruta! 404')
  next(err)
}
