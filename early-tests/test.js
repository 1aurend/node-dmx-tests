const DMX = require('dmx')
const dmx = new DMX()
//initialize the dmx universe
const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')


function simpleLightOn(channelValues) {
  const dmxInterval = setInterval(() => {
    universe.update(channelValues)
    }, 100)
  setTimeout(() => clearInterval(dmxInterval), 200)
}

module.exports = simpleLightOn
