module.exports = {
  taxCalc: function (income) {
    let tax = 0;
    if (income < 195850) {
      return (tax = 0.18 * income);
    } 
    else if (income < 305850) {
      tax = 35253 + (0.26 * (income - 195850));
      return tax;
    } 
    else if (income < 423300) {
      return (tax = 63853 + 0.31 * (income - 305850));
    } 
    else if (income < 555600) {
      return (tax = 100263 + 0.36 * (income - 423300));
    } 
    else if (income < 708310) {
        return (tax = 147891 + 0.39 * (income - 555600));
    } 
    else if (income < 1500000) {
      return (tax = 207448 + 0.41 * (income - 708310));
    } 
    else {
      return (tax = 532041 + 0.45 * (income - 1500000));
    }
  },
};
