const dobInput = document.querySelector('#date-of-birth');
const luckyNumberInput = document.querySelector('#lucky-number');
const btn = document.querySelector('.btn');
const outputBlock = document.querySelector('.block__output');

const check = () => {
  const dob = dobInput.value;
  console.log(dob);
  console.log(typeof dob);
  const sum = getSum(dob);
  // console.log('sum:', sum);
  if (dob && luckyNumberInput.value) {
    checkIfDivisible(sum, luckyNumberInput.value);
  } else {
    outputBlock.innerText = 'please enter values in the fields';
  }
};

const checkIfDivisible = (sum, luckyNumber) => {
  if (sum % luckyNumber === 0) {
    outputBlock.innerText = 'Your Birthday is lucky! 😁';
  } else {
    outputBlock.innerText = 'Your Birthday is not lucky 🙄';
  }
};

const getSum = (dob) => {
  dob = dob.replaceAll('-', '');
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
};

btn.addEventListener('click', () => check());
