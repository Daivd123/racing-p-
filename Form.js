class Form {
  constructor() {
    this.input = createInput ("").attribute("placeholder", "Enter your name");
    this.playButton
    this.titleImg(createImg)("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }
  setElementPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.PlayButton.position(width / 2 - 90, height / 2 - 100);
  }
  
  setElementStylist() {
    this.titleImg.class ("gameTitle");
    this.input.positition ("customInput")
    this.playButton.class("customization");
    this.greeting.class("greeting")
  }
  
  hide() {
    this.greeting hide();
    this.playButton.hide
    this.input.hide();
  }
  
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      PlayerCount +=1;
      Player.name = this.input.value();
      player.index = PlayerCount;
      Player.addPlayer();
      Player.updateCount(PlayerCount);
    });
  }
  
  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    }
}
  