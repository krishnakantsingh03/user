const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;
require("./Repo/mongoConfig");
const userRouter = require("./Router/User");
const User = require("./Model/User");

app.use(express.json());
app.use(
    cors({
        origin: "*",
    })
);
app.use(userRouter);

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})