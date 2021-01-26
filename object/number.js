class Number {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      this.GetVertexColor(pointsArray, colorsArray);
    }

    static GetVertexColor(pointsArray, colorsArray){

      //1
      pointsArray.push(vec4(-0.05, 0.05, 0.0, 1.0));
      pointsArray.push(vec4(-0.05, -0.05, 0.0, 1.0));
      //9
      pointsArray.push(vec4(0.1/2, 0.1/2, 0.0, 1.0));
      pointsArray.push(vec4(0, 0.1/2, 0.0, 1.0));
      pointsArray.push(vec4(0, 0, 0, 1.0));
      pointsArray.push(vec4(0.1/2, 0, 0, 1.0));

      pointsArray.push(vec4(0.1/2, 0.1/2, 0, 1.0));
      pointsArray.push(vec4(0.1/2, -0.1/2, 0, 1.0));
      //3
      pointsArray.push(vec4(-0.025, 0.05, 0, 1.0));
      pointsArray.push(vec4(0.05, 0.05, 0, 1.0));
      pointsArray.push(vec4(-0.025, 0.0, 0, 1.0));
      pointsArray.push(vec4(0.05, 0.0, 0, 1.0));
      pointsArray.push(vec4(-0.025, -0.05, 0, 1.0));
      pointsArray.push(vec4(0.05, -0.05, 0, 1.0));
      pointsArray.push(vec4(0.05, 0.05, 0, 1.0));
      pointsArray.push(vec4(0.05, -0.05, 0, 1.0));
      //5
      pointsArray.push(vec4(0.025, 0.05, 0, 1.0));
      pointsArray.push(vec4(-0.05, 0.05, 0, 1.0));
      pointsArray.push(vec4(-0.05, 0.0, 0, 1.0));
      pointsArray.push(vec4(0.025, 0.0, 0, 1.0));
      pointsArray.push(vec4(0.025, -0.05, 0, 1.0));
      pointsArray.push(vec4(-0.05, -0.05, 0, 1.0));



      for(var i = 0; i< 22;i++){
        colorsArray.push(vec4(0.0, 0.0, 0.0, 1.0));
      }
      for(var i = 0;i<22;i++){
          texCoordsArray.push(vec2(0, 0));
      }

    }
	// Draw Vertex
    static GetDraw(drawlist) {

        var scale = vec4(0.5, 0.5, 0.5, 1.0);
        //1
        drawlist.push([gl.LINES, 2, scale]);
        //9
        drawlist.push([gl.LINE_LOOP, 4, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        //3
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        //5
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        drawlist.push([gl.LINES, 2, scale]);
        return drawlist;
    }


    static quad(pointsArray, colorsArray, a, b, c, d)
    {
      var vertices = [
        //1
        vec4( -0.6,  0.0,  0.01, 1.0 ), //0
        vec4( -0.6,  1.5,  0.01, 1.0 ), //1
        vec4(  0.6,  1.51,  0.01, 1.0 ), //2
        vec4(  0.6,  0.0,  0.01, 1.0 ), //3
        vec4( -0.6,  0.0, 0.0, 1.0 ), //4
        vec4( -0.6,  1.5, 0.0, 1.0 ), //5
        vec4(  0.6,  1.51, 0.0, 1.0 ), //6
        vec4(  0.6,  0.0, 0.0, 1.0 ),  //7

      ];

      var vertexColors = [
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        vec4(0.77, 0.77, 0.77, 1.0),
        // [ 0.0, 0.0, 0.0, 1.0 ],  // black
        // [ 0.2, 0.2, 0.2, 1.0 ],  // dark gray
        // [ 0.2, 0.2, 0.2, 1.0 ],  // dark gray
        // [ 0.5, 0.5, 0.5, 1.0 ],  // gray
        // [ 0.2, 0.2, 0.2, 1.0 ],  // dark gray
        // [ 0.2, 0.2, 0.2, 1.0 ],  // dark gray
        // [ 0.5, 0.5, 0.5, 1.0 ],  // gray
        // [ 1.0, 1.0, 1.0, 1.0 ]   // white
      ];

      // We need to parition the quad into two triangles in order for
      // WebGL to be able to render it.  In this case, we create two
      // triangles from the quad indices

      //vertex color assigned by the index of the vertex

      var indices = [ a, b, c, a, c, d];

      for ( var i = 0; i < indices.length; ++i ) {
          pointsArray.push( vertices[indices[i]] );

          // for interpolated colors use
          //colors.push( vertexColors[indices[i]] );

          // for solid colored faces use
          colorsArray.push(vertexColors[ a % 8 ]);
      }
    }

    static DrawCycleColor(colors, color) {
        for (var i = 0; i < 362; i++) {
            colors.push(color);
        }
    }
    static DrawCycle(vertices, ox, oy, d, sx = 1, sy = 1) {
        var start = vertices.length;
        vertices.push(vec2(ox, oy));

        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
            var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
            vertices.push(vec2(x, y));
        }
        return [gl.TRIANGLE_FAN, start, 362];
    }
    static DrawRect(vertices, x1, y1, x2, y2) {
        vertices.push(vec2(x1, y1));
        vertices.push(vec2(x2, y1));
        vertices.push(vec2(x2, y2));
        vertices.push(vec2(x1, y2));
    }
    static DrawRectColor(colors, color) {
        for (var i = 0; i < 4; i++) {
            colors.push(color);
        }
    }
}
