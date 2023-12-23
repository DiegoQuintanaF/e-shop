import 'dotenv/config'

const projectRoot = new URL('.', import.meta.url).pathname

export const config = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  projectRoot
}
