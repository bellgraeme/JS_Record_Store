var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  details: function(){
    console.log('Artist:', this.artist, '\n Title:', this.title, '\n Genere:', this.genre, '\n Price:', this.price, '\n')
  }
}







module.exports = Record;