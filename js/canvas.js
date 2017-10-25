    var Meteor = function(x, y){
        var _x = x;
        var _y = y;
    
        var _radius = 16;
    
        function draw(ctx){
            ctx.beginPath();
            ctx.arc(_x, _y, _radius, 70, 0 , Math.PI, false);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }  
        return {
            draw: draw,
        };
    };

    var Ship = function(x, y){
        var _x = x;
        var _y = y;

        function draw(ctx){
            
            ctx.save()
            //   ctx.translate(state.position.x, state.position.y)
            //   ctx.rotate((Math.PI/180) * state.rotation)
            
              ctx.strokeStyle = 'white'
              ctx.lineWidth = 2
              ctx.beginPath ()
              ctx.moveTo(0, 0)
              ctx.lineTo(10, 10)
              ctx.lineTo(0, -20)
              ctx.lineTo(-10, 10)
              ctx.lineTo(0, 0)
              ctx.closePath()
              ctx.stroke()
              ctx.restore()
        }
        return{
            draw: draw,
        }
    }