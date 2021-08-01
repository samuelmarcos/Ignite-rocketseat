import express from 'express'

const app = express()

app.use(express.json())

import { categorieRoutes } from './routes/categories.routes'

app.use(categorieRoutes)

app.listen(3000, () => {
    console.log('server runnig on port 3000')
})