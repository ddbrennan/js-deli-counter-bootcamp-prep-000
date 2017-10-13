function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var customer = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${customer}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (katzDeliLine) {
  if [katzDeliLine].length > 0 {
    var line = 'The line is currently: '
    for (let i = 0; i < katzDeliLine.length; i++) {
      line = line + '${i+1}. ${katzDeliLine[i]}'
    }
    return line
  } else {
  return "The line is currently empty."
  }
}
