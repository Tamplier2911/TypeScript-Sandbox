/*
const dotenv = require("dotenv");

process.on("uncaughtException", err => {
  console.log("UNCAUGHT EXCEPTION", err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "../config.env" });

const app = require("./index");

// server
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}/ ...`);
});

process.on("unhandledRejection", err => {
  console.log("UNDANDLED REJECTION", err);
  server.close(() => {
    process.exit(1);
  });
});
*/
