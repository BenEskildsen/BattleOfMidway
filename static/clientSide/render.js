var width = 600;
var height = 750;
var backgroundColor = "steelblue";
var selectedComp = null;

client.exports.render = function(renderData) {
    // console.log(renderData.objects);

    var canvas = document.getElementById("c").getContext("2d");

    // clear canvas
    canvas.fillStyle = backgroundColor;
    canvas.fillRect(0, 0, width, height);

    for (var i = 0; i < renderData.objects.length; i++) {
        var obj = renderData.objects[i];
        renderObject(canvas, obj, renderFunctions[obj.name](canvas, obj));
    }
}

function renderObject(canvas, obj, renderFunc /* callback */) {
    canvas.save();
    canvas.translate(obj.x, obj.y);
    canvas.rotate(obj.angle);
    renderFunc();
    canvas.translate(-1 * obj.x, -1 * obj.y);

    canvas.restore();
}

