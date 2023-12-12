// import { join } from 'node:path'
// import config from './../../config.js'

const index = (req, res) => {
  // res.render(join(config.projectRoot, 'views', 'index.ejs'))
  res.render('index.ejs')
}

export {
  index
}
