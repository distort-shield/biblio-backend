const express = require("express");
const musiquesRoutes = require("./routes/musiques-routes");
const filmsRoutes = require("./routes/films-routes");
const gamesRoutes = require("./routes/games-routes");
const router = require("./routes/musiques-routes");
const app = express();
app.use(express.json());

app.use("/api/musiques", musiquesRoutes);
app.use("/api/films", filmsRoutes);
app.use("/api/games", gamesRoutes);

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "une erreur non gérée est survenue" });
});

app.listen(5000);
