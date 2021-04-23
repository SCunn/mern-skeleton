import express from 'express'
import { MongoClient } from 'mongodb'
import devBundle from './devBundle' // for development mode, comment out in production
import path from 'path'
import template from './../template'

const app = express()
devBundle.compile(app)  // for development mode, comment out in production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR,'dist')))

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on %s.', port)
})

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-skeleton'
MongoClient.connect(url, (err, db)=> {
    console.log("Connected successfully to mongodb server")
    db.close()
})

app.get('/', (req, res) => {
    res.status(200).send(template())
})