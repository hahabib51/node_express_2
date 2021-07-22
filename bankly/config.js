/** Shared config for application; can be req'd many places. */

require("dotenv");

const SECRET_KEY = process.env.SECRET_KEY || "development-secret-key";

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

let DB_CONFIG;

if (process.env.NODE_ENV === "test") {
  DB_CONFIG = {
    user: "christopher",
    password: "Guitar1234!",
    port: 5432,
    database: "bankly_test",
    host: "/var/run/postgresql",
  };
} else if (process.env.DATABASE_URL) {
  DB_CONFIG = process.env.DATABASE_URL;
} else {
  DB_CONFIG = {
    user: "christopher",
    password: "Guitar1234!",
    port: 5432,
    database: "bankly",
    host: "/var/run/postgresql",
  };
}

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_CONFIG,
};
