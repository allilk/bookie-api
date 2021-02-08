let mongoose = require('mongoose'),
    Step = mongoose.model('Step');
exports.new = function(req, res) {
    req.body.created_by = req.user._id;
    let newStep = new Step(req.body);
    newStep.save(function(err, step) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
            return res.json(step);
      }
    });
};
exports.get = function(req, res) {
    Step.findOne({
        _id: req.body._id
    }, function(err, step) {
        if (err) {
            return res.status(400).send({
              message: err
            });
          } else {
            return res.json(step);
          }
    });
};
exports.update = function(req, res) {
    Step.findById(req.body._id, function(err, step) {
        step.name = req.body.name;
        step.save(function(err, response) {
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
    