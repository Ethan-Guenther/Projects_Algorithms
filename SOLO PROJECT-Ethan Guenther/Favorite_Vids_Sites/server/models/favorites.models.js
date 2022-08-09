const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema(
    {
        url: {
            type: String, 
            required:[true, "URL Must Not Be Blank"],
            maxLength:[500, "FAVORITE URLS CAN NOT EXCEED 500 CHARACTERS"]

        },

        description: {
            type: String,
            required: [true, "Description Must Not Be Blank"],
            minLength: [3, 'Description must be at least 3 characters long'],
            maxLength: [600, 'Max character length is 600 characters']
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("Favorites", FavoritesSchema);