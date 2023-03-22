// Created by: Bonnie Z
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function CalculateClicked() {
  // input
  const Height = parseInt(document.getElementById('Height').value)
  const Base = parseInt(document.getElementById('Base').value)

  // process
  const area = (Height * Base) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
