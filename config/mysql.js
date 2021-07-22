const Development = {
    USER: "root",
    PASSWORD: "password",
};

const Production = {
    USER: "admin",
    PASSWORD: "",
}

module.exports = {
    ...(process.env.ENV === "prod" ? Production : Development),
    HOST: "",
    DB: "singh",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}