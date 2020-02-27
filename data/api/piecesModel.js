const database = require("../db-config");

module.exports = {
    getAllConnectors,
    getAllRods,

    getConnectorBy,
    getRodBy,

    addConnector,
    addRod
}


function getAllConnectors() {
    return database("connectors");
}

function getAllRods() {
    return database("rods");
}

function getConnectorBy(query) {
    return database("connectors")
        .where(query);
}

function getRodBy(query) {
    return database("rods")
        .where(query);
}

function addConnector(connector) {
    return database("connectors")
        .insert(connector);
}

function addRod(rod) {
    return database("rods")
        .insert(rod);
}