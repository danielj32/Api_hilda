//creaturesModels
var mongoose = require('mongoose');
//var Schema = mongoose.Schema;
var creatureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
});
// Export the creauturesModels
var Creature = module.exports = mongoose.model('creature', creatureSchema);
module.exports.get = function (callback, limit) {
    Creature.find(callback).limit(limit);
}
