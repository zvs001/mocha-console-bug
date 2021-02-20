import express from 'express'
import brandRouter from './brand/router'
// import meRouter from './me/router'

const app = express.Router()

app.use('/brand', brandRouter)

export default app
