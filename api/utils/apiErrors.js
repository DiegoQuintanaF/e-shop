class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFoundError'
    this.status = 404
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message)
    this.name = 'InternalServerError'
    this.status = 500
  }
}

class UnauthorizedActionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UnauthorizedActionError'
    this.status = 401
  }
}

export {
  NotFoundError,
  InternalServerError,
  UnauthorizedActionError
}
