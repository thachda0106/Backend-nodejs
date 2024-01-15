const app = require("./src/app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server starting at port: ${PORT}.`)
})

process.on("SIGINT", () => {
  console.log('The sever is closed!')
  // notify to ...
})
