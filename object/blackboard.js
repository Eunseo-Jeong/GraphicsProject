class Blackboard {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      var vertices = [
        //칠판
        vec4(-2.2, 0.6,  -7.9, 1.0),
        vec4(-2.2,  2.5,  -7.9, 1.0),
        vec4(2.2,  2.5,  -7.9, 1.0),
        vec4(2.2, 0.6,  -7.9, 1.0),
        vec4(-2.2, 0.6, -7.89, 1.0),//5
        vec4(-2.2,  2.5, -7.89, 1.0),
        vec4(2.2,  2.5, -7.89, 1.0),
        vec4(2.2, 0.6, -7.89, 1.0),//8
        //칠판 테두리
        vec4(2.2, 0.6,  -7.9, 1.0),
        vec4(2.2,  2.5,  -7.9, 1.0),
        vec4(2.3,  2.5,  -7.9, 1.0),
        vec4(2.3, 0.6,  -7.9, 1.0),
        vec4(2.2, 0.6, -7.89, 1.0),//5
        vec4(2.2,  2.5, -7.89, 1.0),
        vec4(2.3,  2.5, -7.89, 1.0),
        vec4(2.3, 0.6, -7.89, 1.0),//8

        vec4(-2.3, 0.6,  -7.9, 1.0),
        vec4(-2.3,  2.5,  -7.9, 1.0),
        vec4(-2.2,  2.5,  -7.9, 1.0),
        vec4(-2.2, 0.6,  -7.9, 1.0),
        vec4(-2.3, 0.6, -7.89, 1.0),//5
        vec4(-2.3,  2.5, -7.89, 1.0),
        vec4(-2.2,  2.5, -7.89, 1.0),
        vec4(-2.2, 0.6, -7.89, 1.0),//8

        vec4(-2.3, 2.5,  -7.9, 1.0),
        vec4(-2.3,  2.6,  -7.9, 1.0),
        vec4(2.3,  2.6,  -7.9, 1.0),
        vec4(2.3, 2.5,  -7.9, 1.0),
        vec4(-2.3, 2.5, -7.89, 1.0),//5
        vec4(-2.3,  2.6, -7.89, 1.0),
        vec4(2.3,  2.6, -7.89, 1.0),
        vec4(2.3, 2.5, -7.89, 1.0),//8

        vec4(-2.3, 0.5,  -7.9, 1.0),
        vec4(-2.3,  0.6,  -7.9, 1.0),
        vec4(2.3,  0.6,  -7.9, 1.0),
        vec4(2.3, 0.5,  -7.9, 1.0),
        vec4(-2.3, 0.5, -7.89, 1.0),//5
        vec4(-2.3, 0.6, -7.89, 1.0),
        vec4(2.3,  0.6, -7.89, 1.0),
        vec4(2.3, 0.5, -7.89, 1.0),//8

        //지우개
        vec4(1.72, 0.65,  -7.85, 1.0),
        vec4(1.7,  0.72,  -7.85, 1.0),
        vec4(2.0,  0.72,  -7.85, 1.0),
        vec4(1.98, 0.65,  -7.85, 1.0),
        vec4(1.72, 0.65, -7.71, 1.0),//5
        vec4(1.72, 0.72, -7.71, 1.0),
        vec4(2.0,  0.72, -7.71, 1.0),
        vec4(1.98, 0.65, -7.71, 1.0),//8

        vec4(1.7, 0.72,  -7.85, 1.0),
        vec4(1.7,  0.75,  -7.85, 1.0),
        vec4(2.0,  0.75,  -7.85, 1.0),
        vec4(2.0, 0.72,  -7.85, 1.0),
        vec4(1.7, 0.72, -7.71, 1.0),//5
        vec4(1.7, 0.75, -7.71, 1.0),
        vec4(2.0,  0.75, -7.71, 1.0),
        vec4(2.0, 0.72, -7.71, 1.0),//8

        //지우개 받침대
        vec4(0.8, 0.63,  -7.89, 1.0),
        vec4(0.8,  0.65,  -7.89, 1.0),
        vec4(2.2,  0.65,  -7.89, 1.0),
        vec4(2.2, 0.63,  -7.89, 1.0),
        vec4(0.8, 0.63, -7.69, 1.0),//5
        vec4(0.8, 0.65, -7.69, 1.0),
        vec4(2.2,  0.65, -7.69, 1.0),
        vec4(2.2, 0.63, -7.69, 1.0),//8
      ];

      var vertexColors = [
        //칠판
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),
        vec4(1.0, 1.0, 1.0, 1.0),

        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리

        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리

        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리

        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리
        vec4( 0.6, 0.4, 0.0, 1.0 ),  // 칠판 테두리

        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.0, 1.0 ),  // 칠판 지우개

        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개
        vec4( 0.4, 0.4, 0.4, 1.0 ),  // 칠판 지우개

        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 ),  // 칠판 받침대
        vec4( 0.8, 0.8, 0.8, 1.0 )  // 칠판 받침대
      ];

      this.GetVertexColor(vertices, vertexColors, pointsArray, colorsArray);
    }

    static GetVertexColor(vertices, vertexColors, pointsArray, colorsArray){
      var texCoord=[ //
        vec2(0.75, 0.75),//오른쪽 위
        vec2(0.75, 0.75),//오른쪽 아래
        vec2(0.75, 0.75),//왼쪽 아래
        vec2(0.75, 0.75),//왼쪽 위
      ];
      for(var i = 0 ; i < 8 ; i++){
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 1 + (8*i), 0 + (8*i), 3 + (8*i), 2 + (8*i));
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 2 + (8*i), 3 + (8*i), 7 + (8*i), 6 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 3 + (8*i), 0 + (8*i), 4 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 6 + (8*i), 5 + (8*i), 1 + (8*i), 2 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 4 + (8*i), 5 + (8*i), 6 + (8*i), 7 + (8*i) );
        this.quad( vertices, vertexColors, pointsArray, colorsArray, 5 + (8*i), 4 + (8*i), 0 + (8*i), 1 + (8*i) );
      }
      for(var i = 0;i<6;i++){
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[1]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[0]);
        texCoordsArray.push(texCoord[2]);
        texCoordsArray.push(texCoord[3]);
      }
      for(var i = 0 ; i < 252; i++){
        texCoordsArray.push(vec2(0, 0));
      }
    }

	// Draw Vertex
    static GetDraw(drawlist) {
        var scale = vec4(0.5, 0.5, 0.5, 1.0);

        drawlist.push([gl.TRIANGLES, 288, scale]);
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
