function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var n = katzDeliLine.length
  var greeting = 'Welcome, ${name}. You are number ${n} in line.'
  return greeting
}
