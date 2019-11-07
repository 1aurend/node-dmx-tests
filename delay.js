const DMX = require('dmx')
const dmx = new DMX();
const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')
const ani = dmx.animation
let animations1 = []
let animations2 = []


const rgb = {
  LIGHT1: [{1: 0, 2: 0, 3: 0}, {1: 255, 2: 255, 3: 255}, {1: 255, 2: 0, 3: 0}],
  LIGHT2: [{5: 0, 6: 0, 7: 0}, {5: 255, 6: 255, 7: 255}, {5: 0, 6: 255, 7: 0}]
}

// const yellow = {1: 255, 2: 255, 3: 0}
// const aqua = {1: 0, 2: 255, 3: 255}
// const fuschia = {1: 255, 2: 0, 3: 255}
// const one = {1: 255, 2: 255, 3: 0, 5: 0, 6: 255, 7: 255, 9: 255, 10: 0, 11: 255} //yellow, blue, pink
// const three = {1: 0, 2: 255, 3: 255, 5: 255, 6: 0, 7: 255, 9: 255, 10: 255, 11: 0} //blue, pink, yellow
// const two = {1: 255, 2: 0, 3: 255, 5: 255, 6: 255, 7: 0, 9: 0, 10: 255, 11: 255} //pink, yellow, blue
// const _one = {1: 255, 2: 255, 3: 255, 5: 0, 6: 0, 7: 0} //yellow, blue, pink
// const _two = {1: , 2: 255, 3: 255, 5: 255, 6: 255, 7: 255}
// const colors = [ _one, _two ]

function done() { console.log('DONE'); }

const x = new ani()
  .add({1: 255, 6: 110, 7: 255, 8: 10}, 1200)
  .delay(1000)
  .add({1: 0}, 600)
  .add({1: 255}, 600)
  .add({5: 255, 6: 128}, 1000)
  .add({1: 0}, 100)
  .add({1: 255}, 100)
  .add({1: 0}, 200)
  .add({1: 255}, 200)
  .add({1: 0}, 100)
  .add({1: 255}, 100)
  .add({1: 0})
  .delay(50)
  .add({1: 255})
  .delay(50)
  .add({1: 0})
  .delay(50)
  .add({1: 255})
  .delay(50)
  .add({1: 0})
  .delay(50)
  .add({1: 255})
  .delay(50)
  .add({2: 255}, 6000)
  .delay(200)
  .add({2: 0});

const y = new ani()
  .add({9: 255}, 10000);

x.run(universe, done);
y.run(universe, done);
