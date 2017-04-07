var Store = function(name, city) {
    this.name = name;
    this.city = city;
    this.inventory = [];
    this.balance = 0;
  }

  Store.prototype ={
    addRecord: function(record){
      this.inventory.push(record);
    },
    printDetails: function(){
      this.inventory.forEach(function(album){
        console.log('Artist:', album.artist, '\n Title:', album.title, '\n Genere:', album.genre, '\n Price:', album.price, '\n')
      })
    }

  }







  module.exports = Store;