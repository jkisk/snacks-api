const model = require('./snacks.model.js')



function getAll(req, res, next) {
    const limit = req.query.limit
    const result = model.getAll(limit)

    res.status(200).json(result)
}

function getOne(req, res, next) {
    const result = model.getOne(req.params.id)
    return res.status(200).send(result)
}

function create(req, res, next) {
    const result = model.create(req.body)

    if (result.errors) {
        return next({ status: 400, message: `Could not create snack`, errors: result.errors })
    }

    res.status(201).json({ data: result })

}

function update(req, res, next) {
    const result = model.update(req.params.id, req.body)
    return res.status(201).send(result)
}

function remove(req, res, next) {
    const result = model.remove(req.params.id)
    return res.status(201).send(result)

}


module.exports = { create, getAll, getOne, update, remove }