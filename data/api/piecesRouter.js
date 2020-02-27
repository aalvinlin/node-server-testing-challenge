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

// POST new connector to database
router.post("/connectors", (req, res) => {

    let connectorInfo = req.body;

    if (!connectorInfo || !connectorInfo.color || !connectorInfo.angle || !connectorInfo.hasHole || !connectorInfo.connections)
        {
            res.status(400).json({message: "Must include color, angle, hasHole, and connections properties."})
        }
    else
        {
            database.addRod(connectorInfo)
                .then(connectors =>
                    res.status(201).json(connectors)
                )
                .catch(error =>
                    res.status(500).json({message: "Could not add connector.", error})
                )
        }
});

// POST new rod to database
router.post("/rods", (req, res) => {

    let rodInfo = req.body;

    if (!rodInfo || !rodInfo.color)
        {
            res.status(400).json({message: "Must include color property."})
        }
    else
        {
            database.addRod(rodInfo)
                .then(rods =>
                    res.status(201).json(rods)
                )
                .catch(error =>
                    res.status(500).json({message: "Could not add rod.", error})
                )
        }
});


// DELETE connector by color
router.delete("/connectors/:color", (req, res) => {

    const color = req.params.color;

    database.deleteConnectorByColor(color)
        .then(connectors =>
            res.status(200).json({message: "Data for the " + color + " connector was deleted."})
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve data for a " + color + " connector.", error})
        )
});

// DELETE rod by color
router.delete("/rods/:color", (req, res) => {

    const color = req.params.color;

    database.deleteRodByColor(color)
        .then(connectors =>
            res.status(200).json({message: "Data for the " + color + " rod was deleted."})
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve data for a " + color + " rod.", error})
        )
});



module.exports = router;