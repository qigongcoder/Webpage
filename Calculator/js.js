
let previous_value = null;
let current_value = 0;
let operstate = null;
let pre_but_press = null;
let dec_state = false;
document.getElementById('display').innerHTML = current_value;

function press(num) {
  if (pre_but_press == 'equ') {
    previous_value = null;
    operstate = null;
    pre_but_press = 'num';
    current_value = num;
    document.getElementById('display').innerHTML = current_value;
  } else {
    if (dec_state == false) {
      current_value = num + current_value * 10;
      document.getElementById('display').innerHTML = current_value;
    } else {
      current_value = current_value + (Math.pow(10, -dec_state)) * num;
      document.getElementById('display').innerHTML = current_value.toFixed(dec_state);
      dec_state++;
    }
    pre_but_press = 'num';
  }
}

function decimal() {
  console.log(dec_state);
  if (dec_state == false) {
    dec_state = 1;
  }
  console.log(dec_state);
  return;
}

function operation(oper) {
  dec_state = false;

  if (pre_but_press == 'oper') {
    operstate = oper;
    return;
  }


  if (pre_but_press == null) {
    return;
  }

  if (previous_value != null && current_value != null) {
    evaluate();
    previous_value = null;
    pre_but_press = 'oper';
  }

  previous_value = current_value;
  current_value = 0;

  operstate = oper;
  pre_but_press = 'oper';

  return;
}

function equals() {
  dec_state = false;

  if (pre_but_press == 'equ' || previous_value == null) {
    return;
  }
  if (pre_but_press == 'oper') {
    current_value = previous_value;
    document.getElementById('display').innerHTML = current_value;
    previous_value = null;
    //          current_value=0;
    operstate = null;
    pre_but_press = 'equ';
    return;
  }
  evaluate();
  previous_value = null;
  pre_but_press = 'equ';
  document.getElementById('display').innerHTML = current_value;
}

function blank() {
  previous_value = null;
  current_value = 0;
  operstate = null;
  pre_but_press = null;
  dec_state = false;
  document.getElementById('display').innerHTML = current_value;
}

function neg() {
  if (pre_but_press == 'oper') {
    return;
  }
  current_value = -1 * current_value;
  document.getElementById('display').innerHTML = current_value;
}

function evaluate() {
  switch (operstate) {
    case 'add':
      current_value = current_value + previous_value;
      break;
    case 'sub':
      current_value = previous_value - current_value;
      break;
    case 'mul':
      current_value = current_value * previous_value;
      break;
    case 'div':
      current_value = previous_value / current_value;
      break;
    default:
      alert("Calculator crashed");
  }
  return;
}
