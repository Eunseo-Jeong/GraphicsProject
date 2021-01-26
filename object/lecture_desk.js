class Lecture_desk {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      var vertices = [
        //1단계
        vec4(-0.4, -0.5,  0.35, 1.0),
        vec4(-0.4,  -0.45,  0.35, 1.0),
        vec4(0.4,  -0.45,  0.35, 1.0),
        vec4(0.4, -0.5,  0.35, 1.0),
        vec4(-0.4, -0.5, -0.3, 1.0),//5
        vec4(-0.4,  -0.45, -0.3, 1.0),
        vec4(0.4,  -0.45, -0.3, 1.0),
        vec4(0.4, -0.5, -0.3, 1.0),//8
        //2단계
        vec4(-0.4, -0.1,  0.35, 1.0),
        vec4(-0.4,  -0.05,  0.35, 1.0),
        vec4(0.4,  -0.05,  0.35, 1.0),
        vec4(0.4, -0.1,  0.35, 1.0),
        vec4(-0.4, -0.1, -0.3, 1.0),//5
        vec4(-0.4,  -0.05, -0.3, 1.0),
        vec4(0.4,  -0.05, -0.3, 1.0),
        vec4(0.4, -0.1, -0.3, 1.0),//8
        //3단계
        vec4(-0.4, 0.35,  0.35, 1.0),
        vec4(-0.4,  0.4,  0.35, 1.0),
        vec4(0.4,  0.4,  0.35, 1.0),
        vec4(0.4, 0.35,  0.35, 1.0),
        vec4(-0.4, 0.35, -0.3, 1.0),//5
        vec4(-0.4,  0.4, -0.3, 1.0),
        vec4(0.4,  0.4, -0.3, 1.0),
        vec4(0.4, 0.35, -0.3, 1.0),//8
        //옆면
        vec4(-0.5, -0.53,  0.35, 1.0),
        vec4(-0.5,  0.53,  0.35, 1.0),
        vec4(-0.4,  0.53,  0.35, 1.0),
        vec4(-0.4, -0.53,  0.35, 1.0),
        vec4(-0.5, -0.53, -0.3, 1.0),//5
        vec4(-0.5,  0.43, -0.3, 1.0),
        vec4(-0.4,  0.43, -0.3, 1.0),
        vec4(-0.4, -0.53, -0.3, 1.0),//8

        vec4(0.4, -0.53,  0.35, 1.0),
        vec4(0.4,  0.53,  0.35, 1.0),
        vec4(0.5,  0.53,  0.35, 1.0),
        vec4(0.5, -0.53,  0.35, 1.0),
        vec4(0.4, -0.53, -0.3, 1.0),//5
        vec4(0.4,  0.43, -0.3, 1.0),
        vec4(0.5,  0.43, -0.3, 1.0),
        vec4(0.5, -0.5, -0.3, 1.0),//8
        //앞면
        vec4(-0.5, -0.5,  0.4, 1.0),
        vec4(-0.5,  0.53,  0.4, 1.0),
        vec4(0.5,  0.53,  0.4, 1.0),
        vec4(0.5, -0.5,  0.4, 1.0),
        vec4(-0.5, -0.5, 0.35, 1.0),//5
        vec4(-0.5,  0.53, 0.35, 1.0),
        vec4(0.5,  0.53, 0.35, 1.0),
        vec4(0.5, -0.5, 0.35, 1.0),//8

        //다리
        vec4(0.4, -0.7,  -0.2, 1.0),
        vec4(0.4,  -0.5, -0.2, 1.0),
        vec4(0.5,  -0.5, -0.2, 1.0),
        vec4(0.5, -0.7,  -0.2, 1.0),
        vec4(0.4, -0.7, -0.3, 1.0),//5
        vec4(0.4,  -0.5, -0.3, 1.0),
        vec4(0.5,  -0.5, -0.3, 1.0),
        vec4(0.5, -0.7, -0.3, 1.0),//8

        vec4(0.4, -0.7,  0.4, 1.0),
        vec4(0.4,  -0.5, 0.4, 1.0),
        vec4(0.5,  -0.5, 0.4, 1.0),
        vec4(0.5, -0.7,  0.4, 1.0),
        vec4(0.4, -0.7, 0.3, 1.0),//5
        vec4(0.4,  -0.5, 0.3, 1.0),
        vec4(0.5,  -0.5, 0.3, 1.0),
        vec4(0.5, -0.7, 0.3, 1.0),//8

        vec4(-0.5, -0.7,  -0.2, 1.0),
        vec4(-0.5,  -0.5, -0.2, 1.0),
        vec4(-0.4,  -0.5, -0.2, 1.0),
        vec4(-0.4, -0.7,  -0.2, 1.0),
        vec4(-0.5, -0.7, -0.3, 1.0),//5
        vec4(-0.5,  -0.5, -0.3, 1.0),
        vec4(-0.4,  -0.5, -0.3, 1.0),
        vec4(-0.4, -0.7, -0.3, 1.0),//8


        vec4(-0.5, -0.7,  0.4, 1.0),
        vec4(-0.5,  -0.5, 0.4, 1.0),
        vec4(-0.4,  -0.5, 0.4, 1.0),
        vec4(-0.4, -0.7,  0.4, 1.0),
        vec4(-0.5, -0.7, 0.3, 1.0),//5
        vec4(-0.5,  -0.5, 0.3, 1.0),
        vec4(-0.4,  -0.5, 0.3, 1.0),
        vec4(-0.4, -0.7, 0.3, 1.0),//8

      ];

      var vertexColors = [
        //교탁
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 1단계

        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 2단계

        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계
        vec4( 1.0, 0.8, 0.6, 1.0 ),  // 칠판 3단계

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 옆면

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 앞면

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리

        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
        vec4( 0.6, 0.4, 0.2, 1.0 ),  // 칠판 다리
      ];

      this.GetVertexColor(vertices, vertexColors, pointsArray, colorsArray);
    }

    static GetVertexColor(vertices, vertexColors, pointsArray, colorsArray){
      var texCoord=[ //
        vec2(0.98, 0.5),//오른쪽 위
        vec2(0.98, 0.02),//오른쪽 아래
          vec2(0.75, 0.02),//왼쪽 아래
          vec2(0.75, 0.5),//왼쪽 위
      ];
      for(var i = 0 ; i < 10 ; i++){
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }

      for(var i = 0;i<60;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      // for(var i = 0 ; i < 360; i++){
      //   texCoordsArray.push(vec2(0, 0));
      // }

    }
	// Draw Vertex
    static GetDraw(drawlist) {
        var scale = vec4(0.5, 0.5, 0.5, 1.0);

        drawlist.push([gl.TRIANGLES, 360, scale]);
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
