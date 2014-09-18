
Template.tStarting.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tStarting.cStarters = function() {
  return Players.find({
    gameStatus: "starting"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tStarting.events({
  'click .remove-starter': function(evt, tmpl) {
    Session.set('sPlayerId', this._id);
    removePlayer();
    Session.set('sPlayerId', null);
  }
});

var removePlayer = function() {
  Players.remove({
    _id: Session.get('sPlayerId')
  });
};