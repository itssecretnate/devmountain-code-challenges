let rangeOfNumbers = [1, 4, 11, 2, 37, -4];
let smallestNumber = rangeOfNumbers[0];
let largestNumber = rangeOfNumbers[0];

//Go down the list of numbers in the array.
for(let i = 0; i < rangeOfNumbers.length; i++)
{
  //Find the smallest number.
  if(rangeOfNumbers[i] < smallestNumber) smallestNumber = rangeOfNumbers[i];

  //Find the largest number.
  if(rangeOfNumbers[i] > largestNumber) largestNumber = rangeOfNumbers[i];

}

console.log(`Smallest number: ${smallestNumber}. Largest number: ${largestNumber}.`);