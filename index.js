const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on("connection", (socket) => {
  console.log(`Un utilisateur s'est connecté`);
});

server.listen(3000, () => {
  console.log(`server OK...`);
});
