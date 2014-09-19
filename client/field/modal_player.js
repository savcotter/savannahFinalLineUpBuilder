Template.tModalPlayer.cPlayer = function() {
  return Players.findOne({_id:Session.get("sPlayerId")});
};

Template.tModalPlayer.sPlayerId = function() {
  Session.get("sPlayerId");
};

Template.tModalPlayer.events({
 'click .save-changes':function(evt, tmpl) {
  var firstName = tmpl.find('.first-name').value;
  var fieldPosition = tmpl.find('.field-position').value;
  updatePlayer(firstName, fieldPosition);
  $("#modal-id").modal("hide");
  Session.set('sPlayerId', null);
 }
});

var updatePlayer = function(firstName, fieldPosition) {
  Players.update(Session.get("sPlayerId"), {$set: {firstName: firstName, fieldPosition: fieldPosition}});
  return true;
}

var removeProject =  function() {
  Projects.remove({_id:Session.get('editing_project')});
};