// Business logic function (used for testing)
function calculateInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// UI function (used by HTML)
function calculate() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById("result").innerText = "Please enter valid numbers";
    return;
  }

  const interest = calculateInterest(principal, rate, time);
  const total = principal + interest;

  document.getElementById("result").innerText =
    `Interest: ${interest}, Total Amount: ${total}`;
}

// Export ONLY for Jasmine testing (Node.js)
if (typeof module !== "undefined") {
  module.exports = { calculateInterest };
}

