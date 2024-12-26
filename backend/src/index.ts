import express, { Application, Request, Response, NextFunction } from 'express'
import { routes } from './routes/index'
import { logger } from './utils/logger'
import cors from 'cors'

const app: Application = express()
const port: Number = 3000

app.use(cors())
app.use(express.json())
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
routes(app)

app.listen(port, () => logger.info(`Server running on port ${port}`))
