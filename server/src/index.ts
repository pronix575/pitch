import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import { server } from './graphql/core'
import bodyParser from 'body-parser'
import pino from 'pino'
// import expressPino from 'express-pino-logger'
import path from 'path'

const logger = pino({ level: process.env.LOG_lEVEL || 'info' })
// const expressLogger = expressPino({ logger }) 

const production: boolean = process.env.NODE_ENV == "production",
      PORT: number = config.get('port') || (( production ) ? 80 : 1000 )

const app = express()
app.use(bodyParser())

// production && app.use(expressLogger)

//static
app.use(express.static('files'));

if (production) {
    
    app.use('/', express.static(path.resolve('../client/build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('../client/build/index.html'))
    })
}

server.applyMiddleware({ app })

const start = async () => {
    try {
        await mongoose.connect( config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, (): void => {
            console.log(`Server ready at port ${ PORT }${ !production && ", http://localhost:" + PORT || '' }`)
        })
    } catch (e) {
        console.log('Server error')
        console.warn(e)

        process.exit(1)
    }
}

start()
