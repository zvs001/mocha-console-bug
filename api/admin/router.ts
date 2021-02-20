import express from 'express'
import routes from './routes/router'

const app = express.Router()

app.use(routes)

export default app
