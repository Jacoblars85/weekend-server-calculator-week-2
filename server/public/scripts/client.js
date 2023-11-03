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

    let recentResult = document.getElementById('recentResult');
      
        recentResult.innerHTML = '';
      
        for (let calc of calculations) {
          recentResult.innerHTML += `
            <p>${totalNum}:</p>
          `
        }

}

function clearButton(params) {
    
}