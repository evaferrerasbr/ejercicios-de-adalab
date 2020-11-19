function paddingLeft(string, expLength, paddingValue) {
  for (let i = 0; i <= string.length; i++) {
    if (string.length < expLength) {
      string = string = paddingValue + string;
    }
  }
  return string;
}

module.exports = paddingLeft;
