var python = require("../controllers/Python.Controller");

module.exports = (app) => {

    app.get("/pythonDataFromNode", python.getPythonData);

};