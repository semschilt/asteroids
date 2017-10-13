    var Ship = function(x, y){
        var _x = x;
        var _y = y;
    
        var _radius = 16;
    
        function draw(ctx){
            ctx.beginPath();
            ctx.arc(_x, _y, _radius, 0, 2 * Math.PI, false);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }  
        return {
            draw: draw,
        };
    };

    var Meteor = function(x, y){
        var _x = x;
        var _y = y;

        function draw(ctx){
            var i = 0.2;

            ctx.beginPath();
            ctx.moveTo(170 * i, 80 * i);
            ctx.bezierCurveTo(130 * i, 100 * i, 130 * i, 150 * i, 230 * i,150 * i);
            ctx.bezierCurveTo(250 * i, 180 * i, 320 * i, 180 * i, 340* i, 150 * i);
            ctx.bezierCurveTo(420 * i, 150 * i, 420 * i, 120 * i, 390* i, 100 * i);
            ctx.bezierCurveTo(430 * i, 40 * i, 370 * i, 30 * i, 340* i, 50 * i);
            ctx.bezierCurveTo(320 * i, 5 * i, 250 * i, 20 * i, 250* i, 50 * i);
            ctx.bezierCurveTo(200 * i, 5 * i, 150 * i, 20 * i, 170* i, 80 * i);
      
            // complete custom shape
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'blue';
            ctx.stroke();
        }
        return{
            draw: draw,
        }
    }