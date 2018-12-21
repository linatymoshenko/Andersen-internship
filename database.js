let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(":memory:");

class Database {
  constructor() {
    db.serialize(function () {
      db.run("CREATE TABLE cities (name TEXT)");

      let stmt = db.prepare("INSERT INTO cities VALUES (?)");
      stmt.run("Kiev");
      stmt.run("Moscow");
      stmt.run("Cherkassy");
      stmt.run("Paris");
      stmt.run("London");
      stmt.finalize();
    });
  }

  getCity(callback) {
    db.get("SELECT * FROM cities ORDER BY RANDOM() LIMIT 1;", callback);
  }

  setCity(name) {
    db.run("INSERT INTO cities VALUES (?)", name);
  }

  close() {
    db.close();
  }
}

module.exports = Database;
