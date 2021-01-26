class Desk {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      this.GetVertexColor(pointsArray, colorsArray, texCoordsArray);
    }

    static GetVertexColor(pointsArray, colorsArray, texCoordsArray){
      var texCoord=[ //
        vec2(0.5, 0.5),//왼쪽 아래
        vec2(0.5, 1),//왼쪽 위
        vec2(0.74, 1),//오른쪽 위
        vec2(0.74, 0.5)//오른쪽 아래
      ];

      for(var i = 0 ; i < 5 ; i++){
        this.quad( pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }
      for(var i = 0;i<30;i++){
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
        var scale = vec4(0.6, 0.6, 0.6, 1.0);

        drawlist.push([gl.TRIANGLES, 180, scale]);
        return drawlist;
    }


    static quad(pointsArray, colorsArray, a, b, c, d)
    {
        var vertices = [
          vec4( -0.45,  0.4,  0.3, 1.0 ), //0
          vec4( -0.45,  0.5,  0.3, 1.0 ), //1
          vec4(  0.45,  0.5,  0.3, 1.0 ), //2
          vec4(  0.45,  0.4,  0.3, 1.0 ), //3
          vec4( -0.45,  0.4, -0.3, 1.0 ), //4
          vec4( -0.45,  0.5, -0.3, 1.0 ), //5
          vec4(  0.45,  0.5, -0.3, 1.0 ), //6
          vec4(  0.45,  0.4, -0.3, 1.0 ),  //7

          //first
          vec4( -0.4,  0.0,  0.3, 1.0 ), //0
          vec4( -0.4,  0.4,  0.3, 1.0 ), //1
          vec4( -0.3,  0.4,  0.3, 1.0 ), //2
          vec4( -0.3,  0.0,  0.3, 1.0 ), //3
          vec4( -0.4,  0.0,  0.2, 1.0 ), //4
          vec4( -0.4,  0.4,  0.2, 1.0 ), //5
          vec4( -0.3,  0.4,  0.2, 1.0 ), //6
          vec4( -0.3,  0.0,  0.2, 1.0 ),  //7


          //second
          vec4( 0.3,  0.0,  0.3, 1.0 ), //0
          vec4( 0.3,  0.4,  0.3, 1.0 ), //1
          vec4( 0.4,  0.4,  0.3, 1.0 ), //2
          vec4( 0.4,  0.0,  0.3, 1.0 ), //3
          vec4( 0.3,  0.0,  0.2, 1.0 ), //4
          vec4( 0.3,  0.4,  0.2, 1.0 ), //5
          vec4( 0.4,  0.4,  0.2, 1.0 ), //6
          vec4( 0.4,  0.0,  0.2, 1.0 ),  //7

          //third
          vec4( -0.4,  0.0, -0.2, 1.0 ), //0
          vec4( -0.4,  0.4, -0.2, 1.0 ), //1
          vec4( -0.3,  0.4, -0.2, 1.0 ), //2
          vec4( -0.3,  0.0, -0.2, 1.0 ), //3
          vec4( -0.4,  0.0, -0.3, 1.0 ), //4
          vec4( -0.4,  0.4, -0.3, 1.0 ), //5
          vec4( -0.3,  0.4, -0.3, 1.0 ), //6
          vec4( -0.3,  0.0, -0.3, 1.0 ),  //7

          //fourth
          vec4(  0.3,  0.0, -0.2, 1.0 ), //0
          vec4(  0.3,  0.4, -0.2, 1.0 ), //1
          vec4(  0.4,  0.4, -0.2, 1.0 ), //2
          vec4(  0.4,  0.0, -0.2, 1.0 ), //3
          vec4(  0.3,  0.0, -0.3, 1.0 ), //4
          vec4(  0.3,  0.4, -0.3, 1.0 ), //5
          vec4(  0.4,  0.4, -0.3, 1.0 ), //6
          vec4(  0.4,  0.0, -0.3, 1.0 )  //7
    ];

        var vertexColors = [
          [ 0.0, 0.0, 0.0, 1.0 ],  // black
          [ 0.3, 0.2, 0.1, 1.0 ],  // red
          [ 0.3, 0.2, 0.1, 1.0 ],  // yellow
          [ 0.6, 0.5, 0.3, 1.0 ],  // green
          [ 0.3, 0.2, 0.1, 1.0 ],  // blue
          [ 0.3, 0.2, 0.1, 1.0 ],  // magenta
          [ 0.6, 0.5, 0.3, 1.0 ],  // cyan
          [ 1.0, 1.0, 1.0, 1.0 ], // white

          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ],
          [ 0.0, 0.0, 0.0, 1.0 ]
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
