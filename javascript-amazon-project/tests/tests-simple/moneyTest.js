import {formatCurrency} from '../../scripts/utils/money.js';

console.log('test suite: formatCurrency');

//basic test case
console.log('converts cents into dollars');

if(formatCurrency(2095)==='20.95'){
  console.log('passed');
}
else{
  console.log('failed');
}

//edge case 1
console.log('works with 0');

if(formatCurrency(0)==='0.00'){
  console.log('passed');
}
else{
  console.log('failed');
}

//edge case 2
console.log('rounds up to the nearest cent 1');

if(formatCurrency(2000.5)==='20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}

//edge case 3
console.log('rounds up to the nearest cent 2');

if(formatCurrency(2000.4)==='20.00'){
  console.log('passed');
}
else{
  console.log('failed');
}