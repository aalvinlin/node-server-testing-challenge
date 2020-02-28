const database = require("../db-config");

module.exports = {
    getAllConnectors,
    getAllRods,

    getConnectorByColor,
    getRodByColor,

    addConnector,
    addRod,

    deleteConnectorByColor,
    deleteRodByColor,

}

// GET functions
function getAllConnectors() {
    return database("connectors");
}

function getAllRods() {
    return database("rods");
}

function getConnectorByColor(color) {
    return database("connectors")
        .where({color})
        .first();
}

function getRodByColor(color) {
    return database("rods")
        .where({color})
        .first();
}

// ADD functions
function addConnector(connector) {
    return database("connectors")
        .insert(connector);
}

function addRod(rod) {
    return database("rods")
        .insert(rod);
}

// DELETE functions
function deleteConnectorByColor(color) {
    return database("connectors")
        .where({color})
        .del();
}

function deleteRodByColor(color) {
    return database("rods")
        .where({color})
        .del();
}
