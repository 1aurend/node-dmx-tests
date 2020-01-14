r = require('rethinkdb')
const simpleLightOn = require('./test')

var connection = null

async function connectToDB() {
  let connect = await r.connect( {host: 'localhost', port: 28015, db: 'dmx'}, function(err, conn) {
      if (err) throw err
      connection = conn
      console.log(connection)
  })
  // createTable()
  // insertLight()
  run()
}

function createTable() {
  r.db('dmx').tableCreate('simpleUniverse').run(connection, function(err, result) {
      if (err) throw err
      console.log(JSON.stringify(result, null, 2))
  })
}

function insertLight() {
  r.table('simpleUniverse').insert([
    { name: 1,
      type: "DMX Light",
      channels: [
        {1: 0},
        {2: 0},
        {3: 0}
      ]
    },
    { name: 2,
      type: "DMX Light",
      channels: [
        {5: 0},
        {6: 0},
        {7: 0}
      ]
    },
    { name: 3,
      type: "DMX Light",
      channels: [
        {9: 0},
        {10: 0},
        {11: 0}
      ]
    }
]).run(connection, function(err, result) {
    if (err) throw err
    console.log(JSON.stringify(result, null, 2))
})
}

async function run() {
  const cursor = await r.table('simpleUniverse').changes().run(connection)
  if (!cursor) {
    throw Error
  }
  cursor.each((err, row) => {
    if (err) {
      throw err
    }
    const dmxUpdate = row.new_val.channels
    console.log(JSON.stringify(dmxUpdate))
    simpleLightOn(dmxUpdate)
  })

//   cursor.eachAsync(function (row) {
//     var ok = row
//     if (!ok) {
//         throw new Error('Bad row: ' + row);
//     }
// }).then(function () {
//     console.log('done processing');
// }).catch(function (error) {
//     console.log('Error:', error.message);
// });

//   cursor.eachAsync(function (row) {
//     console.log(JSON.stringify(row, null, 2));
//     // rowFinished();
// }, function (final) {
//     // the 'final' argument will only be defined when there is an error
//     console.log('Final called with:', final);
// });

  // cursor.eachAsync(function(row) {
  //   channelValues = channelValues.concat(row.new_val.channels)
  //   console.log(JSON.stringify(channelValues, null, 2))
  // }, function(final) {
  //     console.log('here');
  //     // turnLightOn(channelValues)
  // })
  //
  //
  // r.table('simpleUniverse').changes().run(connection, function(err, cursor){
  //     if (err) {
  //       return
  //     }
  //     cursor.on('data', function(message){
  //       console.log('a message: ' + JSON.stringify(message, null, 2));
  //     })
  //   }
  // )
}

connectToDB()
