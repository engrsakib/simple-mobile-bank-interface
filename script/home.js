// daisy UI
const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('data-theme', 'acid');

const addAmount = document.getElementById("add-amount");
const addPin = document.getElementById("add-pin");
const addBtn = document.getElementById("button-add");
const currentTaka = document.getElementById('current-taka');


// add money
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
    let taka = 24910;
  const addedTaka = Number(addAmount.value);
  const addedPin = addPin.value;
  if (addedPin === "0123") {
    taka += addedTaka;
    currentTaka.innerText = taka;
    console.log(addedTaka);
  } else {
    alert("something wrong please try again");
  }
});
