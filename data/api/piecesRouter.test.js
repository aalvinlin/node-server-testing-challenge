const request = require("supertest");

const server = require("../../server.js")

const database = require("../db-config");

// clear table before each test case
// beforeEach(async () => {
//     await database("connectors").truncate();
//     await database("rods").truncate();
// })

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


// testing GET /api/rods/:color
describe("GET /api/rods/red", function () {
    test("should return a 200 status code", function () {
        return request(server)
            .get("/api/rods/red")
            .then(response => {
                expect(response.status).toBe(200);
            })
    })
});

describe("GET /api/rods/black", function () {
    test("should return a 500 status code", function () {
        return request(server)
            .get("/api/rods/black")
            .then(response => {
                expect(response.status).toBe(500);
            })
    })
});


// testing POST /api/connectors
describe("POST /api/connectors", function () {
    test("should return a 201 status code", function () {
        return request(server)
            .post("/api/connectors")
            .send({ color: "white", angle: 360, hasHole: 1, connections: 8})
            .then(response => {
                expect(response.status).toBe(201);
            })
    })
});

describe("POST /api/connectors", function () {
    test("should return a 400 status code", function () {
        return request(server)
            .post("/api/connectors")
            .send({ color: "purple"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

// testing POST /api/rods
describe("POST /api/rods", function () {
    test("should return a 201 status code", function () {
        return request(server)
            .post("/api/rods")
            .send({ color: "clear"})
            .then(response => {
                expect(response.status).toBe(201);
            })
    })
});

describe("POST /api/rods", function () {
    test("should return a 400 status code", function () {
        return request(server)
            .post("/api/rods")
            .send({ nothing: "missing color"})
            .then(response => {
                expect(response.status).toBe(400);
            })
    })
});

// testing DELETE /api/connectors/:color

