export const add = (a, b) => a + b;

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

export const isValidVoter = (age) => {
  if (age < 18) {
    return "below 18";
  }

  if (age === 18) {
    return "just 18";
  }
  
  if (age > 18) {
    return "above 18";
  }
};
