// Code your solution in this file!
let scuberHQ = 42; //Scuber HQ at 42nd Street
let distanceFromHqInBlocks = function (pickupLocation) {
  console.log(Math.abs(scuberHQ - pickupLocation));
  return Math.abs(scuberHQ - pickupLocation);
};
// distanceFromHqInBlocks(34);

function distanceFromHqInFeet(blockNumber) {
  console.log(distanceFromHqInBlocks(blockNumber) * 264);
  return distanceFromHqInBlocks(blockNumber) * 264;
}
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    console.log(destination - start) * 264;
    return (destination - start) * 264;
  } else {
    console.log(start - destination) * 264;
    return (start - destination) * 264;
  }
}
// distanceFromHqInFeet();

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
calculatesFarePrice(34, 24);
