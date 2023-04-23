import express from 'express';
import {connectToDB} from './helpers/db.js'

const app = express();
const PORT = process.env.SERVER_PORT || 3001; // 3000 will be used in react

const startServer = () => {
    app.get('/test', (req, res) => {
        res.json({test: 'Ok', status: 'success'})
    })

    app.listen(PORT, () => {
        console.log('Server started on', PORT)
    })
}

connectToDB()
.on('error', console.log)
.on('disconnected', connectToDB)
.once('open', () => {
    console.log('DB connected');
    startServer()
})

