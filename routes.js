const bodyParser = require('body-parser');

module.exports = (app, express) => {
    app.use(bodyParser.json());

    const studentsRoutes = require('./modules/students')(express);
    const teachersRoutes = require('./modules/teachers')(express);

    app.use("/api/students", studentsRoutes);
    app.use("/api/teachers", teachersRoutes);

    app.get("/", (req, res) => {
        console.log(res.send("Server is running!!!"));
    });
}