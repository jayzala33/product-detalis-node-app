const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/Router.js");

// Connect to MongoDB database
mongoose
  .connect(
    "mongodb+srv://jayzala33:jayzala33@cluster0.otggl.mongodb.net/sample_mflix?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use(cors());
    // app.use(function (req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    //   res.header(
			//     "Access-Control-Allow-Headers",
			//     "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
			//   );
			// });
			app.use("/api", routes);
			app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
