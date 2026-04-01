function CreateGameHubHtml()
{
  if (document.getElementById("gh-overlay"))
    return;

  var _ghRoot = document.createElement('div');
  _ghRoot.innerHTML = `
<div id="gh-overlay" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);z-index:99999;align-items:center;justify-content:center;font-family:'Courier New',Courier,monospace;">
  <div id="gh-modal" style="background:#0f0f1a;border:2px solid #2a2a4a;border-radius:16px;padding:40px 36px;max-width:680px;width:95%;position:relative;box-shadow:0 0 60px rgba(126,249,192,0.08);max-height:95vh;overflow-y:auto;">

    <button onclick="ghClose()" style="position:absolute;top:14px;right:18px;background:none;border:none;color:#556677;font-size:20px;cursor:pointer;font-family:inherit;line-height:1;">&#x2715;</button>

    <!-- ══ MENU ══ -->
    <div id="gh-menu">
      <div style="text-align:center;margin-bottom:30px;">
        <div style="font-size:36px;font-weight:bold;letter-spacing:6px;color:#7ef9c0;text-shadow:0 0 20px rgba(126,249,192,0.3);">GAME HUB</div>
        <div style="font-size:11px;letter-spacing:3px;color:#556677;margin-top:4px;">SELECT A GAME</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">

        <div onclick="ghLaunch('snake')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F40D;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">SNAKE</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

        <div onclick="ghLaunch('breakout')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F9F1;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">BREAKOUT</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

        <div onclick="ghLaunch('pong')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F3D3;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">PONG</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

        <div onclick="ghLaunch('tetris')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F7E6;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">TETRIS</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

        <div onclick="ghLaunch('bomberman')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F4A3;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">BOMBERMAN</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

        <div onclick="ghLaunch('frogger')" style="background:#1a1a2e;border:2px solid #2a2a4a;border-radius:12px;padding:20px 12px;text-align:center;cursor:pointer;transition:all 0.15s;" onmouseover="this.style.borderColor='#7ef9c0';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 30px rgba(126,249,192,0.12)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.transform='none';this.style.boxShadow='none'">
          <div style="font-size:36px;margin-bottom:8px;">&#x1F438;</div>
          <div style="font-size:11px;letter-spacing:2px;color:#aabbcc;">FROGGER</div>
          <div style="display:inline-block;margin-top:8px;font-size:9px;letter-spacing:1px;padding:2px 10px;border-radius:20px;background:rgba(126,249,192,0.1);color:#7ef9c0;border:1px solid rgba(126,249,192,0.25);">PLAY</div>
        </div>

      </div>
    </div>

    <!-- ══ GAME SCREEN ══ -->
    <div id="gh-game" style="display:none;flex-direction:column;align-items:center;">

      <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px;width:100%;">
        <button onclick="ghBackToMenu()" style="background:none;border:1px solid #2a2a4a;color:#7ef9c0;font-family:inherit;font-size:11px;letter-spacing:2px;padding:6px 14px;border-radius:6px;cursor:pointer;" onmouseover="this.style.borderColor='#7ef9c0';this.style.background='rgba(126,249,192,0.07)'" onmouseout="this.style.borderColor='#2a2a4a';this.style.background='none'">&#9664; MENU</button>
        <span id="gh-game-title" style="font-size:13px;letter-spacing:3px;color:#aabbcc;"></span>
        <span id="gh-score-wrap" style="margin-left:auto;font-size:12px;color:#7ef9c0;letter-spacing:2px;">SCORE: <span id="gh-score">0</span></span>
      </div>

      <!-- Snake -->
      <canvas id="gh-snake-canvas" width="400" height="400" style="display:none;border:2px solid #2a2a4a;border-radius:4px;background:#0f0f1a;"></canvas>
      <div id="gh-snake-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">ARROW KEYS TO MOVE &nbsp;|&nbsp; EAT THE APPLE TO GROW</div>

      <!-- Breakout -->
      <canvas id="gh-breakout-canvas" width="400" height="500" style="display:none;border:2px solid #2a2a4a;border-radius:4px;background:#000;"></canvas>
      <div id="gh-breakout-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">&#8592; / &#8594; MOVE PADDLE &nbsp;|&nbsp; SPACE LAUNCH BALL</div>

      <!-- Pong -->
      <canvas id="gh-pong-canvas" width="560" height="420" style="display:none;border:2px solid #2a2a4a;border-radius:4px;background:#000;"></canvas>
      <div id="gh-pong-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">1 SINGLE &nbsp;|&nbsp; 2 TWO PLAYERS &nbsp;|&nbsp; 0 DEMO &nbsp;|&nbsp; Q/A LEFT &nbsp;|&nbsp; P/L RIGHT &nbsp;|&nbsp; ESC QUIT</div>

      <!-- Tetris -->
      <div id="gh-tetris-wrap" style="display:none;flex-direction:row;gap:20px;align-items:flex-start;">
        <canvas id="gh-tetris-canvas" width="240" height="480" style="border:2px solid #2a2a4a;border-radius:4px;background:#000;"></canvas>
        <div style="display:flex;flex-direction:column;gap:12px;padding-top:4px;">
          <div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:8px;padding:12px 16px;min-width:110px;">
            <div style="font-size:9px;letter-spacing:2px;color:#556677;margin-bottom:4px;">SCORE</div>
            <div id="gh-tetris-score" style="font-size:22px;color:#7ef9c0;font-weight:bold;">0</div>
          </div>
          <div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:8px;padding:12px 16px;">
            <div style="font-size:9px;letter-spacing:2px;color:#556677;margin-bottom:4px;">LINES</div>
            <div id="gh-tetris-lines" style="font-size:22px;color:#7ef9c0;font-weight:bold;">0</div>
          </div>
          <div style="background:#1a1a2e;border:1px solid #2a2a4a;border-radius:8px;padding:12px 16px;">
            <div style="font-size:9px;letter-spacing:2px;color:#556677;margin-bottom:8px;">NEXT</div>
            <canvas id="gh-tetris-next" width="96" height="96" style="display:block;"></canvas>
          </div>
        </div>
      </div>
      <div id="gh-tetris-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">&#8592;&#8594; MOVE &nbsp;|&nbsp; &#8593; ROTATE &nbsp;|&nbsp; &#8595; SOFT DROP &nbsp;|&nbsp; SPACE HARD DROP</div>

      <!-- Bomberman -->
      <canvas id="gh-bomberman-canvas" width="600" height="520" style="display:none;border:2px solid #2a2a4a;border-radius:4px;background:forestgreen;"></canvas>
      <div id="gh-bomberman-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">ARROW KEYS MOVE &nbsp;|&nbsp; SPACE PLACE BOMB</div>

      <!-- Frogger -->
      <canvas id="gh-frogger-canvas" width="416" height="480" style="display:none;border:2px solid #2a2a4a;border-radius:4px;"></canvas>
      <div id="gh-frogger-hint" style="display:none;margin-top:10px;font-size:10px;color:#334455;letter-spacing:1px;text-align:center;">ARROW KEYS TO MOVE &nbsp;|&nbsp; RIDE LOGS ACROSS THE RIVER &nbsp;|&nbsp; AVOID CARS</div>

    </div>
  </div>
</div>
  `;
  document.body.appendChild(_ghRoot);
}

/* ═══════════════════════════
   GAME.JS (jakesgordon)
═══════════════════════════ */
//=============================================================================
//
// We need some ECMAScript 5 methods but we need to implement them ourselves
// for older browsers (compatibility: http://kangax.github.com/es5-compat-table/)
//
//  Function.bind:        https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
//  Object.create:        http://javascript.crockford.com/prototypal.html
//  Object.extend:        (defacto standard like jquery $.extend or prototype's Object.extend)
//
//  Object.construct:     our own wrapper around Object.create that ALSO calls
//                        an initialize constructor method if one exists
//
//=============================================================================

if (!Function.prototype.bind) {
  Function.prototype.bind = function(obj) {
    var slice = [].slice,
        args  = slice.call(arguments, 1),
        self  = this,
        nop   = function () {},
        bound = function () {
          return self.apply(this instanceof nop ? this : (obj || {}), args.concat(slice.call(arguments)));   
        };
    nop.prototype   = self.prototype;
    bound.prototype = new nop();
    return bound;
  };
}

if (!Object.create) {
  Object.create = function(base) {
    function F() {};
    F.prototype = base;
    return new F();
  }
}

if (!Object.construct) {
  Object.construct = function(base) {
    var instance = Object.create(base);
    if (instance.initialize)
      instance.initialize.apply(instance, [].slice.call(arguments, 1));
    return instance;
  }
}

if (!Object.extend) {
  Object.extend = function(destination, source) {
    for (var property in source) {
      if (source.hasOwnProperty(property))
        destination[property] = source[property];
    }
    return destination;
  };
}

/* NOT READY FOR PRIME TIME
if (!window.requestAnimationFrame) {// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  window.requestAnimationFrame = window.webkitRequestAnimationFrame || 
                                 window.mozRequestAnimationFrame    || 
                                 window.oRequestAnimationFrame      || 
                                 window.msRequestAnimationFrame     || 
                                 function(callback, element) {
                                   window.setTimeout(callback, 1000 / 60);
                                 }
}
*/

//=============================================================================
// GAME
//=============================================================================

Game = {

  compatible: function() {
    return Object.create &&
           Object.extend &&
           Function.bind &&
           document.addEventListener && // HTML5 standard, all modern browsers that support canvas should also support add/removeEventListener
           Game.ua.hasCanvas
  },

  start: function(id, game, cfg) {
    if (Game.compatible())
      return Object.construct(Game.Runner, id, game, cfg).game; // return the game instance, not the runner (caller can always get at the runner via game.runner)
  },

  ua: function() { // should avoid user agent sniffing... but sometimes you just gotta do what you gotta do
    var ua  = navigator.userAgent.toLowerCase();
    var key =        ((ua.indexOf("opera")   > -1) ? "opera"   : null);
        key = key || ((ua.indexOf("firefox") > -1) ? "firefox" : null);
        key = key || ((ua.indexOf("chrome")  > -1) ? "chrome"  : null);
        key = key || ((ua.indexOf("safari")  > -1) ? "safari"  : null);
        key = key || ((ua.indexOf("msie")    > -1) ? "ie"      : null);

    try {
      var re      = (key == "ie") ? "msie (\\d)" : key + "\\/(\\d\\.\\d)"
      var matches = ua.match(new RegExp(re, "i"));
      var version = matches ? parseFloat(matches[1]) : null;
    } catch (e) {}

    return {
      full:      ua, 
      name:      key + (version ? " " + version.toString() : ""),
      version:   version,
      isFirefox: (key == "firefox"),
      isChrome:  (key == "chrome"),
      isSafari:  (key == "safari"),
      isOpera:   (key == "opera"),
      isIE:      (key == "ie"),
      hasCanvas: (document.createElement('canvas').getContext),
      hasAudio:  (typeof(Audio) != 'undefined')
    }
  }(),

  addEvent:    function(obj, type, fn) { obj.addEventListener(type, fn, false);    },
  removeEvent: function(obj, type, fn) { obj.removeEventListener(type, fn, false); },

  ready: function(fn) {
    if (Game.compatible())
      Game.addEvent(document, 'DOMContentLoaded', fn);
  },

  createCanvas: function() {
    return document.createElement('canvas');
  },

  createAudio: function(src) {
    try {
      var a = new Audio(src);
      a.volume = 0.1; // lets be real quiet please
      return a;
    } catch (e) {
      return null;
    }
  },

  loadImages: function(sources, callback) { /* load multiple images and callback when ALL have finished loading */
    var images = {};
    var count = sources ? sources.length : 0;
    if (count == 0) {
      callback(images);
    }
    else {
      for(var n = 0 ; n < sources.length ; n++) {
        var source = sources[n];
        var image = document.createElement('img');
        images[source] = image;
        Game.addEvent(image, 'load', function() { if (--count == 0) callback(images); });
        image.src = source;
      }
    }
  },

  random: function(min, max) {
    return (min + (Math.random() * (max - min)));
  },

  timestamp: function() { 
    return new Date().getTime();
  },

  KEY: {
    BACKSPACE: 8,
    TAB:       9,
    RETURN:   13,
    ESC:      27,
    SPACE:    32,
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
    DELETE:   46,
    HOME:     36,
    END:      35,
    PAGEUP:   33,
    PAGEDOWN: 34,
    INSERT:   45,
    ZERO:     48,
    ONE:      49,
    TWO:      50,
    A:        65,
    L:        76,
    P:        80,
    Q:        81,
    TILDA:    192
  },

  //-----------------------------------------------------------------------------

  Runner: {

    initialize: function(id, game, cfg) {
      this.cfg          = Object.extend(game.Defaults || {}, cfg || {}); // use game defaults (if any) and extend with custom cfg (if any)
      this.fps          = this.cfg.fps || 60;
      this.interval     = 1000.0 / this.fps;
      this.canvas       = document.getElementById(id);
      this.width        = this.cfg.width  || this.canvas.offsetWidth;
      this.height       = this.cfg.height || this.canvas.offsetHeight;
      this.front        = this.canvas;
      this.front.width  = this.width;
      this.front.height = this.height;
      this.back         = Game.createCanvas();
      this.back.width   = this.width;
      this.back.height  = this.height;
      this.front2d      = this.front.getContext('2d');
      this.back2d       = this.back.getContext('2d');
      this.addEvents();
      this.resetStats();

      this.game = Object.construct(game, this, this.cfg); // finally construct the game object itself
    },

    start: function() { // game instance should call runner.start() when its finished initializing and is ready to start the game loop
      this.lastFrame = Game.timestamp();
      this.timer     = setInterval(this.loop.bind(this), this.interval);
    },

    stop: function() {
      clearInterval(this.timer);
    },

    loop: function() {
      var start  = Game.timestamp(); this.update((start - this.lastFrame)/1000.0); // send dt as seconds
      var middle = Game.timestamp(); this.draw();
      var end    = Game.timestamp();
      this.updateStats(middle - start, end - middle);
      this.lastFrame = start;
    },

    update: function(dt) {
      this.game.update(dt);
    },

    draw: function() {
      this.back2d.clearRect(0, 0, this.width, this.height);
      this.game.draw(this.back2d);
      this.drawStats(this.back2d);
      this.front2d.clearRect(0, 0, this.width, this.height);
      this.front2d.drawImage(this.back, 0, 0);
    },

    resetStats: function() {
      this.stats = {
        count:  0,
        fps:    0,
        update: 0,
        draw:   0, 
        frame:  0  // update + draw
      };
    },

    updateStats: function(update, draw) {
      if (this.cfg.stats) {
        this.stats.update = Math.max(1, update);
        this.stats.draw   = Math.max(1, draw);
        this.stats.frame  = this.stats.update + this.stats.draw;
        this.stats.count  = this.stats.count == this.fps ? 0 : this.stats.count + 1;
        this.stats.fps    = Math.min(this.fps, 1000 / this.stats.frame);
      }
    },

    drawStats: function(ctx) {
      if (this.cfg.stats) {
        ctx.fillText("frame: "  + this.stats.count,         this.width - 100, this.height - 60);
        ctx.fillText("fps: "    + this.stats.fps,           this.width - 100, this.height - 50);
        ctx.fillText("update: " + this.stats.update + "ms", this.width - 100, this.height - 40);
        ctx.fillText("draw: "   + this.stats.draw   + "ms", this.width - 100, this.height - 30);
      }
    },

    addEvents: function() {
      Game.addEvent(document, 'keydown', this.onkeydown.bind(this));
      Game.addEvent(document, 'keyup',   this.onkeyup.bind(this));
    },

    onkeydown: function(ev) { if (this.game.onkeydown) this.game.onkeydown(ev.keyCode); },
    onkeyup:   function(ev) { if (this.game.onkeyup)   this.game.onkeyup(ev.keyCode);   },

    hideCursor: function() { this.canvas.style.cursor = 'none'; },
    showCursor: function() { this.canvas.style.cursor = 'auto'; },

    alert: function(msg) {
      this.stop(); // alert blocks thread, so need to stop game loop in order to avoid sending huge dt values to next update
      result = window.alert(msg);
      this.start();
      return result;
    },

    confirm: function(msg) {
      this.stop(); // alert blocks thread, so need to stop game loop in order to avoid sending huge dt values to next update
      result = window.confirm(msg);
      this.start();
      return result;
    }

    //-------------------------------------------------------------------------

  } // Game.Runner
} // Game

/* ═══════════════════════════
   PONG.JS (jakesgordon)
═══════════════════════════ */
//=============================================================================
// PONG
//=============================================================================

Pong = {

  Defaults: {
    width:        640,   // logical canvas width (browser will scale to physical canvas size - which is controlled by @media css queries)
    height:       480,   // logical canvas height (ditto)
    wallWidth:    12,
    paddleWidth:  12,
    paddleHeight: 60,
    paddleSpeed:  2,     // should be able to cross court vertically   in 2 seconds
    ballSpeed:    4,     // should be able to cross court horizontally in 4 seconds, at starting speed ...
    ballAccel:    8,     // ... but accelerate as time passes
    ballRadius:   5,
    sound:        true
  },

  Colors: {
    walls:           'white',
    ball:            'white',
    score:           'white',
    footprint:       '#333',
    predictionGuess: 'yellow',
    predictionExact: 'red'
  },

  Images: [
    "images/press1.png",
    "images/press2.png",
    "images/winner.png"
  ],

  Levels: [
    {aiReaction: 0.2, aiError:  40}, // 0:  ai is losing by 8
    {aiReaction: 0.3, aiError:  50}, // 1:  ai is losing by 7
    {aiReaction: 0.4, aiError:  60}, // 2:  ai is losing by 6
    {aiReaction: 0.5, aiError:  70}, // 3:  ai is losing by 5
    {aiReaction: 0.6, aiError:  80}, // 4:  ai is losing by 4
    {aiReaction: 0.7, aiError:  90}, // 5:  ai is losing by 3
    {aiReaction: 0.8, aiError: 100}, // 6:  ai is losing by 2
    {aiReaction: 0.9, aiError: 110}, // 7:  ai is losing by 1
    {aiReaction: 1.0, aiError: 120}, // 8:  tie
    {aiReaction: 1.1, aiError: 130}, // 9:  ai is winning by 1
    {aiReaction: 1.2, aiError: 140}, // 10: ai is winning by 2
    {aiReaction: 1.3, aiError: 150}, // 11: ai is winning by 3
    {aiReaction: 1.4, aiError: 160}, // 12: ai is winning by 4
    {aiReaction: 1.5, aiError: 170}, // 13: ai is winning by 5
    {aiReaction: 1.6, aiError: 180}, // 14: ai is winning by 6
    {aiReaction: 1.7, aiError: 190}, // 15: ai is winning by 7
    {aiReaction: 1.8, aiError: 200}  // 16: ai is winning by 8
  ],

  //-----------------------------------------------------------------------------

  initialize: function(runner, cfg) {
    Game.loadImages(Pong.Images, function(images) {
      this.cfg         = cfg;
      this.runner      = runner;
      this.width       = runner.width;
      this.height      = runner.height;
      this.images      = images;
      this.playing     = false;
      this.scores      = [0, 0];
      this.menu        = Object.construct(Pong.Menu,   this);
      this.court       = Object.construct(Pong.Court,  this);
      this.leftPaddle  = Object.construct(Pong.Paddle, this);
      this.rightPaddle = Object.construct(Pong.Paddle, this, true);
      this.ball        = Object.construct(Pong.Ball,   this);
      this.sounds      = Object.construct(Pong.Sounds, this);
      this.runner.start();
    }.bind(this));
  },

  startDemo:         function() { this.start(0); },
  startSinglePlayer: function() { this.start(1); },
  startDoublePlayer: function() { this.start(2); },

  start: function(numPlayers) {
    if (!this.playing) {
      this.scores = [0, 0];
      this.playing = true;
      this.leftPaddle.setAuto(numPlayers < 1, this.level(0));
      this.rightPaddle.setAuto(numPlayers < 2, this.level(1));
      this.ball.reset();
      this.runner.hideCursor();
    }
  },

  stop: function(ask) {
    if (this.playing) {
      if (!ask || this.runner.confirm('Abandon game in progress ?')) {
        this.playing = false;
        this.leftPaddle.setAuto(false);
        this.rightPaddle.setAuto(false);
        this.runner.showCursor();
      }
    }
  },

  level: function(playerNo) {
    return 8 + (this.scores[playerNo] - this.scores[playerNo ? 0 : 1]);
  },

  goal: function(playerNo) {
    this.sounds.goal();
    this.scores[playerNo] += 1;
    if (this.scores[playerNo] == 9) {
      this.menu.declareWinner(playerNo);
      this.stop();
    }
    else {
      this.ball.reset(playerNo);
      this.leftPaddle.setLevel(this.level(0));
      this.rightPaddle.setLevel(this.level(1));
    }
  },

  update: function(dt) {
    this.leftPaddle.update(dt, this.ball);
    this.rightPaddle.update(dt, this.ball);
    if (this.playing) {
      var dx = this.ball.dx;
      var dy = this.ball.dy;
      this.ball.update(dt, this.leftPaddle, this.rightPaddle);
      if (this.ball.dx < 0 && dx > 0)
        this.sounds.ping();
      else if (this.ball.dx > 0 && dx < 0)
        this.sounds.pong();
      else if (this.ball.dy * dy < 0)
        this.sounds.wall();

      if (this.ball.left > this.width)
        this.goal(0);
      else if (this.ball.right < 0)
        this.goal(1);
    }
  },

  draw: function(ctx) {
    this.court.draw(ctx, this.scores[0], this.scores[1]);
    this.leftPaddle.draw(ctx);
    this.rightPaddle.draw(ctx);
    if (this.playing)
      this.ball.draw(ctx);
    else
      this.menu.draw(ctx);
  },

  onkeydown: function(keyCode) {
    switch(keyCode) {
      case Game.KEY.ZERO: this.startDemo();            break;
      case Game.KEY.ONE:  this.startSinglePlayer();    break;
      case Game.KEY.TWO:  this.startDoublePlayer();    break;
      case Game.KEY.ESC:  this.stop(true);             break;
      case Game.KEY.Q:    if (!this.leftPaddle.auto)  this.leftPaddle.moveUp();    break;
      case Game.KEY.A:    if (!this.leftPaddle.auto)  this.leftPaddle.moveDown();  break;
      case Game.KEY.P:    if (!this.rightPaddle.auto) this.rightPaddle.moveUp();   break;
      case Game.KEY.L:    if (!this.rightPaddle.auto) this.rightPaddle.moveDown(); break;
    }
  },

  onkeyup: function(keyCode) {
    switch(keyCode) {
      case Game.KEY.Q: if (!this.leftPaddle.auto)  this.leftPaddle.stopMovingUp();    break;
      case Game.KEY.A: if (!this.leftPaddle.auto)  this.leftPaddle.stopMovingDown();  break;
      case Game.KEY.P: if (!this.rightPaddle.auto) this.rightPaddle.stopMovingUp();   break;
      case Game.KEY.L: if (!this.rightPaddle.auto) this.rightPaddle.stopMovingDown(); break;
    }
  },

  showStats:       function(on) { this.cfg.stats = on; },
  showFootprints:  function(on) { this.cfg.footprints = on; this.ball.footprints = []; },
  showPredictions: function(on) { this.cfg.predictions = on; },
  enableSound:     function(on) { this.cfg.sound = on; },

  //=============================================================================
  // MENU
  //=============================================================================

  Menu: {

    initialize: function(pong) {
      var press1 = pong.images["images/press1.png"];
      var press2 = pong.images["images/press2.png"];
      var winner = pong.images["images/winner.png"];
      this.press1  = { image: press1, x: 10,                                                 y: pong.cfg.wallWidth     };
      this.press2  = { image: press2, x: (pong.width - press2.width - 10),                   y: pong.cfg.wallWidth     };
      this.winner1 = { image: winner, x: (pong.width/2) - winner.width - pong.cfg.wallWidth, y: 6 * pong.cfg.wallWidth };
      this.winner2 = { image: winner, x: (pong.width/2)                + pong.cfg.wallWidth, y: 6 * pong.cfg.wallWidth };
    },

    declareWinner: function(playerNo) {
      this.winner = playerNo;
    },

    draw: function(ctx) {
      ctx.drawImage(this.press1.image, this.press1.x, this.press1.y);
      ctx.drawImage(this.press2.image, this.press2.x, this.press2.y);
      if (this.winner == 0)
        ctx.drawImage(this.winner1.image, this.winner1.x, this.winner1.y);
      else if (this.winner == 1)
        ctx.drawImage(this.winner2.image, this.winner2.x, this.winner2.y);
    }

  },

  //=============================================================================
  // SOUNDS
  //=============================================================================

  Sounds: {

    initialize: function(pong) {
      this.game      = pong;
      this.supported = Game.ua.hasAudio;
      if (this.supported) {
        this.files = {
          ping: Game.createAudio("sounds/ping.wav"),
          pong: Game.createAudio("sounds/pong.wav"),
          wall: Game.createAudio("sounds/wall.wav"),
          goal: Game.createAudio("sounds/goal.wav")
        };
      }
    },

    play: function(name) {
      if (this.supported && this.game.cfg.sound && this.files[name])
        this.files[name].play();
    },

    ping: function() { this.play('ping'); },
    pong: function() { this.play('pong'); },
    wall: function() { /*this.play('wall');*/ },
    goal: function() { /*this.play('goal');*/ }

  },

  //=============================================================================
  // COURT
  //=============================================================================

  Court: {

    initialize: function(pong) {
      var w  = pong.width;
      var h  = pong.height;
      var ww = pong.cfg.wallWidth;

      this.ww    = ww;
      this.walls = [];
      this.walls.push({x: 0, y: 0,      width: w, height: ww});
      this.walls.push({x: 0, y: h - ww, width: w, height: ww});
      var nMax = (h / (ww*2));
      for(var n = 0 ; n < nMax ; n++) { // draw dashed halfway line
        this.walls.push({x: (w / 2) - (ww / 2), 
                         y: (ww / 2) + (ww * 2 * n), 
                         width: ww, height: ww});
      }

      var sw = 3*ww;
      var sh = 4*ww;
      this.score1 = {x: 0.5 + (w/2) - 1.5*ww - sw, y: 2*ww, w: sw, h: sh};
      this.score2 = {x: 0.5 + (w/2) + 1.5*ww,      y: 2*ww, w: sw, h: sh};
    },

    draw: function(ctx, scorePlayer1, scorePlayer2) {
      ctx.fillStyle = Pong.Colors.walls;
      for(var n = 0 ; n < this.walls.length ; n++)
        ctx.fillRect(this.walls[n].x, this.walls[n].y, this.walls[n].width, this.walls[n].height);
      this.drawDigit(ctx, scorePlayer1, this.score1.x, this.score1.y, this.score1.w, this.score1.h);
      this.drawDigit(ctx, scorePlayer2, this.score2.x, this.score2.y, this.score2.w, this.score2.h);
    },

    drawDigit: function(ctx, n, x, y, w, h) {
      ctx.fillStyle = Pong.Colors.score;
      var dw = dh = this.ww*4/5;
      var blocks = Pong.Court.DIGITS[n];
      if (blocks[0])
        ctx.fillRect(x, y, w, dh);
      if (blocks[1])
        ctx.fillRect(x, y, dw, h/2);
      if (blocks[2])
        ctx.fillRect(x+w-dw, y, dw, h/2);
      if (blocks[3])
        ctx.fillRect(x, y + h/2 - dh/2, w, dh);
      if (blocks[4])
        ctx.fillRect(x, y + h/2, dw, h/2);
      if (blocks[5])
        ctx.fillRect(x+w-dw, y + h/2, dw, h/2);
      if (blocks[6])
        ctx.fillRect(x, y+h-dh, w, dh);
    },

    DIGITS: [
      [1, 1, 1, 0, 1, 1, 1], // 0
      [0, 0, 1, 0, 0, 1, 0], // 1
      [1, 0, 1, 1, 1, 0, 1], // 2
      [1, 0, 1, 1, 0, 1, 1], // 3
      [0, 1, 1, 1, 0, 1, 0], // 4
      [1, 1, 0, 1, 0, 1, 1], // 5
      [1, 1, 0, 1, 1, 1, 1], // 6
      [1, 0, 1, 0, 0, 1, 0], // 7
      [1, 1, 1, 1, 1, 1, 1], // 8
      [1, 1, 1, 1, 0, 1, 0]  // 9
    ]

  },

  //=============================================================================
  // PADDLE
  //=============================================================================

  Paddle: {

    initialize: function(pong, rhs) {
      this.pong   = pong;
      this.width  = pong.cfg.paddleWidth;
      this.height = pong.cfg.paddleHeight;
      this.minY   = pong.cfg.wallWidth;
      this.maxY   = pong.height - pong.cfg.wallWidth - this.height;
      this.speed  = (this.maxY - this.minY) / pong.cfg.paddleSpeed;
      this.setpos(rhs ? pong.width - this.width : 0, this.minY + (this.maxY - this.minY)/2);
      this.setdir(0);
    },

    setpos: function(x, y) {
      this.x      = x;
      this.y      = y;
      this.left   = this.x;
      this.right  = this.left + this.width;
      this.top    = this.y;
      this.bottom = this.y + this.height;
    },

    setdir: function(dy) {
      this.up   = (dy < 0 ? -dy : 0);
      this.down = (dy > 0 ?  dy : 0);
    },

    setAuto: function(on, level) {
      if (on && !this.auto) {
        this.auto = true;
        this.setLevel(level);
      }
      else if (!on && this.auto) {
        this.auto = false;
        this.setdir(0);
      }
    },

    setLevel: function(level) {
      if (this.auto)
        this.level = Pong.Levels[level];
    },

    update: function(dt, ball) {
      if (this.auto)
        this.ai(dt, ball);

      var amount = this.down - this.up;
      if (amount != 0) {
        var y = this.y + (amount * dt * this.speed);
        if (y < this.minY)
          y = this.minY;
        else if (y > this.maxY)
          y = this.maxY;
        this.setpos(this.x, y);
      }
    },

    ai: function(dt, ball) {
      if (((ball.x < this.left) && (ball.dx < 0)) ||
          ((ball.x > this.right) && (ball.dx > 0))) {
        this.stopMovingUp();
        this.stopMovingDown();
        return;
      }

      this.predict(ball, dt);

      if (this.prediction) {
        if (this.prediction.y < (this.top + this.height/2 - 5)) {
          this.stopMovingDown();
          this.moveUp();
        }
        else if (this.prediction.y > (this.bottom - this.height/2 + 5)) {
          this.stopMovingUp();
          this.moveDown();
        }
        else {
          this.stopMovingUp();
          this.stopMovingDown();
        }
      }
    },

    predict: function(ball, dt) {
      // only re-predict if the ball changed direction, or its been some amount of time since last prediction
      if (this.prediction &&
          ((this.prediction.dx * ball.dx) > 0) &&
          ((this.prediction.dy * ball.dy) > 0) &&
          (this.prediction.since < this.level.aiReaction)) {
        this.prediction.since += dt;
        return;
      }

      var pt  = Pong.Helper.ballIntercept(ball, {left: this.left, right: this.right, top: -10000, bottom: 10000}, ball.dx * 10, ball.dy * 10);
      if (pt) {
        var t = this.minY + ball.radius;
        var b = this.maxY + this.height - ball.radius;

        while ((pt.y < t) || (pt.y > b)) {
          if (pt.y < t) {
            pt.y = t + (t - pt.y);
          }
          else if (pt.y > b) {
            pt.y = t + (b - t) - (pt.y - b);
          }
        }
        this.prediction = pt;
      }
      else {
        this.prediction = null;
      }

      if (this.prediction) {
        this.prediction.since = 0;
        this.prediction.dx = ball.dx;
        this.prediction.dy = ball.dy;
        this.prediction.radius = ball.radius;
        this.prediction.exactX = this.prediction.x;
        this.prediction.exactY = this.prediction.y;
        var closeness = (ball.dx < 0 ? ball.x - this.right : this.left - ball.x) / this.pong.width;
        var error = this.level.aiError * closeness;
        this.prediction.y = this.prediction.y + Game.random(-error, error);
      }
    },

    draw: function(ctx) {
      ctx.fillStyle = Pong.Colors.walls;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      if (this.prediction && this.pong.cfg.predictions) {
        ctx.strokeStyle = Pong.Colors.predictionExact;
        ctx.strokeRect(this.prediction.x - this.prediction.radius, this.prediction.exactY - this.prediction.radius, this.prediction.radius*2, this.prediction.radius*2);
        ctx.strokeStyle = Pong.Colors.predictionGuess;
        ctx.strokeRect(this.prediction.x - this.prediction.radius, this.prediction.y - this.prediction.radius, this.prediction.radius*2, this.prediction.radius*2);
      }
    },

    moveUp:         function() { this.up   = 1; },
    moveDown:       function() { this.down = 1; },
    stopMovingUp:   function() { this.up   = 0; },
    stopMovingDown: function() { this.down = 0; }

  },

  //=============================================================================
  // BALL
  //=============================================================================

  Ball: {

    initialize: function(pong) {
      this.pong    = pong;
      this.radius  = pong.cfg.ballRadius;
      this.minX    = this.radius;
      this.maxX    = pong.width - this.radius;
      this.minY    = pong.cfg.wallWidth + this.radius;
      this.maxY    = pong.height - pong.cfg.wallWidth - this.radius;
      this.speed   = (this.maxX - this.minX) / pong.cfg.ballSpeed;
      this.accel   = pong.cfg.ballAccel;
    },

    reset: function(playerNo) {
      this.footprints = [];
      this.setpos(playerNo == 1 ?   this.maxX : this.minX,  Game.random(this.minY, this.maxY));
      this.setdir(playerNo == 1 ? -this.speed : this.speed, this.speed);
    },

    setpos: function(x, y) {
      this.x      = x;
      this.y      = y;
      this.left   = this.x - this.radius;
      this.top    = this.y - this.radius;
      this.right  = this.x + this.radius;
      this.bottom = this.y + this.radius;
    },

    setdir: function(dx, dy) {
      this.dxChanged = ((this.dx < 0) != (dx < 0)); // did horizontal direction change
      this.dyChanged = ((this.dy < 0) != (dy < 0)); // did vertical direction change
      this.dx = dx;
      this.dy = dy;
    },

    footprint: function() {
      if (this.pong.cfg.footprints) {
        if (!this.footprintCount || this.dxChanged || this.dyChanged) {
          this.footprints.push({x: this.x, y: this.y});
          if (this.footprints.length > 50)
            this.footprints.shift();
          this.footprintCount = 5;
        }
        else {
          this.footprintCount--;
        }
      }
    },

    update: function(dt, leftPaddle, rightPaddle) {

      pos = Pong.Helper.accelerate(this.x, this.y, this.dx, this.dy, this.accel, dt);

      if ((pos.dy > 0) && (pos.y > this.maxY)) {
        pos.y = this.maxY;
        pos.dy = -pos.dy;
      }
      else if ((pos.dy < 0) && (pos.y < this.minY)) {
        pos.y = this.minY;
        pos.dy = -pos.dy;
      }

      var paddle = (pos.dx < 0) ? leftPaddle : rightPaddle;
      var pt     = Pong.Helper.ballIntercept(this, paddle, pos.nx, pos.ny);

      if (pt) {
        switch(pt.d) {
          case 'left':
          case 'right':
            pos.x = pt.x;
            pos.dx = -pos.dx;
            break;
          case 'top':
          case 'bottom':
            pos.y = pt.y;
            pos.dy = -pos.dy;
            break;
        }

        // add/remove spin based on paddle direction
        if (paddle.up)
          pos.dy = pos.dy * (pos.dy < 0 ? 0.5 : 1.5);
        else if (paddle.down)
          pos.dy = pos.dy * (pos.dy > 0 ? 0.5 : 1.5);
      }

      this.setpos(pos.x,  pos.y);
      this.setdir(pos.dx, pos.dy);
      this.footprint();
    },

    draw: function(ctx) {
      var w = h = this.radius * 2;
      ctx.fillStyle = Pong.Colors.ball;
      ctx.fillRect(this.x - this.radius, this.y - this.radius, w, h);
      if (this.pong.cfg.footprints) {
        var max = this.footprints.length;
        ctx.strokeStyle = Pong.Colors.footprint;
        for(var n = 0 ; n < max ; n++)
          ctx.strokeRect(this.footprints[n].x - this.radius, this.footprints[n].y - this.radius, w, h);
      }
    }

  },

  //=============================================================================
  // HELPER
  //=============================================================================

  Helper: {

    accelerate: function(x, y, dx, dy, accel, dt) {
      var x2  = x + (dt * dx) + (accel * dt * dt * 0.5);
      var y2  = y + (dt * dy) + (accel * dt * dt * 0.5);
      var dx2 = dx + (accel * dt) * (dx > 0 ? 1 : -1);
      var dy2 = dy + (accel * dt) * (dy > 0 ? 1 : -1);
      return { nx: (x2-x), ny: (y2-y), x: x2, y: y2, dx: dx2, dy: dy2 };
    },

    intercept: function(x1, y1, x2, y2, x3, y3, x4, y4, d) {
      var denom = ((y4-y3) * (x2-x1)) - ((x4-x3) * (y2-y1));
      if (denom != 0) {
        var ua = (((x4-x3) * (y1-y3)) - ((y4-y3) * (x1-x3))) / denom;
        if ((ua >= 0) && (ua <= 1)) {
          var ub = (((x2-x1) * (y1-y3)) - ((y2-y1) * (x1-x3))) / denom;
          if ((ub >= 0) && (ub <= 1)) {
            var x = x1 + (ua * (x2-x1));
            var y = y1 + (ua * (y2-y1));
            return { x: x, y: y, d: d};
          }
        }
      }
      return null;
    },

    ballIntercept: function(ball, rect, nx, ny) {
      var pt;
      if (nx < 0) {
        pt = Pong.Helper.intercept(ball.x, ball.y, ball.x + nx, ball.y + ny, 
                                   rect.right  + ball.radius, 
                                   rect.top    - ball.radius, 
                                   rect.right  + ball.radius, 
                                   rect.bottom + ball.radius, 
                                   "right");
      }
      else if (nx > 0) {
        pt = Pong.Helper.intercept(ball.x, ball.y, ball.x + nx, ball.y + ny, 
                                   rect.left   - ball.radius, 
                                   rect.top    - ball.radius, 
                                   rect.left   - ball.radius, 
                                   rect.bottom + ball.radius,
                                   "left");
      }
      if (!pt) {
        if (ny < 0) {
          pt = Pong.Helper.intercept(ball.x, ball.y, ball.x + nx, ball.y + ny, 
                                     rect.left   - ball.radius, 
                                     rect.bottom + ball.radius, 
                                     rect.right  + ball.radius, 
                                     rect.bottom + ball.radius,
                                     "bottom");
        }
        else if (ny > 0) {
          pt = Pong.Helper.intercept(ball.x, ball.y, ball.x + nx, ball.y + ny, 
                                     rect.left   - ball.radius, 
                                     rect.top    - ball.radius, 
                                     rect.right  + ball.radius, 
                                     rect.top    - ball.radius,
                                     "top");
        }
      }
      return pt;
    }

  }

  //=============================================================================

}; // Pong


/* ═══════════════════════════
   PONG PATCHES
═══════════════════════════ */
Pong.Images = [];
Pong.Menu.initialize = function(pong) { this.pong = pong; this.winner = null; };
Pong.Menu.draw = function(ctx) {
  var w=this.pong.width, h=this.pong.height, ww=this.pong.cfg.wallWidth;
  ctx.save(); ctx.textAlign='center';
  if (this.winner !== null) {
    ctx.font='bold 26px Courier New'; ctx.fillStyle='#FFD700';
    ctx.fillText('PLAYER '+(this.winner+1)+' WINS!', w/2, h/2-80);
  }
  ctx.fillStyle='white'; ctx.font='bold 42px Courier New'; ctx.fillText('PONG', w/2, h/2-20);
  ctx.font='15px Courier New'; ctx.fillStyle='#aaaaaa';
  ctx.fillText('Press  1  for Single Player', w/2, h/2+30);
  ctx.fillText('Press  2  for Two Players',   w/2, h/2+55);
  ctx.fillText('Press  0  to watch Demo',      w/2, h/2+80);
  ctx.font='11px Courier New'; ctx.fillStyle='#555555';
  ctx.fillText('Q/A \u2014 Left  |  P/L \u2014 Right', w/2, h-ww-10);
  ctx.restore();
};
Pong.Sounds.initialize = function(p){this.game=p;};
Pong.Sounds.ping=function(){}; Pong.Sounds.pong=function(){};
Pong.Sounds.wall=function(){}; Pong.Sounds.goal=function(){};
Game.Runner.addEvents = function() {
  this._bkd=this.onkeydown.bind(this); this._bku=this.onkeyup.bind(this);
  Game.addEvent(document,'keydown',this._bkd); Game.addEvent(document,'keyup',this._bku);
};
Game.Runner.removeEvents = function() {
  if(this._bkd){Game.removeEvent(document,'keydown',this._bkd);this._bkd=null;}
  if(this._bku){Game.removeEvent(document,'keyup',this._bku);this._bku=null;}
};
Game.Runner.confirm = function(){ this.stop(); return true; };

/* ═══════════════════════════════════════════════════
   GAME HUB CONTROLLER
═══════════════════════════════════════════════════ */
function InitGameHub() {
  CreateGameHubHtml();
  ShowGameHub();
  window.ghClose=function(){ stopAll(); document.getElementById('gh-overlay').style.display='none'; };
  document.getElementById('gh-overlay').addEventListener('click',function(e){ if(e.target===this) ghClose(); });
  window.ghBackToMenu=function(){ stopAll(); document.getElementById('gh-game').style.display='none'; document.getElementById('gh-menu').style.display='block'; };

  var ALL_PANELS = ['gh-snake-canvas','gh-snake-hint',
                    'gh-breakout-canvas','gh-breakout-hint',
                    'gh-pong-canvas','gh-pong-hint',
                    'gh-tetris-wrap','gh-tetris-hint',
                    'gh-bomberman-canvas','gh-bomberman-hint',
                    'gh-frogger-canvas','gh-frogger-hint'];

  window.ghLaunch=function(game){
    stopAll();
    ALL_PANELS.forEach(function(id){ document.getElementById(id).style.display='none'; });
    document.getElementById('gh-score-wrap').style.display='inline';
    document.getElementById('gh-score').textContent='0';
    document.getElementById('gh-menu').style.display='none';
    document.getElementById('gh-game').style.display='flex';
    document.getElementById('gh-game-title').textContent=game.toUpperCase();
    if(game==='snake')    startSnake();
    if(game==='breakout') startBreakout();
    if(game==='pong')     startPong();
    if(game==='tetris')   startTetris();
    if(game==='bomberman')startBomberman();
    if(game==='frogger')  startFrogger();
  };

  function stopAll(){ snakeStop(); breakoutStop(); pongStop(); tetrisStop(); bombermanStop(); froggerStop(); }
  function rInt(a,b){ return Math.floor(Math.random()*(b-a))+a; }

  var _keyDn=null, _keyUp=null;
  function useKeys(dn,up){
    if(_keyDn) document.removeEventListener('keydown',_keyDn);
    if(_keyUp) document.removeEventListener('keyup',_keyUp);
    _keyDn=dn; _keyUp=up;
    if(dn) document.addEventListener('keydown',dn);
    if(up) document.addEventListener('keyup',up);
  }

  /* ─────────────── SNAKE (straker) ─────────────── */
  var snRAF=null, snSt=null;
  function startSnake(){
    document.getElementById('gh-snake-canvas').style.display='block';
    document.getElementById('gh-snake-hint').style.display='block';
    var G=16;
    snSt={G:G,cnt:0,score:0,snake:{x:160,y:160,dx:G,dy:0,cells:[],maxCells:4},apple:{x:rInt(0,25)*G,y:rInt(0,25)*G}};
    useKeys(snKeyDn,null);
    if(snRAF) cancelAnimationFrame(snRAF);
    snRAF=requestAnimationFrame(snLoop);
  }
  function snakeStop(){ if(snRAF){cancelAnimationFrame(snRAF);snRAF=null;} snSt=null; }
  function snLoop(){
    snRAF=requestAnimationFrame(snLoop);
    var s=snSt; if(!s) return;
    if(++s.cnt<4) return; s.cnt=0;
    var cv=document.getElementById('gh-snake-canvas'),cx=cv.getContext('2d'),G=s.G,sn=s.snake,ap=s.apple;
    cx.fillStyle='#0f0f1a'; cx.fillRect(0,0,400,400);
    sn.x+=sn.dx; sn.y+=sn.dy;
    if(sn.x<0)sn.x=400-G; else if(sn.x>=400)sn.x=0;
    if(sn.y<0)sn.y=400-G; else if(sn.y>=400)sn.y=0;
    sn.cells.unshift({x:sn.x,y:sn.y});
    if(sn.cells.length>sn.maxCells) sn.cells.pop();
    cx.fillStyle='#ff4466'; cx.beginPath(); cx.arc(ap.x+G/2-1,ap.y+G/2-1,(G-2)/2,0,Math.PI*2); cx.fill();
    sn.cells.forEach(function(c,i){
      cx.fillStyle=i===0?'#7ef9c0':'rgba(80,220,140,'+Math.max(0.25,1-i/sn.maxCells)+')';
      cx.fillRect(c.x+1,c.y+1,G-2,G-2);
      if(c.x===ap.x&&c.y===ap.y){ sn.maxCells++; s.score++; document.getElementById('gh-score').textContent=s.score; ap.x=rInt(0,25)*G; ap.y=rInt(0,25)*G; }
      for(var j=i+1;j<sn.cells.length;j++) if(c.x===sn.cells[j].x&&c.y===sn.cells[j].y){ sn.x=160;sn.y=160;sn.cells=[];sn.maxCells=4;sn.dx=G;sn.dy=0;s.score=0;document.getElementById('gh-score').textContent='0';ap.x=rInt(0,25)*G;ap.y=rInt(0,25)*G; }
    });
    cx.strokeStyle='rgba(255,255,255,0.03)'; cx.lineWidth=0.5;
    for(var x=0;x<=400;x+=G){cx.beginPath();cx.moveTo(x,0);cx.lineTo(x,400);cx.stroke();}
    for(var y=0;y<=400;y+=G){cx.beginPath();cx.moveTo(0,y);cx.lineTo(400,y);cx.stroke();}
  }
  function snKeyDn(e){
    var sn=snSt&&snSt.snake; if(!sn) return; var G=snSt.G;
    if(e.which===37&&sn.dx===0){e.preventDefault();sn.dx=-G;sn.dy=0;}
    else if(e.which===38&&sn.dy===0){e.preventDefault();sn.dy=-G;sn.dx=0;}
    else if(e.which===39&&sn.dx===0){e.preventDefault();sn.dx=G;sn.dy=0;}
    else if(e.which===40&&sn.dy===0){e.preventDefault();sn.dy=G;sn.dx=0;}
  }

  /* ─────────────── BREAKOUT (straker) ─────────────── */
  var brkRAF=null, brkSt=null;
  var BRK_SCORE = {'R':7,'O':5,'G':3,'Y':1};

  function brkMakeLevel(){
    var level=[
      [],[],[],[],[],[],
      ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
      ['R','R','R','R','R','R','R','R','R','R','R','R','R','R'],
      ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
      ['O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['G','G','G','G','G','G','G','G','G','G','G','G','G','G'],
      ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y'],
      ['Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y','Y']
    ];
    var colorMap={'R':'red','O':'orange','G':'green','Y':'yellow'};
    var brickGap=2, brickWidth=25, brickHeight=12, wallSize=12, bricks=[];
    for(var row=0;row<level.length;row++)
      for(var col=0;col<level[row].length;col++){
        var cc=level[row][col];
        bricks.push({x:wallSize+(brickWidth+brickGap)*col, y:wallSize+(brickHeight+brickGap)*row,
                     color:colorMap[cc], code:cc, width:brickWidth, height:brickHeight});
      }
    return bricks;
  }

  function startBreakout(){
    document.getElementById('gh-breakout-canvas').style.display='block';
    document.getElementById('gh-breakout-hint').style.display='block';
    var wallSize=12, brickWidth=25, brickHeight=12;
    brkSt={
      wallSize:wallSize, brickWidth:brickWidth, brickHeight:brickHeight,
      bricks:brkMakeLevel(),
      paddle:{x:200-brickWidth/2, y:440, width:brickWidth*3, height:brickHeight, dx:0},
      ball:{x:130,y:260,width:5,height:5,speed:2,dx:0,dy:0},
      score:0, lives:3, over:false
    };
    document.getElementById('gh-score').textContent='0';
    useKeys(brkKeyDn,brkKeyUp);
    if(brkRAF) cancelAnimationFrame(brkRAF);
    brkRAF=requestAnimationFrame(brkLoop);
  }
  function breakoutStop(){ if(brkRAF){cancelAnimationFrame(brkRAF);brkRAF=null;} brkSt=null; }

  function brkCollides(a,b){ return a.x<b.x+b.width&&a.x+a.width>b.x&&a.y<b.y+b.height&&a.y+a.height>b.y; }

  function brkLoop(){
    brkRAF=requestAnimationFrame(brkLoop);
    var st=brkSt; if(!st) return;
    var cv=document.getElementById('gh-breakout-canvas'), cx=cv.getContext('2d');
    var ws=st.wallSize, pd=st.paddle, bl=st.ball;
    cx.clearRect(0,0,cv.width,cv.height);

    if(!st.over){
      // move paddle
      pd.x+=pd.dx;
      if(pd.x<ws) pd.x=ws;
      else if(pd.x+pd.width>cv.width-ws) pd.x=cv.width-ws-pd.width;
      // move ball
      bl.x+=bl.dx; bl.y+=bl.dy;
      // walls
      if(bl.x<ws){bl.x=ws;bl.dx*=-1;}
      else if(bl.x+bl.width>cv.width-ws){bl.x=cv.width-ws-bl.width;bl.dx*=-1;}
      if(bl.y<ws){bl.y=ws;bl.dy*=-1;}
      // lost ball
      if(bl.y>cv.height){
        st.lives--;
        bl.x=130;bl.y=260;bl.dx=0;bl.dy=0;
        if(st.lives<=0) st.over=true;
      }
      // paddle collision
      if(brkCollides(bl,pd)){ bl.dy*=-1; bl.y=pd.y-bl.height; }
      // brick collision
      for(var i=0;i<st.bricks.length;i++){
        var br=st.bricks[i];
        if(brkCollides(bl,br)){
          st.bricks.splice(i,1);
          st.score+=BRK_SCORE[br.code]||1;
          document.getElementById('gh-score').textContent=st.score;
          if(bl.y+bl.height-bl.speed<=br.y||bl.y>=br.y+br.height-bl.speed) bl.dy*=-1;
          else bl.dx*=-1;
          break;
        }
      }
    }

    // draw walls
    cx.fillStyle='#888'; cx.fillRect(0,0,cv.width,ws); cx.fillRect(0,0,ws,cv.height); cx.fillRect(cv.width-ws,0,ws,cv.height);
    // draw ball
    if(bl.dx||bl.dy){ cx.fillStyle='white'; cx.fillRect(bl.x,bl.y,bl.width,bl.height); }
    // draw bricks
    st.bricks.forEach(function(br){ cx.fillStyle=br.color; cx.fillRect(br.x,br.y,br.width,br.height); });
    // draw paddle
    cx.fillStyle='cyan'; cx.fillRect(pd.x,pd.y,pd.width,pd.height);
    // HUD
    cx.fillStyle='white'; cx.font='11px Courier New'; cx.textAlign='left'; cx.textBaseline='top';
    cx.fillText('LIVES: '+st.lives, ws+2, cv.height-16);
    cx.textAlign='right';
    cx.fillText('SCORE: '+st.score, cv.width-ws-2, cv.height-16);
    // game over / win
    if(st.over||st.bricks.length===0){
      cx.fillStyle='rgba(0,0,0,0.65)'; cx.fillRect(0,cv.height/2-40,cv.width,80);
      cx.fillStyle='#7ef9c0'; cx.font='bold 26px Courier New'; cx.textAlign='center'; cx.textBaseline='middle';
      cx.fillText(st.bricks.length===0?'YOU WIN!':'GAME OVER', cv.width/2, cv.height/2-10);
      cx.font='13px Courier New'; cx.fillStyle='#aabbcc';
      cx.fillText('Score: '+st.score, cv.width/2, cv.height/2+16);
    }
    // launch hint
    if(!bl.dx&&!bl.dy&&!st.over&&st.bricks.length>0){
      cx.fillStyle='rgba(255,255,255,0.5)'; cx.font='12px Courier New'; cx.textAlign='center'; cx.textBaseline='middle';
      cx.fillText('PRESS SPACE TO LAUNCH', cv.width/2, cv.height/2+20);
    }
  }
  function brkKeyDn(e){
    var st=brkSt; if(!st) return;
    if(e.which===37) st.paddle.dx=-4;
    else if(e.which===39) st.paddle.dx=4;
    if(e.which===32){ e.preventDefault(); if(!st.ball.dx&&!st.ball.dy&&!st.over){st.ball.dx=st.ball.speed;st.ball.dy=-st.ball.speed;} }
  }
  function brkKeyUp(e){ var st=brkSt; if(!st) return; if(e.which===37||e.which===39) st.paddle.dx=0; }

  /* ─────────────── PONG (jakesgordon) ─────────────── */
  var pongRunner=null;
  function startPong(){
    document.getElementById('gh-pong-canvas').style.display='block';
    document.getElementById('gh-pong-hint').style.display='block';
    document.getElementById('gh-score-wrap').style.display='none';
    useKeys(null,null);
    var cv=document.getElementById('gh-pong-canvas'); cv.getContext('2d').clearRect(0,0,cv.width,cv.height);
    var pg=Game.start('gh-pong-canvas',Pong,{width:560,height:420,stats:false,sound:false});
    pongRunner=pg?pg.runner:null;
  }
  function pongStop(){ if(pongRunner){pongRunner.stop();pongRunner.removeEvents();pongRunner.showCursor();pongRunner=null;} }

  /* ─────────────── TETRIS (straker) ─────────────── */
  var tetRAF=null, tetSt=null;
  var TG=24, TC=10, TR=20;
  var TS={'I':[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],'J':[[1,0,0],[1,1,1],[0,0,0]],'L':[[0,0,1],[1,1,1],[0,0,0]],'O':[[1,1],[1,1]],'S':[[0,1,1],[1,1,0],[0,0,0]],'Z':[[1,1,0],[0,1,1],[0,0,0]],'T':[[0,1,0],[1,1,1],[0,0,0]]};
  var TC2={'I':'cyan','O':'yellow','T':'purple','S':'#00cc00','Z':'red','J':'#3399ff','L':'orange'};
  function tRI(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
  function tGen(st){var s=['I','J','L','O','S','T','Z'];while(s.length){var r=tRI(0,s.length-1);st.seq.push(s.splice(r,1)[0]);}}
  function tNext(st){if(!st.seq.length)tGen(st);var n=st.seq.pop(),m=TS[n].map(function(r){return r.slice();});return{name:n,matrix:m,row:n==='I'?-1:-2,col:TC/2-Math.ceil(m[0].length/2)};}
  function tRot(m){var N=m.length-1;return m.map(function(r,i){return r.map(function(v,j){return m[N-j][i];});});}
  function tValid(st,m,cr,cc){for(var r=0;r<m.length;r++)for(var c=0;c<m[r].length;c++)if(m[r][c]&&(cc+c<0||cc+c>=TC||cr+r>=TR||(cr+r>=0&&st.board[cr+r][cc+c])))return false;return true;}
  function tPlace(st){
    var p=st.piece;
    for(var r=0;r<p.matrix.length;r++)for(var c=0;c<p.matrix[r].length;c++)if(p.matrix[r][c]){if(p.row+r<0){tOver(st);return;}st.board[p.row+r][p.col+c]=p.name;}
    var cleared=0;
    for(var row=TR-1;row>=0;){if(st.board[row].every(function(v){return!!v;})){for(var rr=row;rr>0;rr--)for(var cc=0;cc<TC;cc++)st.board[rr][cc]=st.board[rr-1][cc];st.board[0]=new Array(TC).fill(0);cleared++;}else row--;}
    if(cleared){var pts=[0,100,300,500,800];st.score+=(pts[cleared]||800);st.lines+=cleared;document.getElementById('gh-tetris-score').textContent=st.score;document.getElementById('gh-tetris-lines').textContent=st.lines;}
    st.piece=st.next;st.next=tNext(st);tDrawNext(st);
  }
  function tOver(st){st.over=true;var cv=document.getElementById('gh-tetris-canvas'),cx=cv.getContext('2d');tDraw(st);cx.fillStyle='rgba(0,0,0,0.72)';cx.fillRect(0,cv.height/2-34,cv.width,68);cx.fillStyle='white';cx.font='bold 28px monospace';cx.textAlign='center';cx.textBaseline='middle';cx.fillText('GAME OVER',cv.width/2,cv.height/2-10);cx.font='13px monospace';cx.fillStyle='#7ef9c0';cx.fillText('Score:'+st.score,cv.width/2,cv.height/2+16);}
  function tDraw(st){var cv=document.getElementById('gh-tetris-canvas'),cx=cv.getContext('2d');cx.fillStyle='#000';cx.fillRect(0,0,cv.width,cv.height);for(var r=0;r<TR;r++)for(var c=0;c<TC;c++)if(st.board[r][c]){cx.fillStyle=TC2[st.board[r][c]];cx.fillRect(c*TG,r*TG,TG-1,TG-1);}if(st.piece){cx.fillStyle=TC2[st.piece.name];for(var pr=0;pr<st.piece.matrix.length;pr++)for(var pc=0;pc<st.piece.matrix[pr].length;pc++)if(st.piece.matrix[pr][pc])cx.fillRect((st.piece.col+pc)*TG,(st.piece.row+pr)*TG,TG-1,TG-1);}}
  function tDrawNext(st){var cv=document.getElementById('gh-tetris-next'),cx=cv.getContext('2d');cx.fillStyle='#0f0f1a';cx.fillRect(0,0,cv.width,cv.height);if(!st.next)return;var sh=st.next.matrix,G=20,ox=Math.floor((4-sh[0].length)/2),oy=Math.floor((4-sh.length)/2);cx.fillStyle=TC2[st.next.name];for(var r=0;r<sh.length;r++)for(var c=0;c<sh[r].length;c++)if(sh[r][c])cx.fillRect((ox+c)*G+4,(oy+r)*G+4,G-1,G-1);}
  function startTetris(){
    document.getElementById('gh-tetris-wrap').style.display='flex';
    document.getElementById('gh-tetris-hint').style.display='block';
    document.getElementById('gh-score-wrap').style.display='none';
    document.getElementById('gh-tetris-score').textContent='0';
    document.getElementById('gh-tetris-lines').textContent='0';
    var board=[];for(var r=0;r<TR;r++)board.push(new Array(TC).fill(0));
    tetSt={board:board,seq:[],score:0,lines:0,cnt:0,over:false,piece:null,next:null};
    tetSt.piece=tNext(tetSt);tetSt.next=tNext(tetSt);tDrawNext(tetSt);
    useKeys(tetKeyDn,null);
    if(tetRAF)cancelAnimationFrame(tetRAF);
    tetRAF=requestAnimationFrame(tetLoop);
  }
  function tetrisStop(){if(tetRAF){cancelAnimationFrame(tetRAF);tetRAF=null;}tetSt=null;}
  function tetLoop(){tetRAF=requestAnimationFrame(tetLoop);var st=tetSt;if(!st||st.over)return;if(++st.cnt>35){st.cnt=0;st.piece.row++;if(!tValid(st,st.piece.matrix,st.piece.row,st.piece.col)){st.piece.row--;tPlace(st);}}tDraw(st);}
  function tetKeyDn(e){var st=tetSt;if(!st||st.over)return;var p=st.piece;
    if(e.which===37){e.preventDefault();if(tValid(st,p.matrix,p.row,p.col-1))p.col--;}
    else if(e.which===39){e.preventDefault();if(tValid(st,p.matrix,p.row,p.col+1))p.col++;}
    else if(e.which===38){e.preventDefault();var rot=tRot(p.matrix);if(tValid(st,rot,p.row,p.col))p.matrix=rot;else if(tValid(st,rot,p.row,p.col-1)){p.col--;p.matrix=rot;}else if(tValid(st,rot,p.row,p.col+1)){p.col++;p.matrix=rot;}}
    else if(e.which===40){e.preventDefault();if(tValid(st,p.matrix,p.row+1,p.col))p.row++;else tPlace(st);}
    else if(e.which===32){e.preventDefault();while(tValid(st,p.matrix,p.row+1,p.col))p.row++;tPlace(st);}
  }

  /* ─────────────── BOMBERMAN (straker) ─────────────── */
  var bmbRAF=null, bmbSt=null;
  var BMB_GRID=40, BMB_ROWS=13, BMB_COLS=15;

  function bmbMakeWallCanvas(){
    var wc=document.createElement('canvas'); wc.width=wc.height=BMB_GRID;
    var wx=wc.getContext('2d'); var g=BMB_GRID;
    wx.fillStyle='black'; wx.fillRect(0,0,g,g);
    wx.fillStyle='white'; wx.fillRect(0,0,g-1,g-1);
    wx.fillStyle='#a9a9a9'; wx.fillRect(1,1,g-3,g-3);
    return wc;
  }
  function bmbMakeSoftWallCanvas(){
    var sc=document.createElement('canvas'); sc.width=sc.height=BMB_GRID;
    var sx=sc.getContext('2d'); var g=BMB_GRID;
    var r=g/64; // scale ratio
    sx.fillStyle='black'; sx.fillRect(0,0,g,g);
    sx.fillStyle='#a9a9a9';
    sx.fillRect(Math.round(1*r), Math.round(1*r),  Math.round(62*r), Math.round(20*r));
    sx.fillRect(0, Math.round(23*r), Math.round(20*r), Math.round(18*r));
    sx.fillRect(Math.round(22*r), Math.round(23*r), Math.round(42*r), Math.round(18*r));
    sx.fillRect(0, Math.round(43*r), Math.round(42*r), Math.round(20*r));
    sx.fillRect(Math.round(44*r), Math.round(43*r), Math.round(20*r), Math.round(20*r));
    return sc;
  }

  var BMB_TYPES={wall:'\u2589',softWall:1,bomb:2};
  var BMB_TEMPLATE=[
    ['\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589'],
    ['\u2589','x','x',null,null,null,null,null,null,null,null,null,'x','x','\u2589'],
    ['\u2589','x','\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589','x','\u2589'],
    ['\u2589','x',null,null,null,null,null,null,null,null,null,null,null,'x','\u2589'],
    ['\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589'],
    ['\u2589',null,null,null,null,null,null,null,null,null,null,null,null,null,'\u2589'],
    ['\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589'],
    ['\u2589',null,null,null,null,null,null,null,null,null,null,null,null,null,'\u2589'],
    ['\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589'],
    ['\u2589','x',null,null,null,null,null,null,null,null,null,null,null,'x','\u2589'],
    ['\u2589','x','\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589',null,'\u2589','x','\u2589'],
    ['\u2589','x','x',null,null,null,null,null,null,null,null,null,'x','x','\u2589'],
    ['\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589','\u2589']
  ];

  function bmbGenLevel(){
    var cells=[];
    for(var r=0;r<BMB_ROWS;r++){
      cells[r]=[];
      for(var c=0;c<BMB_COLS;c++){
        if(!BMB_TEMPLATE[r][c]&&Math.random()<0.90) cells[r][c]=BMB_TYPES.softWall;
        else if(BMB_TEMPLATE[r][c]===BMB_TYPES.wall) cells[r][c]=BMB_TYPES.wall;
        else cells[r][c]=null;
      }
    }
    return cells;
  }

  function bmbBlowUp(bomb, cells, entities){
    if(!bomb.alive) return;
    bomb.alive=false;
    cells[bomb.row][bomb.col]=null;
    var dirs=[{row:-1,col:0},{row:1,col:0},{row:0,col:-1},{row:0,col:1}];
    dirs.forEach(function(dir){
      for(var i=0;i<bomb.size;i++){
        var row=bomb.row+dir.row*i, col=bomb.col+dir.col*i;
        var cell=cells[row][col];
        if(cell===BMB_TYPES.wall) return;
        entities.push({type:'exp',row:row,col:col,dir:dir,center:i===0,alive:true,timer:300,
          update:function(dt){this.timer-=dt;if(this.timer<=0)this.alive=false;},
          render:function(ctx,g){
            var x=this.col*g,y=this.row*g,h=this.dir.col,v=this.dir.row;
            ctx.fillStyle='#D72B16';ctx.fillRect(x,y,g,g);
            ctx.fillStyle='#F39642';
            if(this.center||h){ctx.fillRect(x,y+g*0.09,g,g*0.81);}
            if(this.center||v){ctx.fillRect(x+g*0.09,y,g*0.81,g);}
            ctx.fillStyle='#FFE5A8';
            if(this.center||h){ctx.fillRect(x,y+g*0.19,g,g*0.625);}
            if(this.center||v){ctx.fillRect(x+g*0.19,y,g*0.625,g);}
          }
        });
        cells[row][col]=null;
        if(cell===BMB_TYPES.bomb){
          var nb=entities.find(function(e){return e.type===BMB_TYPES.bomb&&e.row===row&&e.col===col;});
          if(nb) bmbBlowUp(nb,cells,entities);
        }
        if(cell) return;
      }
    });
  }

  function startBomberman(){
    document.getElementById('gh-bomberman-canvas').style.display='block';
    document.getElementById('gh-bomberman-hint').style.display='block';
    document.getElementById('gh-score-wrap').style.display='none';
    var wallC=bmbMakeWallCanvas(), softC=bmbMakeSoftWallCanvas();
    var cells=bmbGenLevel();
    var entities=[];
    var player={row:1,col:1,numBombs:1,bombSize:3,alive:true};
    bmbSt={cells:cells,entities:entities,player:player,wallC:wallC,softC:softC,last:null};
    useKeys(bmbKeyDn,null);
    if(bmbRAF) cancelAnimationFrame(bmbRAF);
    bmbRAF=requestAnimationFrame(bmbLoop);
  }
  function bombermanStop(){if(bmbRAF){cancelAnimationFrame(bmbRAF);bmbRAF=null;}bmbSt=null;}

  function bmbLoop(ts){
    bmbRAF=requestAnimationFrame(bmbLoop);
    var st=bmbSt; if(!st) return;
    var cv=document.getElementById('gh-bomberman-canvas'), ctx=cv.getContext('2d');
    var g=BMB_GRID;
    if(!st.last) st.last=ts;
    var dt=ts-st.last; st.last=ts;

    ctx.clearRect(0,0,cv.width,cv.height);

    // draw grid cells
    for(var r=0;r<BMB_ROWS;r++)
      for(var c=0;c<BMB_COLS;c++){
        if(st.cells[r][c]===BMB_TYPES.wall) ctx.drawImage(st.wallC,c*g,r*g);
        else if(st.cells[r][c]===BMB_TYPES.softWall) ctx.drawImage(st.softC,c*g,r*g);
      }

    // update & render entities
    st.entities.forEach(function(e){
      e.update(dt);
      e.render(ctx,g);
    });
    st.entities=st.entities.filter(function(e){return e.alive;});

    // check player death from explosion
    if(st.player.alive){
      var hit=st.entities.some(function(e){return e.type==='exp'&&e.row===st.player.row&&e.col===st.player.col;});
      if(hit) st.player.alive=false;
    }

    // draw player
    if(st.player.alive){
      var px=(st.player.col+0.5)*g, py=(st.player.row+0.5)*g;
      ctx.fillStyle='white'; ctx.beginPath(); ctx.arc(px,py,g*0.35,0,2*Math.PI); ctx.fill();
      // face
      ctx.fillStyle='black';
      ctx.beginPath(); ctx.arc(px-g*0.1,py-g*0.05,g*0.06,0,2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(px+g*0.1,py-g*0.05,g*0.06,0,2*Math.PI); ctx.fill();
      ctx.beginPath(); ctx.arc(px,py+g*0.08,g*0.1,0,Math.PI); ctx.fill();
    } else {
      // game over overlay
      ctx.fillStyle='rgba(0,0,0,0.6)'; ctx.fillRect(0,cv.height/2-36,cv.width,72);
      ctx.fillStyle='#ff4466'; ctx.font='bold 26px Courier New'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('YOU DIED', cv.width/2, cv.height/2-8);
      ctx.font='13px Courier New'; ctx.fillStyle='#aabbcc';
      ctx.fillText('Back to menu to restart', cv.width/2, cv.height/2+18);
    }
  }

  function bmbKeyDn(e){
    var st=bmbSt; if(!st||!st.player.alive) return;
    var p=st.player, row=p.row, col=p.col;
    if(e.which===37){e.preventDefault();col--;}
    else if(e.which===38){e.preventDefault();row--;}
    else if(e.which===39){e.preventDefault();col++;}
    else if(e.which===40){e.preventDefault();row++;}
    else if(e.which===32){
      e.preventDefault();
      var activeBombs=st.entities.filter(function(en){return en.type===BMB_TYPES.bomb&&en.owner===p;}).length;
      if(!st.cells[p.row][p.col]&&activeBombs<p.numBombs){
        var bomb={type:BMB_TYPES.bomb,row:p.row,col:p.col,size:p.bombSize,owner:p,alive:true,timer:3000,radius:BMB_GRID*0.4,
          update:function(dt){
            this.timer-=dt;
            if(this.timer<=0){bmbBlowUp(this,st.cells,st.entities);return;}
            var interval=Math.ceil(this.timer/500);
            this.radius=interval%2===0?BMB_GRID*0.4:BMB_GRID*0.5;
          },
          render:function(ctx,g){
            var x=(this.col+0.5)*g, y=(this.row+0.5)*g;
            ctx.fillStyle='black'; ctx.beginPath(); ctx.arc(x,y,this.radius,0,2*Math.PI); ctx.fill();
            var fy=this.radius===g*0.5?g*0.15:0;
            ctx.strokeStyle='white'; ctx.lineWidth=Math.max(2,g*0.07);
            ctx.beginPath(); ctx.arc((this.col+0.75)*g,(this.row+0.25)*g-fy,g*0.15,Math.PI,-Math.PI/2); ctx.stroke();
          }
        };
        st.entities.push(bomb);
        st.cells[p.row][p.col]=BMB_TYPES.bomb;
      }
      return;
    }
    // move if cell is free
    if(row>=0&&row<BMB_ROWS&&col>=0&&col<BMB_COLS&&!st.cells[row][col]){
      p.row=row; p.col=col;
    }
  }

  /* ─────────────── FROGGER (straker) ─────────────── */
  var frogRAF=null, frogSt=null;
  var FROG_GRID=32, FROG_GAP=7;
  function FrogSprite(props){Object.assign(this,props);}
  FrogSprite.prototype.render=function(ctx){
    ctx.fillStyle=this.color;
    if(this.shape==='rect'){ctx.fillRect(this.x,this.y+FROG_GAP/2,this.size,FROG_GRID-FROG_GAP);}
    else{ctx.beginPath();ctx.arc(this.x+this.size/2,this.y+this.size/2,this.size/2-FROG_GAP/2,0,2*Math.PI);ctx.fill();}
  };
  function frogBuildRows(W){
    var G=FROG_GRID;
    var patterns=[
      null,
      {spacing:[2],color:'#c55843',size:G*4,shape:'rect',speed:0.5},
      {spacing:[0,2,0,2,0,2,0,4],color:'#de0004',size:G,shape:'circle',speed:-0.67},
      {spacing:[2],color:'#c55843',size:G*7,shape:'rect',speed:1.0},
      {spacing:[3],color:'#c55843',size:G*3,shape:'rect',speed:0.33},
      {spacing:[0,0,1],color:'#de0004',size:G,shape:'circle',speed:-0.67},
      null,
      {spacing:[3,8],color:'#c2c4da',size:G*2,shape:'rect',speed:-0.67},
      {spacing:[14],color:'#c2c4da',size:G,shape:'rect',speed:0.5},
      {spacing:[3,3,7],color:'#de3cdd',size:G,shape:'rect',speed:-0.5},
      {spacing:[3,3,7],color:'#0bcb00',size:G,shape:'rect',speed:0.33},
      {spacing:[4],color:'#e5e401',size:G,shape:'rect',speed:-0.33},
      null
    ];
    var rows=[];
    for(var i=0;i<patterns.length;i++){
      rows[i]=[];
      var pat=patterns[i]; if(!pat) continue;
      var tw=pat.spacing.reduce(function(a,s){return a+s;},0)*G+pat.spacing.length*pat.size;
      var endX=0; while(endX<W)endX+=tw; endX+=tw;
      var x=0,idx=0;
      while(x<endX){rows[i].push(new FrogSprite({x:x,y:G*(i+1),index:idx,color:pat.color,size:pat.size,shape:pat.shape,speed:pat.speed}));x+=pat.size+pat.spacing[idx]*G;idx=(idx+1)%pat.spacing.length;}
    }
    return{rows:rows,patterns:patterns};
  }
  function startFrogger(){
    document.getElementById('gh-frogger-canvas').style.display='block';
    document.getElementById('gh-frogger-hint').style.display='block';
    document.getElementById('gh-score-wrap').style.display='none';
    var G=FROG_GRID,built=frogBuildRows(416);
    frogSt={rows:built.rows,patterns:built.patterns,frogger:new FrogSprite({x:G*6,y:G*13,color:'greenyellow',size:G,shape:'circle',speed:0}),scoredFroggers:[]};
    useKeys(frogKeyDn,null);
    if(frogRAF)cancelAnimationFrame(frogRAF);
    frogRAF=requestAnimationFrame(frogLoop);
  }
  function froggerStop(){if(frogRAF){cancelAnimationFrame(frogRAF);frogRAF=null;}frogSt=null;}
  function frogLoop(){
    frogRAF=requestAnimationFrame(frogLoop);
    var st=frogSt;if(!st)return;
    var cv=document.getElementById('gh-frogger-canvas'),ctx=cv.getContext('2d'),W=cv.width,H=cv.height,G=FROG_GRID;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle='#000047';ctx.fillRect(0,G,W,G*6);
    ctx.fillStyle='#1ac300';ctx.fillRect(0,G,W,4);ctx.fillRect(0,G,4,G);ctx.fillRect(W-4,G,4,G);
    for(var i=0;i<4;i++)ctx.fillRect(G+G*3*i,G,G*2,G);
    ctx.fillStyle='#8500da';ctx.fillRect(0,7*G,W,G);ctx.fillRect(0,H-G*2,W,G);
    for(var r=0;r<st.rows.length;r++){
      var row=st.rows[r];
      for(var j=0;j<row.length;j++){
        var spr=row[j];spr.x+=spr.speed;spr.render(ctx);
        if(spr.speed<0&&spr.x<0-spr.size){var rm=spr;for(var k=0;k<row.length;k++)if(row[k].x>rm.x)rm=row[k];var sp=st.patterns[r].spacing;spr.x=rm.x+rm.size+sp[rm.index]*G;spr.index=(rm.index+1)%sp.length;}
        if(spr.speed>0&&spr.x>W){var lm=spr;for(var k=0;k<row.length;k++)if(row[k].x<lm.x)lm=row[k];var sp2=st.patterns[r].spacing,li=lm.index-1;li=li>=0?li:sp2.length-1;spr.x=lm.x-sp2[li]*G-spr.size;spr.index=li;}
      }
    }
    st.frogger.x+=st.frogger.speed||0;st.frogger.render(ctx);
    st.scoredFroggers.forEach(function(f){f.render(ctx);});
    var fRow=(st.frogger.y/G-1)|0;if(fRow<0)fRow=0;if(fRow>=st.rows.length)fRow=st.rows.length-1;
    var coll=false;
    for(var i=0;i<st.rows[fRow].length;i++){
      var s2=st.rows[fRow][i];
      if(st.frogger.x<s2.x+s2.size-FROG_GAP&&st.frogger.x+G-FROG_GAP>s2.x&&st.frogger.y<s2.y+G&&st.frogger.y+G>s2.y){
        coll=true;
        if(fRow>st.rows.length/2){st.frogger.x=G*6;st.frogger.y=G*13;st.frogger.speed=0;}
        else st.frogger.speed=s2.speed;
      }
    }
    if(!coll){
      st.frogger.speed=0;
      var col=(st.frogger.x+G/2)/G|0;
      if(fRow===0&&col%3===0&&!st.scoredFroggers.find(function(f){return f.x===col*G;})){
        st.scoredFroggers.push(new FrogSprite({x:col*G,y:st.frogger.y+4,color:'greenyellow',size:G,shape:'circle'}));
        st.frogger.x=G*6;st.frogger.y=G*13;st.frogger.speed=0;
      }
      if(fRow<st.rows.length/2-1){st.frogger.x=G*6;st.frogger.y=G*13;st.frogger.speed=0;}
    }
  }
  function frogKeyDn(e){
    var st=frogSt;if(!st)return;var G=FROG_GRID,f=st.frogger;
    if(e.which===37){e.preventDefault();f.x-=G;}else if(e.which===39){e.preventDefault();f.x+=G;}
    else if(e.which===38){e.preventDefault();f.y-=G;}else if(e.which===40){e.preventDefault();f.y+=G;}
    var cv=document.getElementById('gh-frogger-canvas');
    f.x=Math.min(Math.max(0,f.x),cv.width-G);f.y=Math.min(Math.max(G,f.y),cv.height-G*2);
  }
}

function ShowGameHub() {
  var el = document.getElementById('gh-overlay');
  if (el) el.style.display = 'flex';
}
