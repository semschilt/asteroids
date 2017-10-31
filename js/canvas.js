    var Meteor = function(x, y, state){
        var _x = x;
        var _y = y;
        var _radius = 16;

        var _state = state;

        function draw(){
            var ctx = state.getContext();

            ctx.beginPath();
            ctx.arc(_x, _y, _radius, 70, 0 , Math.PI, false);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.stroke();
        }

        function update(deltaTime){
            
        }

        return {
            draw: draw,
            update: update,
        };
    };

    var Ship = function(x, y, state){
        var _x = x;
        var _y = y;
        var _width = 10;
        var _height = 10;
        var _speed = 2;
        var _direction = 45;

        var _state = state;

        function draw(){
            var ctx = state.getContext();

            ctx.fillStyle = Math.random() > 0.5 ? 'red' : 'hotpink';
            ctx.fillRect(_x - (_width/2), _y - (_height/2), _width, _height);
        }

        function update(deltaTime){

            var canvasSize = state.getCanvasSize();

            _x += Math.cos(_direction/180 * Math.PI) * _speed;
            _y += Math.sin(_direction/180 * Math.PI) * _speed;
            
            _direction += Math.random()>0.95 ? Math.random()*90-45 : 0;
            _speed = Math.random()*3+1;
            _width = Math.random()*9+1;
            _height = Math.random()*9+1;

            if(_x > canvasSize.w) { 
                _x = 0;
            } else if(_x < 0) {
                _x = canvasSize.w;
            }

            if(_y > canvasSize.h) {
                _y = 0;
            } else if(_y < 0) {
                _y = canvasSize.h;
            }
        }

        return{
            draw: draw,
            update: update,
        }
    }