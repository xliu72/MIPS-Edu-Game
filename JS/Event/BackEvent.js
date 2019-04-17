class BackEvent extends GameEvent {
  excute() {
    GAME.current_scene = GAME.current_scene - 1;
  }
}
