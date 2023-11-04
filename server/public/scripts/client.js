console.log('client.js is sourced!');

let totalNum = 0;
let operator = '';

//the POST route for the math
function postMath(event) {
    event.preventDefault()

      //grabs the input and makes it a variable
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let operator = document.getElementById('operatorButton').value

    //clears the inputs
    document.getElementById('num1').value = ''
    document.getElementById('num2').value = ''
    
  
    //puts the input into an object 
    let newMath = {
      num1: num1,
      num2: num2,
      operator: operator
    }
    axios({
      method: 'POST',
      url: '/inventory',
      data: newMath
    }).then((response) => {
        getMath()
    })
}

//the GET route for the math
function getMath() {
    axios({
        url: '/math',
        method: 'GET'
      }).then((response) => {
        let calculations = response.data 
        renderingMath(calculations)
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
      
        for (let calc of calculations) {
            //adds to the newest math that was just done
          recentResult.innerHTML = `
            <p>${calc.totalNum}</p>
          `
            //should add all of the recent resaults into this part
          resultHistory.innerHTML +=`
          <ol>${calc.num1} ${calc.operator} ${calc.num2} = ${calc.totalNum}</ol>
          `
        }

}

function clearButton() {
    document.getElementById('roundTable').innerHTML = ''
    let clearValues = true;
    roundNum = 0;

    axios({
      method: 'POST',
      url: '/clear',
      data: clearValues
    }).then((response) => {
      console.log("does this work clearing?");
      clearValues = false;
    })
  }