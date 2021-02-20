import { Router } from 'express'

const app = Router()

app.post('/create', async (req, res) => {
  console.log('console.log before invisible error')
  console.error('console.error before invisible error')
  throw new Error('Invisible Error')
})

export default app
