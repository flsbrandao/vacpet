import app from "./config/custom-express";

let port = 3333;
app.listen(port, () => {
  console.log(`VacPet rodando na porta ${port}`)
});