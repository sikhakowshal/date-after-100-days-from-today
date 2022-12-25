// importing express module
const express = require("express");

// creating express server instance
const app = express();

//getting addDays module from date-fns package
const addDays = require("date-fns/addDays");

//getting today's date using 'new Date()'
const todaysDate = new Date();

//API to send required date  as HTTP Response
app.get("/", (req, res) => {
  //get result date by adding 100 days to todays date using addDays
  const resultDate = addDays(todaysDate, 100);

  // sending result date as response to client using res.send()
  res.send(
    `${resultDate.getDate()}/${
      resultDate.getMonth() + 1
    }/${resultDate.getFullYear()}`
  );
});

//exporting express instance
module.exports = app;

//starting server by assigning a port number using listen()
app.listen(3000);
