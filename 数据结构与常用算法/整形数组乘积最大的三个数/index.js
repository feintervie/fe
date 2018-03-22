var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    arrayElement = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = arrayElement; x > arrayElement - 3; x--) {
      product1 = product1 * sortedArray[x];
  }
  product2 = sortedArray[0] * sortedArray[1] * sortedArray[arrayElement];

  if (product1 > product2) {return product1;}

  return product2;
}
