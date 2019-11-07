const DMX = require('dmx')

const dmx = new DMX();
const A = dmx.animation

const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')
console.log(JSON.stringify(universe, null, 3));


// const one = {1: 255, 2: 255, 3: 0, 5: 0, 6: 255, 7: 255, 9: 255, 10: 0, 11: 255} //yellow, blue, pink
// const three = {1: 0, 2: 255, 3: 255, 5: 255, 6: 0, 7: 255, 9: 255, 10: 255, 11: 0} //blue, pink, yellow
// const two = {1: 255, 2: 0, 3: 255, 5: 255, 6: 255, 7: 0, 9: 0, 10: 255, 11: 255} //pink, yellow, blue

const one = {1: 255, 2: 255, 3: 0} //yellow, blue, pink
const three = {1: 0, 2: 255, 3: 255} //blue, pink, yellow
const two = {1: 255, 2: 0, 3: 255} //pink, yellow, blue


function updateUniverse(color) {
  dmx.updateAll('testUniverse', color)
  console.log(`turned off lights`);
}

// setTimeout(updateUniverse, 1000, green)
// setTimeout(updateUniverse, 2000, blue)
// setTimeout(updateUniverse, 3001, red)

let counter = 0
let animation = new A()
setInterval(() => {
  let colors = [one, two, three]
  // updateUniverse(colors[counter])n
  animation.add(colors[counter], 2000).run(universe, stop);
  console.log(`counter: ${counter}, color: ${colors[counter]}`);
  counter = counter === 2 ? 0 : ++counter
}, 3000);

function stop() {
  console.log(`running stop()`);
  animation.stop()
  updateUniverse(0)
}

// setInterval(() => {
//   universe.update({1: 255, 2: 255, 3: 0});
// }, 3000);
