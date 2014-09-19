Template.tStarters.cStarters = function() {
  return Players.find({
    gameStatus: "starting"
  }, {
    sort: {
      firstName: 1
    }
  });
};