var Store = require('../store.js');
var Record = require('../record.js');
var assert = require('assert');
var Customer = require('../customer.js')

describe('Store test:', function(){

var store;
var record1;
var record2;
var record3;
var record4;
var record5;
var customer;

beforeEach(function(){
  store = new Store('Disc', 'Edinburgh');
  customer = new Customer();
  record1 = new  Record('Michael Jackson', 'Off the Wall', 'Pop', 10);
  record2 = new  Record('Metalica','Ride the Lightening', 'Metal', 11);
  record3 = new  Record('Green Day', 'Dookie', 'Punk', 6);
  record4 = new  Record('Beatles','Sg Peppers','Pop', 8);
  record5 = new  Record('Nirvana','In Bloom','Grunge', 9);
});

it('should be able to accept new records', function(){
      store.addRecord(record5);
      assert.strictEqual(1, store.inventory.length)
});

it('should be able to print out record details',
  function(){
    store.addRecord(record5);
    assert.deepEqual(['Artist: Nirvana\n Title: In Bloom\n Genere: Grunge\n Price: 9\n'], store.printDetails())
  });

it('should be able to sell record', function(){
  store.addRecord(record5);
  store.sellRecord('In Bloom');
  assert.strictEqual(9, store.balance)
});

it('should be able to report status', function(){
  store.addRecord(record5);
  store.balance = 10
  assert.deepEqual("The balance is: 10\nStock value is: 9" ,store.status())
});

it('should return all genre', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  assert.deepEqual([record1, record4], store.findGenre('Pop'))
});

it('should be able to find an album by title',function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  assert.deepEqual(record3, store.findTitle('Dookie'))
})

it('customer should be able to buy album', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  customer.buyRecord(store, 'Off the Wall')
  assert.deepEqual(record1, customer.collection[0])
})

it('customer should not be able to buy album he cant afford', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  
  assert.deepEqual("Sorry you can't afford this Album", customer.buyRecord(store, 'Ride the Lightening'))
});

it('customer able to  value of collection', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  customer.balance = 100;
  customer.buyRecord(store, 'Off the Wall')
  customer.buyRecord(store, 'Ride the Lightening')
  customer.buyRecord(store, 'Dookie')
  customer.buyRecord(store, 'Sg Peppers')
  customer.buyRecord(store, 'In Bloom')
  assert.deepEqual(44, customer.totalValue())
})

it('customer able to  value of genre', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  customer.balance = 100;
  customer.buyRecord(store, 'Off the Wall')
  customer.buyRecord(store, 'Ride the Lightening')
  customer.buyRecord(store, 'Dookie')
  customer.buyRecord(store, 'Sg Peppers')
  customer.buyRecord(store, 'In Bloom')
  assert.deepEqual(18, customer.totalValue('Pop'))
})

it('customer able sort by value of genre', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  customer.balance = 100;
  customer.buyRecord(store, 'Off the Wall')
  customer.buyRecord(store, 'Ride the Lightening')
  customer.buyRecord(store, 'Dookie')
  customer.buyRecord(store, 'Sg Peppers')
  customer.buyRecord(store, 'In Bloom')
  customer.sortByValue()
  assert.deepEqual(record3, customer.collection[0])
})


it('customer able compare his collection', function(){
  store.addRecord(record1);
  store.addRecord(record2);
  store.addRecord(record3);
  store.addRecord(record4);
  store.addRecord(record5);
  customer.balance = 100;
  customer.buyRecord(store, 'Off the Wall')
  customer.buyRecord(store, 'Ride the Lightening')
  customer.buyRecord(store, 'Dookie')
  customer.buyRecord(store, 'Sg Peppers')
  customer.buyRecord(store, 'In Bloom')
  customer2 = new Customer();
  customer.balance = 100;
  customer2.buyRecord(store, 'Dookie')
  customer2.buyRecord(store, 'Sg Peppers')
  customer2.buyRecord(store, 'In Bloom')
  assert.deepEqual(21, customer.compareCollection(customer2))
})



















})