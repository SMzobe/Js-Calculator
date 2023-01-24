function calculate() {
  
  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
 
  input1 = parseFloat(input1);
  input2 = parseFloat(input2);

  var operation = document.getElementById('operation').value;
 
  var result;

  switch (operation) {
    case '+':
      result = input1 + input2;
      break;
    case '-':
      result = input1 - input2;
      break;
    case '*':
      result = input1 * input2;
      break;
    case '/':
      result = input1 / input2;
      break;
  }

  alert(result);
}
