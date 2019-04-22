'use strict';

function scaleBalance(strArr) {
  let currentScale = JSON.parse(strArr[0]);
  let weights = JSON.parse(strArr[1]);
  let left = currentScale[0];
  let right = currentScale[1];
  let addedWeights = [];

  if (left === right) {
    return addedWeights.toString();
  }

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