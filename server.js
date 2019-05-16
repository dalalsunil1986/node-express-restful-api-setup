const express = require('express');
const app = express();
const port = 8080;

require("./routes")(app, express);

app.listen(port, () => {
    console.log("Server has started at port " + port);
})
