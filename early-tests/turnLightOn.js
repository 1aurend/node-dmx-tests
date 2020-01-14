const DMX = require('dmx')
const dmx = new DMX()
//initialize the dmx universe
const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')

//a quick fix so we can switch between on and off
// but actually... create a global so we can track whether to turn light on or off. this is ultimately bad; this tracking belongs in a database or in req.
let lightsOn = false

/**
 * turnLightOn - Sends dmx output to turn all lights in the universe on to white light. Uses setInterval to ensure that the signal is received by the lights and stops sending after 1 second.
 *
 * @return {type}  null
 */
function turnLightOn(channelValues) {
  // console.log(`channelValues coming from db: ${JSON.stringify(channelValues, null, 2)}`)
  if (!lightsOn) {
    const dmxInterval = setInterval(() => {
      console.log('pretend we turned on the light') /*use this for testing without dmx adapter*/
      universe.update({9: 255, 13: 255})
      lightsOn = true
      }, 100)
    setTimeout(() => clearInterval(dmxInterval), 200)
  } else {
    const dmxInterval = setInterval(() => {
      console.log('pretend we turned off the light') /*use this for testing without dmx adapter*/
      universe.updateAll(0)
      lightsOn = false
      }, 100)
    setTimeout(() => clearInterval(dmxInterval), 200)
  }
}

module.exports = turnLightOn
