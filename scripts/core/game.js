//IIFA 
(function () {
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function init() {
        console.log("Started the intilaization");
        start();
    }
    function start() {
        console.log("stating application");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 0 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        helloLabel.rotation -= 5;
        stage.update(); //redraws stage
    }
    function Main() {
        console.log("Game Started......");
        helloLabel = new createjs.Text("Hello world", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = init;
})();
//# sourceMappingURL=game.js.map