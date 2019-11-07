const DMX = require('dmx')

const dmx = new DMX()


const yellow = {1: 255, 2: 255, 3: 0}
const fuschia = {1: 255, 2: 0, 3: 255}
const aqua = {1: 0, 2: 255, 3: 255}


function changeColor(universe, color) {
  console.log('here')
  console.log(JSON.stringify(universe))
  universe.update(color)
  console.log(JSON.stringify(universe));
  return(universe)
}

async function makeUniverse(changeColor) {
  const universe = await dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')
  return changeColor(universe, aqua)
}

function updateUniverse(color) {
  console.log(color);
  dmx.update('testUniverse', color)
}


let ourUniverse = makeUniverse(changeColor)

setTimeout(updateUniverse, 3000, yellow)
