const { createServer } = require("http")
const { parse } = require("url")
const next = require("next")
const Database = require("./database")
const db = new Database();

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === "/api/city/random") {
        db.getCity((err, row) => {
            res.end(row.name)
        });
    }

    if (pathname === "/api/city/add") {
        req.on("error", (err) => {
            console.error(err);
          }).on("data", (chunk) => {
            let jsonString = chunk.toString();
            let body = JSON.parse(jsonString);
            db.setCity(body.name);
          })

        res.end("succes");
    }

    // if (pathname === '/a') {
    //   app.render(req, res, '/b', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/a', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(3000, err => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})