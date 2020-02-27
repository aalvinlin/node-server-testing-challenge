const request = require("supertest");

const server = require("../../server.js")

const database = require("../db-config");

// clear table before each test case
beforeEach(async () => {
    await database("connectors").truncate();
    await database("rods").truncate();
})

describe("Pieces router", () => {
    test("tests run", function() {
        expect(true).toBe(true);
    });
})

// testing GET /api/connectors
describe("GET /api/connectors", function() {
    test("should return a 200 status code", function () {
        return request(server)
            .get("/api/connectors")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })

    test("should return a JSON-formatted body", function () {
        return request(server)
            .get("/api/connectors")
            .then(response => {
                expect(response.type).toMatch(/json/i);
            })
    })

    test("should return an array of connectors", function () {
        return request(server)
            .get("/api/connectors")
            .then(response => {
                expect(Array.isArray(response.body)).toBe(true);
            })
    })   
});

// testing GET /api/rods
describe("GET /api/rods", function() {
    test("should return a 200 status code", function () {
        return request(server)
            .get("/api/rods")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })

    test("should return a JSON-formatted body", function () {
        return request(server)
            .get("/api/rods")
            .then(response => {
                expect(response.type).toMatch(/json/i);
            })
    })

    test("should return an array of rods", function () {
        return request(server)
            .get("/api/rods")
            .then(response => {
                expect(Array.isArray(response.body)).toBe(true);
            })
    })   
});

// testing GET /api/connectors/:color
describe("GET /api/connectors/white", function () {
    test("should return a 200 status code", function () {
        return request(server)
            .get("/api/connectors/white")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("GET /api/connectors/black", function () {
    test("should return a 500 status code", function () {
        return request(server)
            .get("/api/connectors/black")
            .then(response => {
                expect(response.status).toBe(500);
            })
    })
});