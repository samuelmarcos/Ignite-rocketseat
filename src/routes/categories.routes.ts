import { Router } from 'express'

const categorieRoutes = Router()

const categories = []

categorieRoutes.post('/categories', (request, response) => {
    const { name, description } = request.body
    categories.push({name, description})
    return response.status(201).send()
})

export { categorieRoutes }