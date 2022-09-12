const express = require("express");

const app = new express();

app.get("/", (req, res) =>
  res.send({
    status: "endpoint working",
    message: "Test endpoint working fine!",
  })
);

app.listen(80, () => console.log("server listening on 80"));