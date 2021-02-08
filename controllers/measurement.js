let mongoose = require('mongoose'),
    Measurement = mongoose.model('Measurement');
exports.new = function(req, res) {
    req.body.created_by = req.user._id;
    let newMeasurement = new Measurement(req.body);
    newMeasurement.save(function(err, measurement) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
            return res.json(measurement);
      }
    });
};
exports.get = function(req, res) {
    Measurement.findOne({
        _id: req.body._id
    }, function(err, measurement) {
        if (err) {
            return res.status(400).send({
              message: err
            });
          } else {
            return res.json(measurement);
          }
    });
};
exports.update = function(req, res) {
    Measurement.findById(req.body._id, function(err, measurement) {
        measurement.value = req.body.value || measurement.value;
        measurement.type = req.body.type || measurement.type;
        measurement.save(function(err, response) {
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
    