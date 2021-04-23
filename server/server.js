import express from 'express'
import devBundle from './devBundle' // for development mode, comment out in production

const app = express()
devBundle.compile(app)  // for development mode, comment out in production