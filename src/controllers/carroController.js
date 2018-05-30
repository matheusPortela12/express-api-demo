const Carro = require('../models/carro')

module.exports = {
  create: (req, res, next) => {
    let carro = new Carro(req.body)

    carro.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Carro.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Carro.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Carro.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Carro.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Carro deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}