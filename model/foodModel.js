let foods
const { v4: uuidv4 } = require('uuid')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(foods)
    })
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const food = foods.find((p) => p.id === id)
        resolve(food)
    })
}


function create(food) {
    return new Promise((resolve, reject) => {
        const newFood = {id: uuidv4(), ...food}
        foods.push(newFood)
        resolve(food)
    })
}

function update(id, food) {
    return new Promise((resolve, reject) => {
        const index = foods.findIndex((p) => p.id === id)
        foods[index] = { id, ...food }

        resolve(foods[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        foods = foods.filter((p) => p.id !== id)

        resolve()
    })
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}