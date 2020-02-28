require("dotenv").config();

describe("server", function() {
    describe("environment", function() {
        it("uses the testing environment", function () {
            expect(process.env.DB_ENV).toBe("testing");
        })
    })
})