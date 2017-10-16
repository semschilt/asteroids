var game = (function(){
    
    var gameObjects;
    var canvasElement;
    var ctx;
    var FPS = 30;

    function init(){
        canvasElement = document.getElementById('canvas');
        ctx = canvasElement.getContext('2d'); 
        gameObjects = [];
        setInterval(gameLoop, 1000/FPS);
    }

    function gameLoop(){
        // Update (changes to objects on screen)
        // Draw (render objects to screen)
    }

    function update(){
        animation = window.requestAnimationFrame(update);
            // if(){
            //     // 
            // }else{
            //     //load objects in.
            // }
    }

    function run(){
        for (var i = 0; i < gameObjects.length; i++) {
            gameObjects[i].draw(ctx);
            
        }
    }

    function createShip(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Ship(x, y));
        run()
    }

    function createMeteor(){
        var x = Math.floor(Math.random()*641);
        var y = Math.floor(Math.random()*481);
        gameObjects.push(new Meteor(x, y));
        run()
    }
    
    return{
        init,
        run,
        createShip,
        createMeteor,
    }
})();