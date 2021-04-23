import express from 'express'
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

app.get('/', (req, res) => {
    res.status(200).send(template())
})