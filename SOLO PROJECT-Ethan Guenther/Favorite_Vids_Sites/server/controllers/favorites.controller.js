const Favorites = require('../models/favorites.models');

module.exports.createFavorite = (req, res) => {
    Favorites.create(req.body)
    .then((newFavorite) => {
        res.status(201).json(newFavorite)
    })
    .catch((err) => {
        console.log("ERROR in create function", err)
        res.status(400)
        .json({message: "There was a problem creating a favorite", errors: err.errors});
    })
},

module.exports.getAllFavorites = (req, res) => {
    Favorites.find()
    .then((getAll) => {
        res.json(getAll)
    })
    .catch((err) => {
        console.log("ERROR in get all function", err)
        res.status(400).json({message: 'There was a problem getting all URL', error: err})
    })
},

module.exports.getFavoriteById = (req,res) => {
    Favorites.findOne({_id: req.params.id})
    .then((getOne) => {
        res.json(getOne)
    })
    .catch((err) => {
        console.log("ERROR in get one function",err)
        res.status(400).json({message: "There was a problem getting a url", error: err})
    })
},

module.exports.deleteFavorite = (req,res) => {
    Favorites.deleteOne({_id: req.params.id})
    .then((results) => {
        res.json(results)
    })
    .catch((err) => {
        console.log("ERROR in deleting favorite url", err)
        res.status(400).json({message: 'There was a problem deleting a url', error: err})
    })
},

module.exports.updateFavoriteById = (req, res) => {
    Favorites.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new:true, runValidators: true,
    })
    .then((updateFav) => {
        console.log(updateFav)
        res.json(updateFav)
    })
    .catch((err) => {
        console.log("ERROR in updating url", err)
        res.status(400).json({message: "There was a problem updating a url", error: err})
    })
}