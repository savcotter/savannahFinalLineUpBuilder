Template.tModalPlayer.player = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};