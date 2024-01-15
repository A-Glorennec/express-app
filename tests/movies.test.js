const request = require("supertest");
const app = require("../app");

describe('GET /api/movies', () => {
    it("should return all movies", async () => {
        const response = await request(app).get("/api/movies");
        // etre sûr d'avoir une réponse au format json
        expect(response.headers["content-type"]).toMatch(/json/);
        // etre sûr que la réponse ait un statut 200
        expect(response.status).toEqual(200);

    });
});

describe('GET /api/movies/:id', () => {
    it("should return JSON format for movie id 1", async () => {
        const response = await request(app).get("/api/movies/1");
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    })
})

describe('GET /api/movies/:id', () => {
    it("should return 404 status for movie id 0", async () => {
        const response = await request(app).get("/api/movies/0");
        expect(response.status).toEqual(404);
    })
})