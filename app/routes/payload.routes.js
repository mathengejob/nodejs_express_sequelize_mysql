module.exports = app => {
    const payloads = require("../controllers/payload.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", payloads.create);
    // Retrieve all Tutorials
    router.get("/", payloads.findAll);
    // Retrieve all published Tutorials
    router.get("/published", payloads.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", payloads.findOne);
    // Update a Tutorial with id
    router.put("/:id", payloads.update);
    // Delete a Tutorial with id
    router.delete("/:id", payloads.delete);
    // Delete all Tutorials
    router.delete("/", payloads.deleteAll);
    app.use('/api/payloads', router);
  };