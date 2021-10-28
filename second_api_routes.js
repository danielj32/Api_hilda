
// api-routes.js
// Initialize express router
let router_second = require('express').Router();
// Set default API response
router_second.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import creature controller
var creatureController = require('./creatureController');
// Creature routes
router_second.route('/creatures')
    .get(creatureController.index)
    .post(creatureController.new);
router_second.route('/creatures/:creature_id')
    .get(creatureController.view)
    .patch(creatureController.update)
    .put(creatureController.update)
    .delete(creatureController.delete);


// Export API routes
module.exports = router_second;
