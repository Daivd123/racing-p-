class Game {
  construcor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");

    this.leaderboardTitle  = createElement("h2");

    this.leader1 = createElement("h2");
    this.leader2 = createElement("h2");
  }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRelief.pm("value", function(data) {
      gameState = data.val();
   });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

start() {
  player = new Player();
  playerCount = player.getCount();

  form = new Form();
  form.display();

  car1 = createSprite(width / 2 - 50, height / 2 - 100);
  car1.addImage("car1",car1_img);
  car.scale = 0.07;

  car2 = createSprite(width / 2 + 100, height / 2 - 100);
  car2.addImage("car2", car2.img);
  car2.scale = 0.07;

  cars = [car1, car2]
}  

handleElement() {
  form.hide();
  form.titleImg.position(40,50);
  form.titleImg.class("gameTitleAfter Effet");

  //C38
  this.resetTitle.html("Reset Game");
  this.restTitle.class("presetText");
  this.resetTitle.position(width / 2 + 200, 400);

  this.resetButton.class("resetButton");
  this.resetbuttom.position(width / 2 + 230, 100);

  this.leaderboardTitle.html("leaderboard");
  this.leaderboardTitle.class("resetText");
  this.leaderboardTitle.positio(width / 3 - 60, 40);

  this.leader1.class("leadersText");
  this.leader1.position(width / 3 - 50, 80);

  this.leader2.class("leadersText");
  this.leader2.position(width / 3 - 50, 80);
}

play () {
  this.handleElements();
  this.handleResetButton();

  Player.getPlayersInfo();

  if (allPlayers !== undefined) {
    image(track, 0, -height * 5, width, height * 6);

    this.showLeaderboard();
  }
}
}