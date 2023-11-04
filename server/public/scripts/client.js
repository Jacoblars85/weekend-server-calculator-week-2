console.log('client.js is sourced!');

let result = 0;
let operator = '';

//the POST route for the math
function postMath(event) {
    event.preventDefault()

      //grabs the input and makes it a variable
    let numOne = document.getElementById('numOne').valueAsNumber
    let numTwo = document.getElementById('numTwo').valueAsNumber
    operatorButton(event);
    

    //clears the inputs
    document.getElementById('numOne').value = ''
    document.getElementById('numTwo').value = ''
    
  
    //puts the input into an object 
    let newMath = {
      numOne: numOne,
      operator: operator,
      numTwo: numTwo,
      result: result
    }
    console.log(newMath);
    axios({
      method: 'POST',
      url: '/calculations',
      data: newMath
    }).then((response) => {
      console.log('did this work?');
        getMath()
    })
}

//the GET route for the math
function getMath() {
    axios({
        url: '/calculations',
        method: 'GET'
      }).then((response) => {
        let calculations = response.data 
        renderingMath(calculations)
        console.log('this data is being rendered', calculations);
      })

}

//Renders the math onto the screen below
function renderingMath(calculations) {
    console.log('were rendering');
    //finding the spot to put the new math
    let recentResult = document.getElementById('recentResult');
    let resultHistory = document.getElementById('resultHistory');
        //clearing previous spot for this area
        resultHistory.innerHTML = ''
        recentResult.innerHTML = '';
      
      //   adds to the newest math that was just done
        recentResult.innerHTML += `
        <p>${calculations[calculations.length-1].result}</p>
      `
        for (let calc of calculations) {
            //should add all of the recent resaults into this part
          resultHistory.innerHTML +=`
          <ol>${calc.numOne} ${calc.operator} ${calc.numTwo} = ${calc.result}</ol>
          `
        }

}


function operatorButton(event, op) {
  console.log('we are clicking operator button');
  event.preventDefault();

  if (op === '+') {
    operator = '+'
    console.log(operator);
  } else if (op === '-') {
    operator = '-'
    console.log(operator);
  } else if (op === '*') {
    operator = '*'
    console.log(operator);
  } else if (op === '/') {
    operator = '/'
    console.log(operator);
  } 
  return operator;
}



// function clearButton() {
//     document.getElementById('roundTable').innerHTML = ''
//     let clearValues = true;

//     axios({
//       method: 'POST',
//       url: '/clear',
//       data: clearValues
//     }).then((response) => {
//       console.log("does this work clearing?");
//       clearValues = false;
//     })
//   }