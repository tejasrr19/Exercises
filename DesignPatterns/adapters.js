/**
 * A simple adapter to retreive and add to localStorage
 */
var TreeAdapter = {
  findAll: function(){
    var trees = localStorage.getItem('trees');

    if(trees){
      trees = JSON.parse(trees);
    }
  },

  save: function(tree){
    tree =JSON.stringify(tree);
    localStorage.setItem('cart', tree);
  }
}
