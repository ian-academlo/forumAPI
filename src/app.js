const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/user.routes");
const postsRoutes = require("./routes/post.routes");
const answerRoutes = require("./routes/anwers.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandlerRouter = require("./routes/errorHandler.routes");
const categoriesRouter = require("./routes/categories.routes");
initModels();

// insertar puclicaciones en las categorias 1 y 2

const app = express(); // instancia de mi aplicacion

// esto se ejecuta por cada peticion que se hace al servidor
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => console.log(error));

db.sync({ force: false }) // alterar los atributos
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(userRoutes);
app.use(postsRoutes);
app.use(answerRoutes);
app.use(authRoutes);
app.use(categoriesRouter);

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

errorHandlerRouter(app);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
