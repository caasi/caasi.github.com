// Generated by LiveScript 1.2.0
(function(){
  var map, screen, renderer, MapView, mapView, stage, gameLoop;
  map = [['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'], ['G', 'G', 'G', 'R', 'G', 'G', 'G', 'G'], ['G', 'R', 'R', 'R', 'R', 'R', 'G', 'G'], ['G', 'G', 'G', 'R', 'G', 'R', 'R', 'G'], ['G', 'R', 'G', 'R', 'G', 'G', 'R', 'G'], ['G', 'R', 'G', 'R', 'G', 'G', 'R', 'G'], ['G', 'R', 'G', 'R', 'G', 'G', 'R', 'G']];
  screen = {
    width: 320,
    height: 320
  };
  renderer = PIXI.autoDetectRenderer(screen.width, screen.height);
  document.body.appendChild(renderer.view);
  MapView = (function(){
    MapView.displayName = 'MapView';
    var prototype = MapView.prototype, constructor = MapView;
    function MapView(model){
      this.model = model;
      this.view = new PIXI.Graphics;
    }
    prototype.draw = function(){
      var y, ref$, row, x, grid, color, x$;
      for (y in ref$ = this.model) {
        row = ref$[y];
        for (x in row) {
          grid = row[x];
          color = grid === 'G' ? 0x00ff00 : 0xff6600;
          x$ = this.view;
          x$.beginFill(color);
          x$.drawRect(+x * 40, +y * 40, 40, 40);
          x$.endFill();
        }
      }
    };
    return MapView;
  }());
  mapView = new MapView(map);
  stage = new PIXI.Stage(0x16161d);
  stage.addChild(mapView.view);
  gameLoop = function(){
    mapView.draw();
    renderer.render(stage);
    return requestAnimationFrame(gameLoop);
  };
  requestAnimationFrame(gameLoop);
}).call(this);
