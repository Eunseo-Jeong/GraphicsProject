class Locker {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      var vertices = [
        //바닥
        vec4(-0.19, 0.0,  0.13, 1.0),
        vec4(-0.19,  0.01,  0.13, 1.0),
        vec4(0.19,  0.01,  0.13, 1.0),
        vec4(0.19, 0.0,  0.13, 1.0),
        vec4(-0.19, 0.0, -0.19, 1.0),//5
        vec4(-0.19,  0.01, -0.19, 1.0),
        vec4(0.19,  0.01, -0.19, 1.0),
        vec4(0.19, 0.0, -0.19, 1.0),//8
        //왼쪽 옆면
        vec4(-0.19, 0.01,  0.13, 1.0),
        vec4(-0.19, 0.39,  0.13, 1.0),
        vec4(-0.18, 0.39,  0.13, 1.0),
        vec4(-0.18, 0.01,  0.13, 1.0),
        vec4(-0.19, 0.01, -0.19, 1.0),//5
        vec4(-0.19, 0.39, -0.19, 1.0),
        vec4(-0.18, 0.39, -0.19, 1.0),
        vec4(-0.18, 0.01, -0.19, 1.0),//8
        //오른쪽 옆면
        vec4(0.18, 0.01,  0.13, 1.0),
        vec4(0.18, 0.39,  0.13, 1.0),
        vec4(0.19, 0.39,  0.13, 1.0),
        vec4(0.19, 0.01,  0.13, 1.0),
        vec4(0.18, 0.01, -0.19, 1.0),//5
        vec4(0.18, 0.39, -0.19, 1.0),
        vec4(0.19, 0.39, -0.19, 1.0),
        vec4(0.19, 0.01, -0.19, 1.0),//8
        //뒷면
        vec4(-0.19, 0.01,  -0.18, 1.0),
        vec4(-0.19,  0.39,  -0.18, 1.0),
        vec4(0.19,  0.39,  -0.18, 1.0),
        vec4(0.19, 0.01,  -0.18, 1.0),
        vec4(-0.19, 0.01, -0.19, 1.0),//5
        vec4(-0.19,  0.39, -0.19, 1.0),
        vec4(0.19,  0.39, -0.19, 1.0),
        vec4(0.19, 0.01, -0.19, 1.0),//8
        //위
        vec4(-0.19, 0.39,  0.13, 1.0),
        vec4(-0.19,  0.40,  0.13, 1.0),
        vec4(0.19,  0.40,  0.13, 1.0),
        vec4(0.19, 0.39,  0.13, 1.0),
        vec4(-0.19, 0.39, -0.19, 1.0),//5
        vec4(-0.19,  0.40, -0.19, 1.0),
        vec4(0.19,  0.40, -0.19, 1.0),
        vec4(0.19, 0.39, -0.19, 1.0),//8
        //바닥
        vec4(-0.19, 0.0,  0.19, 1.0),
        vec4(-0.19,  0.01,  0.19, 1.0),
        vec4(0.19,  0.01,  0.19, 1.0),
        vec4(0.19, 0.0,  0.19, 1.0),
        vec4(-0.19, 0.0, 0.13, 1.0),//5
        vec4(-0.19,  0.01, 0.13, 1.0),
        vec4(0.19,  0.01, 0.13, 1.0),
        vec4(0.19, 0.0, 0.13, 1.0),//8
        //뚜껑 옆면
        vec4(-0.19, 0.01,  0.19, 1.0),
        vec4(-0.19, 0.39,  0.19, 1.0),
        vec4(-0.18, 0.39,  0.19, 1.0),
        vec4(-0.18, 0.01,  0.19, 1.0),
        vec4(-0.19, 0.01,  0.13, 1.0),//5
        vec4(-0.19, 0.39,  0.13, 1.0),
        vec4(-0.18, 0.39,  0.13, 1.0),
        vec4(-0.18, 0.01,  0.13, 1.0),//8
        //뚜껑 옆면
        vec4(0.18, 0.01,  0.19, 1.0),
        vec4(0.18, 0.39,  0.19, 1.0),
        vec4(0.19, 0.39,  0.19, 1.0),
        vec4(0.19, 0.01,  0.19, 1.0),
        vec4(0.18, 0.01, 0.13, 1.0),//5
        vec4(0.18, 0.39, 0.13, 1.0),
        vec4(0.19, 0.39, 0.13, 1.0),
        vec4(0.19, 0.01, 0.13, 1.0),//8
        //위
        vec4(-0.19, 0.39,  0.19, 1.0),
        vec4(-0.19,  0.40,  0.19, 1.0),
        vec4(0.19,  0.40,  0.19, 1.0),
        vec4(0.19, 0.39,  0.19, 1.0),
        vec4(-0.19, 0.39, 0.13, 1.0),//5
        vec4(-0.19,  0.40, 0.13, 1.0),
        vec4(0.19,  0.40, 0.13, 1.0),
        vec4(0.19, 0.39, 0.13, 1.0),//8
        //뚜껑 앞
        vec4(-0.18, 0.01,  0.18, 1.0),
        vec4(-0.18,  0.39, 0.18, 1.0),
        vec4(0.18,  0.39,  0.18, 1.0),
        vec4(0.18, 0.01,  0.18, 1.0),
        vec4(-0.18, 0.01, 0.19, 1.0),//5
        vec4(-0.18,  0.39, 0.19, 1.0),
        vec4(0.18,  0.39, 0.19, 1.0),
        vec4(0.18, 0.01, 0.19, 1.0),//8
      ];

      var vertexColors = [
        //사물함
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0),  //사물함

        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑
        // vec4( 0.6, 1.0, 1.0, 1.0 ),  // 사물함 뚜껑


        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함 뚜껑
        vec4(0.6, 0.6, 0.6, 1.0), //사물함
        vec4(0.6, 0.6, 0.6, 1.0)  //사물함
      ];

      this.GetVertexColor(vertices, vertexColors, pointsArray, colorsArray);
    }

    static GetVertexColor(vertices, vertexColors, pointsArray, colorsArray){
      var texCoord=[ //
        vec2(0.85, 1.0),//오른쪽 위
        vec2(0.85, 0.8),//오른쪽 아래
          vec2(0.75, 0.8),//왼쪽 아래
          vec2(0.75, 1.0),//왼쪽 위
      ];
      for(var i = 0 ; i < 10 ; i++){
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }//360
      for(var i = 0 ; i < 60; i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      this.madeLine(pointsArray, colorsArray);
      this.pushCycle(pointsArray, -0.11, 0.2,  0.015, 1, 1);
      this.pushCycleColor(colorsArray, vec4(0.0, 0.0, 0.0, 1.0));
      this.DrawCycle(pointsArray, -0.11, 0.2, 0.22, 0.015, 1, 1);
      this.DrawCycleColor(colorsArray, vec4(0.0, 0.0, 0.0, 1.0));
      for(var i = 0 ; i < 1104; i++){
        texCoordsArray.push(vec2(0, 0));
      }

    }
	// Draw Vertex
    static GetDraw(drawlist) {
        var scale = vec4(0.7, 0.7, 0.7, 1.0);
        drawlist.push([gl.TRIANGLES, 360, scale]);
        drawlist.push([gl.LINE_LOOP, 4, scale]);
        drawlist.push([gl.LINE_LOOP, 4, scale]);
        drawlist.push([gl.LINE_LOOP, 4, scale]);
        drawlist.push([gl.LINES, 8, scale]);
        drawlist.push([gl.LINE_LOOP, 722, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        return drawlist;
    }


    static quad(vertices, vertexColors, pointsArray, colorsArray, a, b, c, d) {
         pointsArray.push(vertices[a]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[b]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[c]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[a]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[c]);
         colorsArray.push(vertexColors[a]);
         pointsArray.push(vertices[d]);
         colorsArray.push(vertexColors[a]);
    }

    static madeLine(pointsArray, colorsArray){

      pointsArray.push(vec4(-0.19, 0.0,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(-0.19, 0.4,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.4,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.0,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

        pointsArray.push(vec4(-0.19, 0.0,  0.13, 1.0));
        colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
        pointsArray.push(vec4(-0.19, 0.4,  0.13, 1.0));
        colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
        pointsArray.push(vec4(0.19, 0.4,  0.13, 1.0));
        colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
        pointsArray.push(vec4(0.19, 0.0,  0.13, 1.0));
        colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

      pointsArray.push(vec4(-0.19, 0.0,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(-0.19, 0.4,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.4,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.0,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

      pointsArray.push(vec4(-0.19, 0.0,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(-0.19, 0.0,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

      pointsArray.push(vec4(-0.19, 0.4,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(-0.19, 0.4,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

      pointsArray.push(vec4(0.19, 0.0,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.0,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));

      pointsArray.push(vec4(0.19, 0.4,  -0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
      pointsArray.push(vec4(0.19, 0.4,  0.19, 1.0));
      colorsArray.push(vec4(0.6, 0.6, 0.6, 1.0));
    }

    static pushCycle(pointsArray, ox, oy,  d, sx = 1, sy = 1){
        for (var i = 0; i <= 360; i++) {
          var agree = i;
          var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
          var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
          var z = 0.19;
          pointsArray.push(vec4(x, y, z, 1.0));

          var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
          var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
          var z = 0.22;
          pointsArray.push(vec4(x, y, z, 1.0));
        }
    }
    static pushCycleColor(colors, color) {
        for (var i = 0; i < 722; i++) {
            colors.push(color);
        }
    }
    static DrawCycle(vertices, ox, oy, oz, d, sx = 1, sy = 1) {
        var start = vertices.length;
        vertices.push(vec4(ox, oy, oz, 1.0));

        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
            var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
            var z = oz;
            vertices.push(vec4(x, y, z, 1.0));
        }
    }
    static DrawCycleColor(colors, color) {
        for (var i = 0; i < 362; i++) {
            colors.push(color);
        }
    }

}
