const express = require("express");

const database = require("./piecesModel");

const router = express.Router();

router.get("connectors", (req, res) => {

    database.getConnectors()
        .then(connectors =>
            res.status(200).json(connectors)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve connectors.", error})
        )
});

router.get("rods", (req, res) => {

    database.getRods()
        .then(rods =>
            res.status(200).json(rods)
        )
        .catch(error =>
            res.status(500).json({message: "Could not retrieve rods.", error})
        )
});


module.exports = router;