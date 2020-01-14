const DMX = require('dmx')

const dmx = new DMX();

const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')


const red = {1: 255, 2: 255, 3: 0, 5: 0, 6: 255, 7: 255, 9: 255, 10: 0, 11: 255}
const green = {1: 0, 2: 255, 3: 255, 5: 255, 6: 0, 7: 255, 9: 255, 10: 255, 11: 0}
const blue = {1: 255, 2: 0, 3: 255, 5: 255, 6: 255, 7: 0, 9: 0, 10: 255, 11: 255}

function updateUniverse(color) {
  console.log(color);
  dmx.update('testUniverse', color)
}

// setTimeout(updateUniverse, 1000, green)
// setTimeout(updateUniverse, 2000, blue)
// setTimeout(updateUniverse, 3001, red)

let counter = 0
setInterval(() => {
  let colors = [red, green, blue]
  updateUniverse(colors[counter])
  counter = counter === 2 ? 0 : ++counter
  console.log(counter);
}, 1000);


// setInterval(() => {
//   universe.update({1: 255, 2: 255, 3: 0});
// }, 3000);
