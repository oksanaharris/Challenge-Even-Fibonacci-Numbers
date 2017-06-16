/*jshint esversion: 6 */

/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function _sumFibs( maxFibValue ) {
  var sum = 0;
  // var fibArr = [0,1];
  // var evenFibArr = [];

  let num1 = 0;
  let num2 = 1;
  let num3 = 0;

  while (num3 <= maxFibValue) {
    num3 = num1 + num2;
    // console.log(num3);
    if (num3 <=maxFibValue && num3 % 2 === 0){
      // evenFibArr.push(num3);
      sum += num3;
    }
    // fibArr.push(num3);
    num1 = num2;
    num2 = num3;
  }

  // console.log(fibArr);
  // console.log(evenFibArr);
  // // sum = evenFibArr.reduce( (prev, curr) => prev + curr );
  // console.log(sum);
  return sum;
}

console.log(_sumFibs(100));

// bonus round

function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  // var fibArr = [0,1];

  let num1 = 0;
  let num2 = 1;
  let num3 = 0;
  
  // console.log(num1, num2, num3);

  while (num3 < maxFibValue) {
    num3 = num1 + num2;
    // console.log(num3);
    if (num3 < maxFibValue){
      highest = num3;
    }
    // fibArr.push(num3);
    num1 = num2;
    num2 = num3;
  }
  // console.log(fibArr);
  // console.log(highest);

  return highest;
}

function _findNth (n){
  var fibArr = [0,1];

  var atIndexN;

  for (let i = 2; i <= n; i++){
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }

  // console.log (fibArr);

  atIndexN = fibArr[n];

  return atIndexN;
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */

module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber,
  findNth : _findNth
};