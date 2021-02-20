import { Router } from 'express'
import createPost from './create.post'

const app = Router()

app.use([
  createPost,
])

export default app
