
let mongoose = require('mongoose'),
Schema = mongoose.Schema;
let IngredientSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    created_by: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Ingredient', IngredientSchema);