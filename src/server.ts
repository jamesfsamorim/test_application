import 'dotenv/config'
import * as express from 'express'

const app = express()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`)
})