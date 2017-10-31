'use strict';

var State = function(canvas){
    var _canvas = canvas;
    var _ctx = _canvas.getContext('2d');
    var _canvasSize = {
        w: _canvas.width,
        h: _canvas.height
    };
    var _currentKeyState = {};
    var _registeredKeyHandlers = {
        'KeyA': 'left',
        'KeyD': 'right',
        'KeyW': 'up',
        'KeyS': 'down',
    }

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

    function handleKeyPresses(code){
        if(_registeredKeyHandlers[code]) {
            _currentKeyState[_registeredKeyHandlers[code]] = true;
            console.log(_currentKeyState);
            return _registeredKeyHandlers[code];
        }
        return false;
    }

    function resetKeyState(){
        _currentKeyState = {};
    }

    return {
        getCanvas,
        getContext,
        getCanvasSize,
        getCanvasWidth,
        getCanvasHeight,
        handleKeyPresses,
        resetKeyState
    }
}