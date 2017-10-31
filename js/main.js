var game = (function(){
    
    var gameObjects;
    var lastRender = 0;
    var state;
    

    function init(){
        var canvasElement = document.getElementById('canvas');
        state = new State(canvasElement);
        gameObjects = [];
        loop();
        createMeteor();
        createShip();
        createShip();
        createShip();
        createShip();
        createShip();
    }

    function update(deltaTime){
        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].update(deltaTime);
        }
    }

    function draw(){
         var ctx = state.getContext();
        // Draw the state of the world
        ctx.clearRect(0, 0, state.getCanvasWidth(), state.getCanvasHeight());

        for (var i = 0; i < gameObjects.length; i++) {
            var fillStyle = ctx.fillStyle;
            gameObjects[i].draw(); 
            ctx.fillStyle = fillStyle;      
        }
    }

    function loop(timestamp){
        // Update (changes to objects on screen)
        // Draw (render objects to screen)
        var deltaTime = timestamp - lastRender;

        update(deltaTime);
        draw();

        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }
    
    function createShip(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Ship(x, y, state));
    }

    function createMeteor(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Meteor(x, y, state));
    }
    
    return{
        init,
        update,
    }
})();