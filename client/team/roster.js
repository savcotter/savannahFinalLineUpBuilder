Template.tRoster.players = function() {
  return Players.find({gameStatus:"sub"});
};

Template.tRoster.helpers({
  haveSubs: function () {
    if (Players.find({gameStatus:"sub"}).count() > 0) {
      return true;
    }
  }
});