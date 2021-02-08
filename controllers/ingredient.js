let mongoose = require('mongoose'),
    Ingredient = mongoose.model('Ingredient');
exports.new = function(req, res) {
    req.body.created_by = req.user._id;
    let newIngredient = new Ingredient(req.body);
    newIngredient.save(function(err, ingredient) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
            return res.json(ingredient);
      }
    });
};
exports.get = function(req, res) {
    Ingredient.findOne({
        _id: req.body._id
    }, function(err, ingredient) {
        if (err) {
            return res.status(400).send({
              message: err
            });
          } else {
            return res.json(ingredient);
          }
    });
};
exports.update = function(req, res) {
    Ingredient.findById(req.body._id, function(err, ingredient) {
        ingredient.name = req.body.name;
        ingredient.save(function(err, response) {
            if (err) {
                return res.status(400).send({
                    message: err
                });
            } else {
                return res.json(response);
            }
        });

    });
};
    