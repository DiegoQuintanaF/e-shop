import { NotFoundError } from '../utils/errors.js'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    // Manejo específico para errores 404 (Not Found)
    return res.status(err.status).send('Página no encontrada este handler -> ' + err.message)
  }

  // Manejo genérico para otros errores
  console.error(new Date(), `${err.stack}\n`)
  res.status(err.status).send('Algo salió mal')
}

export const notFoundHandler = (req, res) => {
  const err = new NotFoundError('No se encontró la ruta! 404')
  throw err
}
