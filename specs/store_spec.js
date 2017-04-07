var Store = require('../store.js');
var Record = require('../record.js');
var assert = require('assert');

describe('Store test:', function(){

var store;
var record1;
var record2;
var record3;
var record4;
var record5;

beforeEach(function(){
  store = new Store('Disc', 'Edinburgh');
  record1 = new  Record('Michael Jackson', 'Off the Wall', 'Pop', 10);
  record2 = new  Record('Metalica','Ride the Lightening', 'Metal', 11);
  record3 = new  Record('Green Day', 'Dookie', 'Punk', 6);
  record4 = new  Record('Beatles','Sg Peppers','Pop', 8);
  record5 = new  Record('Nirvana','In Bloom','Grunge', 9);
})

it('should be able to accept new records', function(){
      store.addRecord(record5);
      assert.strictEqual(1, store.inventory.length)
})

})