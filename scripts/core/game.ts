
//IIFA 
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel;
function init() : void{

    console.log("Started the intilaization");
   start();

}

function start(): void{
    console.log("stating application");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.framerate =60; // 0 FPS

    createjs.Ticker.on("tick",Update);
    Main();
}

function Update(): void{
    helloLabel.rotation -=5;
    stage.update(); //redraws stage
}

function Main(): void{

console.log("Game Started......");
helloLabel = new createjs.Text("Hello world","40px Consolas","#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
}

window.onload = init;
})();
