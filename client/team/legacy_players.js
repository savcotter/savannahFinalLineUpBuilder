Template.tLegacyPlayers.cLegacyPlayers = function() {
  return Players.find({
    gameStatus: "legacy"
  }, {
    sort: {
      firstName: 1
    }
  });
};