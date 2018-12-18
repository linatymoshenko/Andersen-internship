const {createServer} = require("http");
const {parse} = require("url");
const next = require("next");
const Database = require("./database");
const db = new Database();

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((request, response) => {
    const parsedUrl = parse(request.url, true);
    const {pathname, query} = parsedUrl;

    if (pathname === "/api/city/random") {
      db.getCity((error, row) => {
        response.end(row.name)
      });
    } else if (pathname === "/api/city/add") {
      request.on("error", (error) => {
        console.error(error);
      }).on("data", (chunk) => {
        let jsonString = chunk.toString();
        let body = JSON.parse(jsonString);
        db.setCity(body.name);
      });

      response.end("succes");
    } else {
      handle(request, response, parsedUrl)
    }
  }).listen(3000, error => {
    if (error) throw error;
    console.log("> Ready on http://localhost:3000")
  })
});
