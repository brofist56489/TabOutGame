// Generated by CoffeeScript 1.7.1
var GameTimer;

GameTimer = (function() {
  GameTimer.prototype.lt = 0;

  GameTimer.prototype.now = 0;

  GameTimer.prototype.delta = 0;

  GameTimer.prototype.ltr = 0;

  GameTimer.prototype.ticks = 0;

  GameTimer.prototype.frames = 0;

  GameTimer.prototype.mspt = 0;

  GameTimer.prototype.callback = null;

  GameTimer.prototype.start = function() {
    return window.requestAnimationFrame(this.callback);
  };

  GameTimer.prototype.getMillis = function() {
    return new Date().getTime();
  };

  function GameTimer() {
    this.lt = this.getMillis();
    this.now = this.lt;
    this.ltr = this.lt;
    this.mspt = 10.0 / 1000.0;
    this.callback = (function(_this) {
      return function(time) {
        return _this.update();
      };
    })(this);
  }

  GameTimer.prototype.update = function() {
    this.now = this.getMillis();
    this.delta += (this.now - this.lt) * this.mspt;
    this.lt = this.now;
    if (this.delta >= 10) {
      this.delta = 10;
    }
    while (this.delta >= 1) {
      update();
      this.ticks++;
      this.delta--;
    }
    render();
    this.frames++;
    if (this.now - this.ltr >= 1000) {
      this.ltr += 1000;
      this.ticks = 0;
      this.frames = 0;
    }
    if (this.game.running) {
      return window.requestAnimationFrame(this.callback);
    }
  };

  return GameTimer;

})();
