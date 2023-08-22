import express, { Express, Request, Response } from 'express'
import sampleResponse from '../sampleData/sampleResponse'
import bodyParser from 'body-parser'

const app: Express = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello!')
})

app.get('/blocks', (req: Request, res: Response) => {
  return res.json(sampleResponse)
})

app.put('/blocks/:blockId', (req: Request, res: Response) => {
  const blockIdToUpdate = req.params.blockId
  const newBlock = req.body

  /**
   * Note: this will not really save the changes on the server as we are not editing the
   * "db" / json files directly. IRL we would write changes to our DB.
   */
  const updatedResponse = sampleResponse.map((b) =>
    b.BlockId === blockIdToUpdate ? newBlock : b
  )

  return res.json(updatedResponse)
})

app.listen(PORT, () => {
  console.log(`[Server]: I am running on port:${PORT}`)
})
