const outputTemp = () => {
  let from = document.getElementById("fromTemp").value;
  let to = document.getElementById("toTemp").value;
  // C - C
  if (from == "C" && to == "C") {
    let input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value = input
  } // C -  F
  else if (from == "C" && to == "F") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input) * (9 / 5) + 32 ;
  } // C -  K
  else if (from == "C" && to == "K") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input) + 273.15 ;
  } // F - F
  if (from == "F" && to == "F") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input) ;
  } // F - C
  else if (from == "F" && to == "C") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      (parseFloat(input) - 32) * (5 / 9) ;
  } // F - K
  else if (from == "F" && to == "K") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      (parseFloat(input) + 459.67) * (5 / 9) ;
  } // K - K
  else if (from == "K" && to == "K") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input)  ;
  } // K - C
  else if (from == "K" && to == "C") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input) - 273.15  ;
  } // K - F
  else if (from == "K" && to == "F") {
    const input = document.getElementById("inputVal").value;
    document.getElementById("outputVal").value =
      parseFloat(input) * (9 / 5) - 459.67;
  }
};

const resetVal = () => {
  const input = document.getElementById("inputVal");
  const output = document.getElementById("outputVal");
  if (input.value != "" || output.value != "") {
    input.value = "";
    output.innerHTML = "";
  }
};
