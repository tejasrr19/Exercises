
/**
 * Singleton for all trees
 *
 * @return {void}
 */
var singleton = function(){

  function initalize(){

    function getTrees(){
      //get all trees
    }

    return {
      trees: getTrees
    };
  }

  function getInstance(){
    if( ! instance ) {
      instance = new initializeNewModule();
    }
    return instance;
  }

  return {
    getInstance : getInstance
  };
};

//usage
singleton.getInstance().trees();





//Meteor Specific
Trees = new Meteor.Collection('trees');


if (Meteor.isServer) {
  Meteor.startup(seed);

  Meteor.publish('trees', function () {
    return Trees.find({});
  });
}



if(Meteor.isClient){
  Meteor.subscribe('trees');

  allTrees = {
    inst: null,

    onlyOnce: function(){
      //make sure of only one instance
    },

    update: function(){
      //update tree collection
    },

    observeChanges: function(){
      //observe changes to mongo
    }
  }
}
