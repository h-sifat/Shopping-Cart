// tax 1% of the whole price.
const P1=1219, P2=59;
let tax=12.78, price1 = P1, price2 = P2;
let subTot = P1 + P2
let total = subTot + tax;


let a = document.getElementById('subTot');
let b = document.getElementById('tax');
let c = document.getElementById('total');

let text1 = document.getElementById('text-1');
let text2 = document.getElementById('text-2');

function calculate(){
  subTot = price1 + price2;
  tax = subTot * 0.01;
  tax = tax.toFixed(2);
  total = subTot+ (+tax);
  a.innerText = price1 + price2;
  b.innerText = tax;
  c.innerText = total
}

// Manual Input function.

function manualInput(id){
document.getElementById(id).addEventListener('change',
function(){
  if(id === 'text-1'){
  let n = this.value;
  if(typeof (+n) === 'number' && (+n >= 0 && n!= "")){
    price1 = P1 * (+n);
  }
  else{
    this.value = 0;
    price1 = 0;
  }
  calculate();
}
if(id === 'text-2'){
  let n = this.value;
  if(typeof (+n) === 'number' && (+n >= 0 && n!= "")){
    price2 = P2 * (+n);
  }
  else{
    this.value = 0;
    price2 = 0;
  }
  calculate();
}
});
}
// increment function
function increment(id){
document.getElementById(id).addEventListener('click',function(){
  if(id === 'f-plus'){
    text1.value++;
    price1 += P1;
    calculate();
}
if(id === 's-plus'){
  text2.value++;
  price2 += P2;
  calculate();
}
});
}
// decrement function
function decrement(id){
document.getElementById(id).addEventListener('click',
function(){
  if(id === 'f-minus'){
  if((+text1.value)>0){
    text1.value--;
    price1 -= P1;
  }
  calculate();
  }
  if(id === 's-minus'){
    if((+text2.value)>0){
      text2.value--;
      price2 -= P2;
    }
    calculate();
  }
});
}

// remove function
function remove(id){
  document.getElementById(id).addEventListener('click', function(){
  if(id === 'fr'){
    price1 = 0;
    text1.value = 0;
    calculate();
  }
  if(id === 'sr'){
    price2 = 0;
    text2.value = 0;
    calculate();
  }
  });
}

// all the function call

decrement('f-minus');
decrement('s-minus');

increment('f-plus');
increment('s-plus');

manualInput('text-1');
manualInput('text-2')

remove('fr');
remove('sr');