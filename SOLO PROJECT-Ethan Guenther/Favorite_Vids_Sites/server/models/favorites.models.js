const mongoose = require('mongoose');

const FavoritesSchema = new mongoose.Schema(
    {
        url: {
            type:String, 
            required:[true, "URL Cannot Be Blank"],
            maxLength:[500, "FAVORITE URLS SHOULD NOT EXCEED 500 CHARACTERS"]

        },

        description: {
            type: String,
            required: [true, "A description is required"],
            minLength: [3, 'A description must be at least 3 characters long'],
            maxLength: [600, 'Max character length is 600 characters']
        }
    }, {timestamps: true}
)

module.exports = mongoose.model("Favorites", FavoritesSchema);