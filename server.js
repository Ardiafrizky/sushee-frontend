const http = require('http')
const { getFoods, getFood, createFood, updateFood, deleteFood } = require('./controller/foodController')

const server = http.createServer((req, res) => {
    if(req.url === '/api/v1/foods' && req.method === 'GET') {
        getFoods(req, res)
    } else if(req.url.match(/\/api\/v1\/food\/([0-9]+)/) && req.method === 'GET')  {
        const id = req.url.split('/')[3]
        getFood(req, res, id)
    } else if(req.url === '/api/v1/foods' && req.method === 'POST') {
        createFood(req, res)
    } else if(req.url.match(/\/api\/v1\/food\/([0-9]+)/) && req.method === 'PUT')  {
        const id = req.url.split('/')[3]
        updateFood(req, res, id)
    } else if(req.url.match(/\/api\/v1\/food\/([0-9]+)/) && req.method === 'DELETE')  {
        const id = req.url.split('/')[3]
        deleteFood(req, res, id)
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringfy({ message: 'Route Not Found' }))
    }
})

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = server;