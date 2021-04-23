import express from 'express'
import devBundle from './devBundle' // for development mode, comment out in production
import path from 'path'

const app = express()
devBundle.compile(app)  // for development mode, comment out in production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,'dist')))
