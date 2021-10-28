//contactController.js
// Import creature models
Creature = require('./creaturesModels');
// Handle index actions
exports.index = function (req, res) {
    Creature.get(function (err, creatures) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "creatures retrieved successfully",
            data: creatures
        });
    });
};
// Handle create creature actions
exports.new = function (req, res) {
    var creature = new Creature();
    creature.name = req.body.name ? req.body.name : creature.name;
    creature.description = req.body.description;
    creature.ubication = req.body.ubication;
    creature.state = req.body.state;
    // save the creature and check for errors
    creature.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New creature created!',
            data: creature
        });
    });
};
// Handle view creature info
exports.view = function (req, res) {
    Creature.findById(req.params.creature_id, function (err, creature) {
        if (err)
            res.send(err);
        res.json({
            message: 'creature details loading..',
            data: creature
        });
    });
}
// Handle update creature info
exports.update = function (req, res) {
    Creature.findById(req.params.creature_id, function (err, creature) {
        if (err)
            res.send(err);
        creature.name = req.body.name ? req.body.name : creature.name;
        creature.description = req.body.description;
        creature.ubication = req.body.ubication;
        creature.state = req.body.state;
        // save the creature and check for errors
        creature.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'creature Info updated',
                data: creature
            });
        });
    });
}
// Handle delete creature
exports.delete = function (req, res) {
    Creature.remove({
        _id: req.params.creature_id
    }, function (err, creature) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'creature deleted'
        });
    });
}
