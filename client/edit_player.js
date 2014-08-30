Template.tEditPlayer.player = function() {
    return Players.findOne({
        _id: Session.get('sPlayerId')
    });
};

Template.tEditPlayer.events({
    'click .remove-name': function(evt, tmpl) {
        // increment the counter when button is clicked
        Session.set('sPlayerId', tmpl.data._id);
        removePlayer();
        // console.log(Session.get('sPlayerId'));
    }
});

var removePlayer = function() {
  Players.remove({_id:Session.get('sPlayerId')});
  // console.log('test');
};
