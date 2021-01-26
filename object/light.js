class Light {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      this.GetVertexColor(pointsArray, colorsArray);
    }

    static GetVertexColor(pointsArray, colorsArray){
      var texCoord=[ //
      vec2(0.73, 0.49),//오른쪽 위
      vec2(0.73, 0.01),//오른쪽 아래
        vec2(0.63, 0.01),//왼쪽 아래
        vec2(0.63, 0.49),//왼쪽 위
      ];


      for(var i = 0 ; i < 1 ; i++){
        this.quad( pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }
      // for(var i = 0 ; i < 36; i++){
      //   texCoordsArray.push(vec2(0, 0));
      // }
      for(var i = 0;i<6;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }

    }
	// Draw Vertex
    static GetDraw(drawlist) {
        var scale = vec4(1.0, 1.0, 1.0, 1.0);
        drawlist.push([gl.TRIANGLES, 36, scale]);
        return drawlist;
    }


    static quad(pointsArray, colorsArray, a, b, c, d)
    {
      var vertices = [
        //1
        vec4( -0.15,  0.0,  0.02, 1.0 ), //0
        vec4( -0.15,  0.6,  0.02, 1.0 ), //1
        vec4(  0.1,  0.6,  0.02, 1.0 ), //2
        vec4(  0.1,  0.0,  0.02, 1.0 ), //3
        vec4( -0.15,  0.0, 0.0, 1.0 ), //4
        vec4( -0.15,  0.6, 0.0, 1.0 ), //5
        vec4(  0.1,  0.6, 0.0, 1.0 ), //6
        vec4(  0.1,  0.0, 0.0, 1.0 ),  //7

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

      ];

      // We need to parition the quad into two triangles in order for
      // WebGL to be able to render it.  In this case, we create two
      // triangles from the quad indices

      //vertex color assigned by the index of the vertex

      var indices = [ a, b, c, a, c, d];

      for ( var i = 0; i < indices.length; ++i ) {
          pointsArray.push( vertices[indices[i]] );

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
