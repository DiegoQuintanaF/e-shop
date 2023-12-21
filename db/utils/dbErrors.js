class InvalidQueryError extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidQueryError'
    this.status = 400
  }
}

class NotFoundDBError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFoundDBError'
    this.status = 404
  }
}

class DuplicateError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DuplicateError'
    this.status = 409
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.status = 422
  }
}

class DatabaseConnectionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseConnectionError'
    this.status = 500
  }
}
export {
  InvalidQueryError,
  NotFoundDBError,
  DuplicateError,
  ValidationError,
  DatabaseConnectionError
}
