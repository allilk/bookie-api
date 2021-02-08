
let mongoose = require('mongoose'),
Schema = mongoose.Schema;
let MeasureSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    last_updated: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Measurement', MeasureSchema);