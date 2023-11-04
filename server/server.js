const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:
let calculations = [{
  num1: 4,
  num2: 4,
  operator: '*'
},
{
  num1: 8,
  num2: 2,
  operator: '/'
}
]

let totalNum = 0;

function doingMath(num1, num2) {
  if (calculations.operator === '+') {
    console.log('the new total is', totalNum);
    totalNum = num1 + num2
  } else if (calculations.operator === '-') {
    console.log('the new total is', totalNum);
    totalNum = num1 + num2
  } else if (calculations.operator === '*') {
    console.log('the new total is', totalNum);
    totalNum = num1 + num2
  } else if (calculations.operator === '/') {
    console.log('the new total is', totalNum);
    totalNum = num1 + num2
  }
}


// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/math', (req, res) => {
  res.send(calculations);
});


// POST /calculations

app.post('/math', (req, res) => {
  let newMath = req.body
  calculations.push(newMath)
  res.sendStatus(201)
});


app.post('/clear', (req, res) => {
  console.log('we got POST req');
  let clearValues = req.body
  if (clearValues) {
    console.log('we cleared', randomNumber);
  }
  res.sendStatus(201)

})









// PLEASE DO NOT MODIFY ANY CODE BELOW THESE BEARS:
// 🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸  🐻  🐻‍❄️  🧸

// Makes it so you don't have to kill the server
// on 5000 in order to run the tests:
if (process.env.NODE_ENV === 'test') {
  PORT = 5001;
}

// This starts the server...but also stores it in a variable.
// This is weird. We have to do it for testing reasons. There
// is absolutely no need for you to reason about this.
const server = app.listen(PORT, () => {
  console.log('server running on: ', PORT);
});

// server.setTimeout(500)

// This is more weird "for testing reasons" code. There is
// absolutely no need for you to reason about this.
app.closeServer = () => {
  server.close();
}

app.setCalculations = (calculationsToSet) => {
  calculations = calculationsToSet;
}

module.exports = app;
