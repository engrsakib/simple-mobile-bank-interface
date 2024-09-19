const addAmount = document.getElementById("add-amount");
const addPin = document.getElementById("add-pin");
const addBtn = document.getElementById("button-add");

// add money
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const addedTaka = addAmount.value;
  const addPin = addPin.value;

  if (addPin === "0123") {
    
  } else {
    alert("something wrong please try again");
  }
});
