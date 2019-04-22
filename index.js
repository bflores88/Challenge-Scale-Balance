'use strict';

function scaleBalance(strArr) {
  let currentScale = JSON.parse(strArr[0]);
  let weights = JSON.parse(strArr[1]);
  let left = currentScale[0];
  let right = currentScale[1];
  let addedWeights = [];

  //checks if starting weights are equal
  if (left === right) {
    return addedWeights.toString();
  }

  //add two weighs to one side
  for (let a = 0; a < currentScale.length; a++) {
    let oneSide = currentScale[a];

    for (let b = 0; b < weights.length; b++) {
      let weight1 = weights[b];

      for (let c = 0; c < weights.length; c++) {
        if (b !== c) {
          let weight2 = weights[c];
          let addTwo = oneSide + weight1 + weight2;

          if (oneSide === left) {
            if (addTwo === right) {
              addedWeights.push(weight1);
              addedWeights.push(weight2);
              return addedWeights.sort().join(',');
            }
          } else {
            if (addTwo === left) {
              addedWeights.push(weight1);
              addedWeights.push(weight2);
              return addedWeights.sort().join(',');
            }
          }
        }
      }
    }
  }

  //add weights to both sides
  for (let i = 0; i < weights.length; i++) {
    let leftCheck = left + weights[i];

    for (let j = 0; j < weights.length; j++) {
      if (i !== j) {
        let rightCheck = right + weights[j];

        if (leftCheck === rightCheck) {
          addedWeights.push(weights[i]);
          addedWeights.push(weights[j]);
        }
      }
    }
  }

  if (addedWeights.length === 0) {
    return 'not possible';
  } else {
    return addedWeights.sort().join(',');
  }
}

module.exports = scaleBalance;