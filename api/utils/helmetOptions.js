export const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      'img-src': ["'self'", 'data:', '*']
    }
  }
}
