const Food = require('../models/foodModel')

// @desc    Gets all foods
// @route   GET /foods
async function getFoods(req, res) {
    try {
        const foods = await Food.findAll()

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(
            "<h1>this is home</h1>"
        )        
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets single food
// @route   GET /food/:id
async function getFood(req, res, id) {
    try {
        const food = await Food.findByID(id)

        if(!food) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(
                "<h1>Not found</h1>"
            )          
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(
                "<h1>Found</h1>"
            )        
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a food
// @route   POST /foods
async function createFood(req, res) {
    try {
        let body = ''
        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', async () => {
            const { title, description } = JSON.parse(body)

            const food = {
                title,
                description
            }

            const newFood = await Food.create(food)
    
            res.writeHead(201, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(newFood))
        })
        
     
    } catch (error) {
        console.log(error)
    }
}

// @desc    Update a food
// @route   PUT /foods/:id
async function updateFood(req, res, id) {
    try {
        const food = await Food.findById(id)

        if(!food) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(
                "<h1>Not found</h1>"
            )        
        } else {
            let body = ''
            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on('end', async () => {
                const { title, description } = JSON.parse(body)

                const foodData = {
                    title: title || food.title,
                    description: description || food.description
                }

                const updatedFood = await Food.update(id, foodData)
        
                res.writeHead(200, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(updatedFood))
            })   
        }

    } catch (error) {
        console.log(error)
    }
}


// @desc    Delete food
// @route   DELETE /food/:id
async function deleteFood(req, res, id) {
    try {
        const food = await Food.findByID(id)

        if(!food) {
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.end(
                "<h1>Not found</h1>"
            )          
        } else {
            await Food.remove(id)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(JSON.stringify({ message: `Food ${id} removed` }))        
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getFoods,
    getFood,
    createFood,
    updateFood,
    deleteFood
}