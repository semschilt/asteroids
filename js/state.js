var State = function(canvas){
    var _canvas = canvas;
    var _ctx = _canvas.getContext('2d');
    var _canvasSize = {
        w: _canvas.width,
        h: _canvas.height
    };

    function getCanvas() {
        return _canvas;
    }

    function getContext() {
        return _ctx;
    }

    function getCanvasSize() {
        return _canvasSize;
    }

    function getCanvasWidth() {
        return _canvasSize.w;
    }

    function getCanvasHeight() {
        return _canvasSize.h;
    }

    return {
        getCanvas,
        getContext,
        getCanvasSize,
        getCanvasWidth,
        getCanvasHeight
    }
}