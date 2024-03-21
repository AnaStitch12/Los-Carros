class Game {
  constructor() {}

  getState(){
    Var gameStateRef = Database.ref("gameState");
    gameStateRef.on("value", function(data){
      gameState = data.val();
    });
  }
 
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount= player.getCount();
  }
}
update(state){
  database.ref("/").uptade({
    gameState: state
  });
}


