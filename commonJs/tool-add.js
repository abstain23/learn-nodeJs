const tools = {
  add:(...numbers) => {
    let sum = 0
    for (let number in numbers) {
      sum += numbers[number];
    }
    return sum;
  }
}

module.exports = tools