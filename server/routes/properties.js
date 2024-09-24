const router = require("express").Router();
const mongoose = require("mongoose");
let NPIMSProperty = require("../models/NPIMS_Property.model");

router.route("/").get((req, res) => {
  NPIMSProperty.find()
    .then((properties) => res.json(properties))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  let id = new mongoose.Types.ObjectId(req.params.id);
  NPIMSProperty.findById(id)
    .then((property) => res.json(property))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const propertyNumber = req.body.propertyNumber;
  const propertyType = req.body.propertyType;
  const description = req.body.description;
  const dateAcquired = req.body.dateAcquired;
  const unitPrice = req.body.unitPrice;
  const endUser = req.body.endUser;
  const status = req.body.status;

  const newProperty = new NPIMSProperty({
    propertyNumber,
    propertyType,
    description,
    dateAcquired,
    unitPrice,
    endUser,
    status,
  });

  newProperty
    .save()
    .then(() => res.json("Property added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  let id = new mongoose.Types.ObjectId(req.params.id);
  NPIMSProperty.findById(id)
    .then((property) => {
      property.propertyNumber = req.body.propertyNumber;
      property.propertyType = req.body.propertyType;
      property.description = req.body.description;
      property.dateAcquired = Date.parse(req.body.dateAcquired);
      property.unitPrice = Number(req.body.unitPrice);
      property.endUser = req.body.endUser;
      property.status = req.body.status;

      property
        .save()
        .then(() => res.json("Property updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  let id = new mongoose.Types.ObjectId(req.params.id);
  NPIMSProperty.findByIdAndDelete(id)
    .then(() => res.json("Property deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
