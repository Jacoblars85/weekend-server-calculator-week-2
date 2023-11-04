const express = require('express');
const app = express();
let PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.static('server/public'));

// Global variable that will contain all of the
// calculation objects:

let calculations = [{
  numOne: 0,
  operator: '',
  numTwo: 0,
  result: 0
}];


// let result = 0;
// let newestResult = calculations[calculations.length-1];
// newestResult.result = doingMath(newestResult.numOne, newestResult.numTwo, newestResult.operator);

// console.log('this should be the result', result);
// console.log('this should be the calc array', calculations);


function doingMath(numOne, numTwo, operator) {
  if (operator === '+') {
    return numOne + numTwo
  } else if (operator === '-') {
    return numOne - numTwo
  } else if (operator === '*') {
    return numOne * numTwo
  } else if (operator === '/') {
    return numOne / numTwo
  }
}




// Here's a wonderful place to make some routes:

// GET /calculations
app.get('/calculations', (req, res) => {
  console.log('we got a get req', calculations);
  res.send(calculations);
});


// POST /calculations

app.post('/calculations', (req, res) => {
  console.log('we got a post req');
  let newMath = req.body
  console.log(newMath);
  calculations.push(newMath)



let newestResult = calculations[calculations.length-1];
newestResult.result = doingMath(newestResult.numOne, newestResult.numTwo, newestResult.operator);

console.log('this should be the result', newestResult.result);
console.log('this should be the calc array', calculations);

  res.sendStatus(201)
});


// app.post('/clear', (req, res) => {
//   console.log('we got POST req');
//   let clearValues = req.body
//   if (clearValues) {
    
//   }
//   res.sendStatus(201)

// })









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
