require('@babel/register')

import express from 'express'
import http from 'http'
import path from 'path'

let app = express(),
    server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname + '/src/server/index.html')
})

server.listen(1337, () => console.log('listening on port 1337'))