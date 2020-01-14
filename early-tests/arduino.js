const turnLightOn = require('./turnLightOn')
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort("/dev/tty.usbmodem14101", { baudRate: 4800 })
const parser = new Readline()
  port.pipe(parser)

global.lineBefore = null
parser.on('data', line => {
  if (lineBefore == null) {
    lineBefore = line
    return
  }
  if (lineBefore == 0 && line == 1) {
    turnLightOn()
  }
}
)
