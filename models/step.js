
let mongoose = require('mongoose'),
Schema = mongoose.Schema;
let StepSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Step', StepSchema);