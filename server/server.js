let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require("body-parser");
let compression = require("compression");
let helmet = require("helmet");

app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.set("views", "./server/views");
app.set("view engine", "pug");

const routes = require("./routes");

app.use("/", routes);
app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/resume", (req, res) => {
  res.download("./DevonBullResume.pdf", "DevonBullResume.pdf");
});

app.use((req, res, next) => {
  var err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    error: err.status,
    message: "Something went wrong, Sorry!"
  });
});

app.listen(port, () => {
  process.stdout.write("\033c");
  console.log("Listening at port 3000");
});
