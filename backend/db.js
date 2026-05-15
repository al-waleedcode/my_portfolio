const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const DB_PATH = path.join(__dirname, "database.sqlite");
const SCHEMA_PATH = path.join(__dirname, "schema.sql");


const dbExists = fs.existsSync(DB_PATH);

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error("Failed to open database:", err);
    return;
  }
  if (!dbExists) {
    try {
      const schema = fs.readFileSync(SCHEMA_PATH, "utf8");
      db.exec(schema, (execErr) => {
        if (execErr) console.error("Failed to initialize schema:", execErr);
        else console.log("✅ SQLite database initialized at", DB_PATH);
      });
    } catch (readErr) {
      console.error("Failed to read schema.sql:", readErr);
    }
  } else {
    console.log("✅ SQLite database opened at", DB_PATH);
  }
});

module.exports = db;
