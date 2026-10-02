const express = require("express");
const path = require("path");
const app = express();
const { connectMongoDb } = require("./connections");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const cookieParser = require("cookie-parser");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const dashboardRoute = require("./routes/dashboard");
const { checkforAuth, restrictAccess } = require("./middleware/auth");

const PORT = 8001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkforAuth);

app.use("/url", restrictAccess(["normal"]), urlRoute);
app.use("/dashboard", restrictAccess(["normal"]), dashboardRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { returnDocument: "after" },
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  return res.redirect(entry.redirectUrl);
});

connectMongoDb("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
