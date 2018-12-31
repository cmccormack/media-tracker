const request = require("supertest")
let server
describe("Loading server", () => {

  beforeAll(() => {
    server = require("../server.js")
  })
  
  afterAll((done) => {
    server.close(done)
  })

  test("Server is loaded and success response is received", (done) => {
    request(server)
      .get("/")
      .expect(200)
      .end(done)
  })
})

