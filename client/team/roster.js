Template.tRoster.cPlayer = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tRoster.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tRoster.cPlayers = function() {
  return Players.find({
    gameStatus: "sub"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tRoster.cPlayersOff = function() {
  return Players.find({
    gameStatus: "out"
  }, {
    sort: {
      firstName: 1
    }
  });
};

Template.tRoster.helpers({
  haveSubs: function() {
    if (Players.find({
      gameStatus: "sub"
    }).count() > 0) {
      return true;
    }
  },
  missingPlayers: function() {
    if (Players.find({
      gameStatus: "out"
    }).count() > 0) {
      return true;
    }
  },
  moneyOwed: function(evt, tmpl) {
    var totalFeesStillOwed = this.seasonFeeOwed - this.seasonFeePaid;
    if (totalFeesStillOwed > 0) {
      return totalFeesStillOwed;
    }
  }

});

Template.tRoster.events({
  'click .remove-sub': function(evt, tmpl) {
    Session.set('sPlayerId', this._id);
    removePlayer();
    Session.set('sPlayerId', null);
  },
  'click .edit-sub': function(evt, tmpl) {
    // need access to session
    Session.set('sPlayerId', this._id);
    $("modal-id");
  }
});

var removePlayer = function() {
  Players.remove({
    _id: Session.get('sPlayerId')
  });
};
