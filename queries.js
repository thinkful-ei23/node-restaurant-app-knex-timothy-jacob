'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select
// knex
// .select()
// .from('restaurants')
// .limit(2)
// .debug(true)
// .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .select()
//   .table('restaurants')
//   .then(results => console.log(JSON.stringify(results, null)));
knex
  .select()
  .table('restaurants')
  .where('cuisine', 'Italian')
  .then(results => console.log(JSON.stringify(results, null)));
