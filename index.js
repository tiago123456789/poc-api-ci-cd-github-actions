const express = require("express");
const calc = require("./calc");
const app = express();


app.get("/sum/:value/:value2", (request, response) => {
    const { value, value2 } = request.params;
    response.json({
        result: calc.sum(parseFloat(value), parseFloat(value2))
    })
})

app.get("/multiple/:value/:value2", (request, response) => {
    const { value, value2 } = request.params;
    response.json({
        result: calc.multiple(parseFloat(value), parseFloat(value2))
    })
})

app.get("/subtract/:value/:value2", (request, response) => {
    const { value, value2 } = request.params;
    response.json({
        result: calc.subtract(parseFloat(value), parseFloat(value2))
    })
})


app.listen(3000, () => console.log("Server is running"))