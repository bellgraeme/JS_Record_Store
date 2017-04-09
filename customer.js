var Customer = function(){
  this.balance = 10;
  this.collection = [];
}

Customer.prototype = {
  buyRecord: function(store, title){
    album = store.findTitle(title);
    if(album.price <= this.balance){
      sold = store.sellRecord(title)
      this.collection.push(sold)}
      else{
        return "Sorry you can't afford this Album"
      }
    },
    totalValue: function(genre){
      var result = 0;
      if(genre === undefined){
        this.collection.forEach(function(album){
          result += album.price;
        })}
      else{
        var searchedArray = new Array;
        this.collection.forEach(function(album){
          if(album.genre === genre){
             searchedArray.push(album)} 
            })
        searchedArray.forEach(function(album){
          result += album.price
        })
      } 
      return result;
    },  
    sortByValue: function(){
      this.collection.sort(function(a, b){
        return a.price - b.price;
      })
    },
    compareCollection: function(other){
      otherValue = other.totalValue();
      myValue = this.totalValue();
      return myValue - otherValue;
    }
  }



    module.exports = Customer;