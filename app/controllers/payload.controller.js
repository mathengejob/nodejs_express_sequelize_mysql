const db = require("../models");
const Payload = db.payloads;
const Op = db.Sequelize.Op;
// Create and Save a new Payload
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Header) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Payload
    const payload = {
      Header: req.body.Header,
      HL7_Raw: req.body.HL7_Raw,
      published: req.body.published ? req.body.published : false
    };
    // Save Payload in the database
    Payload.create(payload)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Payload."
        });
      });
  };
// Retrieve all Payloads from the database.
exports.findAll = (req, res) => {
    const Header = req.query.Header;
    var condition = Header ? { Header: { [Op.like]: `%${Header}}%` } } : null;
    Payload.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving payloads."
        });
      });
  };
// Find a single Payload with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Payload.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Payload with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Payload with id=" + id
        });
      });
  };
// Update a Payload by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Payload.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Payload was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Payload with id=${id}. Maybe Payload was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Payload with id=" + id
        });
      });
  };
// Delete a Payload with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Payload.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Payload was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Payload with id=${id}. Maybe Payload was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Payload with id=" + id
        });
      });
  };
// Delete all Payload from the database.
exports.deleteAll = (req, res) => {
  const id = req.params.id;
  Payload.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Payload was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Payload with id=${id}. Maybe Payload was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Payload with id=" + id
      });
    });
  
};
// Find all published Payload
exports.findAllPublished = (req, res) => {
  Payload.findAll({ where: { published: true } })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving payloads."
    });
  });
  
};