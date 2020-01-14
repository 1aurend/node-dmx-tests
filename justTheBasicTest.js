const DMX = require('./dmx/index.js')

const dmx = new DMX();

const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')
// console.log(universe);


const red = {1: 0, 2: 0, 3: 0, 4: 0, 5: 255, 6: 0}
const green = {1: 0, 2: 255, 3: 0}
const blue = {1: 0, 2: 0, 3: 255}

function updateUniverse(color) {
  console.log(color);
  dmx.update('testUniverse', color)
}

// setTimeout(updateUniverse, 1000, green)
// setTimeout(updateUniverse, 2000, red)
// setTimeout(updateUniverse, 3001, red)

// let counter = 0
setInterval(() => {
  // let colors = [red, green, blue]
  updateUniverse(red)
  // counter = counter === 2 ? 0 : ++counter
  // console.log(counter);
}, 1000);


// setInterval(() => {
//   universe.update({1: 255, 2: 255, 3: 0});
// }, 3000);
