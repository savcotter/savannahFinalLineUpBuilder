
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
  'click .remove-player': function(evt, tmpl) {
    Session.set('sPlayerId', this._id);
    removePlayer();
    Session.set('sPlayerId', null);
  },
  'click .edit-player': function(evt, tmpl) {
    // need access to session
    Session.set('sPlayerId', this._id);
    $("#modal-id").modal("show")
  }
});

var removePlayer = function() {
  Players.remove({
    _id: Session.get('sPlayerId')
  });
};