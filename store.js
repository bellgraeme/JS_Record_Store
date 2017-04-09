var _ = require('lodash')

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
      var details = this.inventory.map(function(album){
        return 'Artist: '  + album.artist + '\n Title: ' +album.title + '\n Genere: ' + album.genre + '\n Price: ' + album.price + '\n';
      })
      return details;
    },

    sellRecord: function(title){
      var album = this.findTitle(title)
      var result  = _.remove(this.inventory, function(elem){
        if(elem.title === title ){
          this.balance += elem.price
        }
      }.bind(this))
      return album;
    },

    status: function(){
      var value = 0;
      this.inventory.forEach(function(elem){
        value += elem.price
      })
      return "The balance is: " + this.balance + "\nStock value is: " + value
    },

    findGenre: function(genre){
      var result = this.inventory.filter(function(album){
        if(album.genre === genre){
          return album
        }
      })
      return result
    },

    findTitle: function(title){
      var result = this.inventory.filter(function(album){
        if(album.title === title){
          return album
        }
      })
      return result[0]
    }


  }


  module.exports = Store;