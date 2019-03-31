const request = require("supertest");
let server;
describe("Loading server", () => {
  beforeAll(() => {
    server = require("../server.js");
  });

  afterAll(done => {
    server.close(done);
  });

  test("Server is loaded and success response is received", done => {
    request(server)
      .get("/api/health")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect({ success: true, message: "Server is running" }, done);
  });
});
