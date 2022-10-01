const express = require("express");
const app = express();
const login = require('./server/pages/auth/login')
const resister = require('./server/pages/auth/register')

const port = 3001;
require("./server/db/conn");

app.use(express.json());
app.use(login);
app.use(resister);
app.listen(port, () => {
  console.log(`server running ${port}`);
});