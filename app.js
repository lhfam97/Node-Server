const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");
const errorRoutes = require("./routes/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(shopRoutes);

app.use("/admin", adminData.routes);

app.use(errorRoutes);

app.listen(3000);
// const server = http.createServer(app);

// server.listen(3000);
