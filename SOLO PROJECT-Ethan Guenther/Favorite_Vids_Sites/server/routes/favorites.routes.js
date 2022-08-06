const FavoritesController = require('../controllers/favorites.controller')

module.exports = (app) => {
    app.post('/api/favorites', FavoritesController.createFavorite)
    app.get('/api/favorites', FavoritesController.getAllFavorites)
    app.get('/api/favorites/:id', FavoritesController.getFavoriteById)
    app.put('/api/favorites/:id', FavoritesController.updateFavoriteById)
    app.delete('/api/favorites/:id', FavoritesController.deleteFavorite)
}
