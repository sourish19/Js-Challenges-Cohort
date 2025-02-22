function checkVotingEligibility(age) {
  if (typeof age === "number") {
    return age >= 18 ? "Eligible" : "Not Eligible";
  } else {
    return "Invalid number";
  }
}

const age = 17;

console.log(checkVotingEligibility(age));
