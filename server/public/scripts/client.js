console.log('client.js is sourced!');


function postMath() {
    console.log('in post math');

}

function getMath() {
    console.log('were getting get math');
    axios({
        url: '/math',
        method: 'GET'
      }).then((response) => {
        let calculations = response.data 
       
      })

}

function renderingMath() {
    console.log('were rendering');


}