const express = require("express");

const database = require("./piecesModel");

const router = express.Router();

// GET all connectors
router.get("/connectors", (req, res) => {

    database.getAllConnectors()
        .then(connectors =>
            res.status(200).json(connectors)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve connectors.", error})
        )
});

// GET all rods
router.get("/rods", (req, res) => {

    database.getAllRods()
        .then(rods =>
            res.status(200).json(rods)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve rods.", error})
        )
});

// GET connector by color
router.get("/connectors/:color", (req, res) => {

    const color = req.params.color;

    database.getConnectorByColor(color)
        .then(connectors =>
            res.status(200).json(connectors)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve data for a " + color + " connector.", error})
        )
});

// GET rod by color
router.get("/rods/:color", (req, res) => {

    const color = req.params.color;

    database.getRodByColor(color)
        .then(connectors =>
            res.status(200).json(connectors)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve data for a " + color + " rod.", error})
        )
});
module.exports = router;