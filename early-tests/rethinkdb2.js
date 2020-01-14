r = require('rethinkdb')
const turnLightOn = require('./turnLightOn')

var connection = null;

async function startDB() {
  let connect = await r.connect( {host: 'localhost', port: 28016}, function(err, conn) {
      if (err) throw err;
      connection = conn;
      console.log('here');
      console.log(connection);
  })
  create()
}

function create() {
  r.table('authors').update({type: "a big deal"}).
    run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
    });
}

function insert() {
  r.table('authors').insert([
    { name: "William Adama", tv_show: "Battlestar Galactica",
      posts: [
        {title: "Decommissioning speech", content: "The Cylon War is long over..."},
        {title: "We are at war", content: "Moments ago, this ship received word..."},
        {title: "The new Earth", content: "The discoveries of the past few days..."}
      ]
    },
    { name: "Laura Roslin", tv_show: "Battlestar Galactica",
      posts: [
        {title: "The oath of office", content: "I, Laura Roslin, ..."},
        {title: "They look like us", content: "The Cylons have the ability..."}
      ]
    },
    { name: "Jean-Luc Picard", tv_show: "Star Trek TNG",
      posts: [
        {title: "Civil rights", content: "There are some words I've known since..."}
      ]
    }
]).run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
})
}

function run() {
  r.table('authors').changes().run(connection, function(err, cursor) {
    if (err) throw err;
    cursor.each(function(err, row) {
        if (err) throw err;
        console.log(JSON.stringify(row, null, 2));
        if (row.new_val.type) {
          turnLightOn()
        }
    });
});
}

startDB()
