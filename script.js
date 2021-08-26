const price = document.querySelector('#car-price');
const priceOut = document.querySelector('#price-out'); 
price.addEventListener('input', function() {
  priceOut.value = price.value;
  rest(priceOut.value);
  monthpay(restpayOut.value);
})

const avansOut = document.querySelector('#avans-out'); 
const credittime = document.querySelector('#credit-time');
const finResult = document.querySelector('#fin-result');



function sumOut(value){
  if(value == 20) {
    let total = priceOut.value * 0.2; 
    finResult.value = total;
  }
  else if(value == 40) {
    let total = priceOut.value * 0.4; 
    finResult.value = total;
  }
  else if(value == 60) {
    let total = priceOut.value * 0.6; 
    finResult.value = total;
  }
} 


const timeOut = document.querySelector('#time-out'); 
credittime.addEventListener('input', function() {
  timeOut.value = credittime.value;
  if(credittime.value == '12') {
    avansOut.value = 20;
  } else if(credittime.value == '24') {
    avansOut.value = 40;
  } else if(credittime.value == '36') {
    avansOut.value = 60;
  }

  sumOut(avansOut.value);
  rest(priceOut.value);
  monthpay(restpayOut.value);
})

const restpayOut = document.querySelector('#rest-payOut');

 function rest(value){
    if (value == '5000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '6000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '7000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '8000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '9000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }else if(value == '10000'){
      let r = priceOut.value - finResult.value;
      restpayOut.value = r;
    }
 }
  


   const monthpayOut = document.querySelector('#month-payOut')
  
function monthpay(value){
  if(value = '12'){
    let m = restpayOut.value / 12;
    let n = m + (restpayOut.value * 0.1);
    let round = n.toFixed(1);
    monthpayOut.value = round;
  }else if (value = '24'){
    let m = restpayOut.value / 24;
    let n = m + (restpayOut.value * 0.15)
    let round = n.toFixed(1);
     monthpayOut.value = round;
  }else if (value = '36'){
    let m = restpayOut.value / 36;
    let n =  m + (restpayOut.value * 0.2)
    let round = n.toFixed(1);
    monthpayOut.value = round;
  } 
}
  



/*function finres() {
  if((priceOut.value >= 5000, priceOut.value <= 10000) && (avansOut.value >= 20 , avansOut.value <= 60)){
    console.log(priceOut.value * avans.value)
    
  }

}
finres();*/


//12 20% from car price
//24 40% from car price
//36 60% from car price

// rest prise  / month quantity  if 36 * 20% if 24 * 15% if 12 * 10   */

