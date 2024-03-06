const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.router");
const cartRouter = require("./routes/cart.router");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for SE Shop",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express for  SE Shop.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Titadach Sratongaun",
      url: "https://jsonplaceholder.typicode.com",
      email: "644259010@webmail.npru.ac.th",
    },
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};
const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);
//Config .env
dotenv.config();
const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Database Connection
const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL);

app.get("/", (req, res) => {
  res.send("<h1>Restful API For Se Shop</h1>");
});
//Add Router
app.use("/products", productRouter);
app.use("/carts", cartRouter);

//Run server
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
