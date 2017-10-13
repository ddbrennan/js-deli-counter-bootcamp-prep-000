function takeANumber(katzDeliLine, name) {
  katzDeliLine.push([name])
  var n = katzDeliLine.length
  return 'Welcome, ${name}. You are number ${n} in line.'
}
