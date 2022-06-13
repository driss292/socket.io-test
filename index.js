const app = require("express")();
const http = require("http").Server(app);
// const server = http.createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on("connection", (socket) => {
  console.log(`Un utilisateur s'est connecté`);
  socket.on("disconnect", () => {
    console.log(`Un utilisateur s'est déconnecté`);
  });
  socket.on("chat message", (msg) => {
    console.log(`Message recu : ${msg}`);
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log(`server OK...`);
});
