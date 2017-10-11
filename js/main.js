var canvas = (function (){

    // Get element
    var element = document.getElementById('canvas');

    //define context
    var ctx = element.getContext('2d');

    //update canvas objects
    function draw(){
        ship.draw(ctx);
    }

    return {draw};
})();


var ship = (function(){
    var centerX = 64;
    var centerY = 64;

    var radius = 16;

    function draw(ctx){
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }  
    return {
        draw: draw,
    };
})();

    