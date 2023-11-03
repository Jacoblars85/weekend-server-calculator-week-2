console.log('client.js is sourced!');

let totalNum = 0;
let operator = '';

function postMath(event) {
    console.log('in post math');
    event.preventDefault()
      
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value

    document.getElementById('name').value = ''
    document.getElementById('description').value = ''
  
    
    let newInventory = {
      name: name,
      description: description
    }
    axios({
      method: 'POST',
      url: '/inventory',
      data: newInventory
    }).then((response) => {
      getInventory()
    })
}

function getMath() {
    console.log('were getting get math');
    axios({
        url: '/math',
        method: 'GET'
      }).then((response) => {
        let calculations = response.data 
        renderingMath(calculations)
      })

}

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
    
}