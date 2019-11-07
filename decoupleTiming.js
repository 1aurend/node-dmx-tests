const DMX = require('dmx')
const dmx = new DMX();
const universe = dmx.addUniverse('testUniverse', 'dmxking-ultra-dmx-pro', '/dev/tty.usbserial-6A009092')
const ani = dmx.animation
let animations1 = []
let animations2 = []


const rgb = {
  LIGHT1: [{1: 0, 2: 255, 3: 255}, {1: 255, 2: 0, 3: 255}, {1: 255, 2: 0, 3: 0}],
  LIGHT2: [{5: 255, 6: 0, 7: 255}, {5: 0, 6: 255, 7: 255}, {5: 0, 6: 255, 7: 0}]
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

for (let i = 0; i < 2; i++) {
  let animation = new ani()
  animation.add(rgb.LIGHT1[i], 500, {easing: 'outQuint'})
  // animation.options = animation.options ? animation.options : { easing: '' }
  // animation.options.easing = 'linear'
  animations1.push(animation)
}
// animations1.push(new ani().delay(1000).add(rgb.LIGHT1[2], 500, {easing: 'outQuint'}))

let counter1 = 0
setInterval(() => {
  let modInt = counter1%2
  animations1[modInt].run(universe)
  counter1++
}, 1000)


for (let j = 0; j < 2; j++) {
  let animation = new ani()
  animation.add(rgb.LIGHT2[j], 500, {easing: 'inQuint'})
  // animation.options = animation.options ? animation.options : { easing: '' }
  // animation.options.easing = 'linear'
  animations2.push(animation)
}

let counter2 = 0
setInterval(() => {
  let modInt = counter2%2
  animations2[modInt].run(universe)
  counter2++
}, 1000)




// function updateUniverse(color) {
//   dmx.updateAll('testUniverse', color)
//   console.log(`turned off lights`);
// }
//
// // setTimeout(updateUniverse, 1000, green)
//
//
//
// let animation = new A()
// setInterval(() => {
//   let colors = [one, two, three]
//   // updateUniverse(colors[counter])n
//   animation.add(colors[counter], 2000).run(universe, stop);
//   console.log(`counter: ${counter}, color: ${colors[counter]}`);
//   counter = counter === 2 ? 0 : ++counter
// }, 3000);
//
// function stop() {
//   console.log(`running stop()`);
//   animation.stop()
//   updateUniverse(0)
// }

// setInterval(() => {
//   universe.update({1: 255, 2: 255, 3: 0});
// }, 3000);
