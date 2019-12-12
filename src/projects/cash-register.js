// Define list of monetary denominations
let denominations = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 }
];

// Given a price, an amount of cash and the current register contents,
// this function provides change in specified denominations.
function checkCashRegister(price, cash, cid) {
  // Initialise result
  let result = {
    status: null,
    change: []
  };

  // Calculate total change in the register
  let changeInRegister = 0.0;
  for (let i = 0; i < cid.length; i++) {
    changeInRegister += cid[i][1];
  }
  changeInRegister = Math.round(changeInRegister * 100) / 100;
  console.log("Total change in register at start: " + changeInRegister);

  // Change owed is the cash provided less the price
  let changeOwed = cash - price;
  console.log("Change owed: " + changeOwed);

  // Handle case where change in register is exactly what is owed
  if (changeInRegister === changeOwed) {
    result.status = "CLOSED";
    result.change = cid;
    return result;
  }

  // Handle insufficient total change value in the register
  if (changeInRegister < changeOwed) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }

  // Attempt to provide exact change
  let solutionFound = false;
  for (let i = 0; i < denominations.length; i++) {
    let nameOfThisDenomination = denominations[i]["name"]
    let valueOfThisDenomination = denominations[i]["value"];

    // If handing out even one of these is more than we owe, try next denom.
    if (valueOfThisDenomination > changeOwed) {
      console.log("Skipping " + nameOfThisDenomination)
      continue;
    }

    let availableInThisDenomination = cid
      .filter( c => { return c[0] === nameOfThisDenomination })[0][1];
    console.log("Available in " + nameOfThisDenomination 
                  + " is: $" + availableInThisDenomination
                  + " which are each worth $" + valueOfThisDenomination);

    if (availableInThisDenomination === 0.0) {
      console.log("We don't have any of these.");
      continue;
    }

    let thisDenominationGiven = 0;
    while (availableInThisDenomination > 0 
      && changeOwed > 0
      && changeOwed >= valueOfThisDenomination) {
      console.log("Allocating a: " + nameOfThisDenomination);
      changeOwed -= valueOfThisDenomination;
      changeOwed = Math.round(changeOwed * 100) / 100;
      availableInThisDenomination -= valueOfThisDenomination;
      thisDenominationGiven++;
    }

    if (thisDenominationGiven > 0) {
      result.change.push([nameOfThisDenomination, 
      thisDenominationGiven * valueOfThisDenomination]);
      
      console.log("Change so far is: " + result.change 
        + ". Still owe:" + changeOwed);
    }

    if (Math.round(changeOwed * 100) / 100 == 0) {
      console.log("Solution found.")
      solutionFound = true;
      break;
    }
  }
  
  if (solutionFound) {
    result.status = "OPEN";
    console.log(result);
    return result;
  } else {
    // Handle situation where we don't have the right change
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    return result;
  }
}

module.exports = checkCashRegister;