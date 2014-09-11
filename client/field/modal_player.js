Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tModalPlayer.events({
 'click .save-changes':function(evt, tmpl) {
  var firstName = tmpl.find('.first-name').value;
  updatePlayer(firstName);
  $("#modal-id").modal("hide");
  Session.set('sPlayerId', null);
 }
});

var updatePlayer = function(firstName) {
  Players.update(Session.get("sPlayerId"), {$set: {firstName: firstName}});
  return true;
}

var removeProject =  function() {
  Projects.remove({_id:Session.get('editing_project')});
};