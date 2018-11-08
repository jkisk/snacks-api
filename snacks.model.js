const shortid = require('shortid')
const snacks = require('./data/snacks.js')


const create = (body) => {
    const errors = []
    const name = body.name
    const savory = body.savory
    const healthy = body.healthy
    const kids = body.kids


    let response
    if (!name) {
        errors.push('please provide name')
        response = { errors }
    }
    else {
        const snack = {
            id: shortid.generate(),
            name,
            savory,
            healthy,
            kids
        }
        snacks.push(snack)
        response = snack
    }
    return response
}


const getAll = (limit) => {
    return limit ? snacks.slice(0, limit) : snacks
}


const getOne = (id) => {
    return result = snacks.find(s => s.id === id)
}

const update = (id, body) => {

    const updateIndex = snacks.findIndex(s => s.id === id)
    const name = body.name
    const savory = body.savory
    const healthy = body.healthy
    const kids = body.kids

    snacks[updateIndex] = {
        id,
        name,
        savory,
        healthy,
        kids
    }


    return snacks[updateIndex]
}

const remove = (id) => {
    const removeIndex = snacks.findIndex(s => s.id === id)
    return snacks.splice(removeIndex, 1)
}


module.exports = { create, getAll, getOne, update, remove }