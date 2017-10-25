var game = (function(){
    
    var gameObjects;
    var canvasElement;
    var ctx;
    var lastRender = 0;

    function init(){
        canvasElement = document.getElementById('canvas');
        ctx = canvasElement.getContext('2d'); 
        gameObjects = [];
        loop();
        createMeteor();
        createShip();
    }

    function update(progress){
        // Update the state of the world for the elapsed time since last render
        // gameObjects = [];
        // createShip();
        // createMeteor();
    }

    function draw(){
        // Draw the state of the world
        ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);

        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].draw(ctx);       
        }
    }

    function loop(timestamp){
        // Update (changes to objects on screen)
        // Draw (render objects to screen)
        var progress = timestamp - lastRender;

        update(progress);
        draw();

        lastRender = timestamp;
        window.requestAnimationFrame(loop);
    }
    
    function createShip(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Ship(x, y));
    }

    function createMeteor(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Meteor(x, y));
    }
    
    return{
        init,
    }
})();