class Lock {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      this.GetVertexColor(pointsArray, colorsArray);
    }

    static GetVertexColor(pointsArray, colorsArray){


      //1
      this.DrawCycle(pointsArray, 0, 0, 0.1, 0.15); //안쪽
      this.DrawCycleColor(colorsArray, [0.8, 0.8, 0.8, 1.0]); //black

      //2
      this.DrawCycle(pointsArray, 0, 0, 0.11, 0.12); //안쪽
      this.DrawCycleColor(colorsArray, [0.2, 0.2, 0.2, 1.0]); //yellow

      //3
      this.DrawCycle(pointsArray, 0, 0, 0.0, 0.15); //안쪽
      this.DrawCycleColor(colorsArray, [0.8, 0.8, 0.8, 1.0]); //black

      //4
      this.pushCycle(pointsArray, 0, 0, 0.1, 0.15); //테두리
      this.pushCycleColor(colorsArray, [ 0.2, 0.2, 0.2, 1.0 ]); //gray

      //5
      this.DrawCycle(pointsArray, 0, 0, 0.111, 0.06); //안쪽
      this.DrawCycleColor(colorsArray, [0.8, 0.8, 0.8, 1.0]); //black

      //6
      this.DrawCycle(pointsArray, 0, 0, 0.111, 0.04); //안쪽
      this.DrawCycleColor(colorsArray, [0.8, 0.8, 0.8, 1.0]); //black

      //7
      this.DrawCycle(pointsArray, 0, 0, 0.111, 0.035); //안쪽
      this.DrawCycleColor(colorsArray, [0.8, 0.8, 0.8, 1.0]); //black

      //8
      // static pushCycle(vertices, ox, oy, oz, d, sx = 1, sy = 1)
      this.pushCycle(pointsArray, 0, 0.135, 0.07, 0.14); //테두리
      this.pushCycleColor(colorsArray, [ 0, 0, 0, 1.0 ]); //gray

      //9
      this.DrawCycle(pointsArray, 0, 0.13, 0.09, 0.1); //안쪽
      this.DrawCycleColor(colorsArray, [1.0, 1.0, 1.0, 1.0]); //black

      for(var i = 0;i<3978;i++){
        texCoordsArray.push(vec2(0, 0));
      }

    }

	// Draw Vertex
    static GetDraw(drawlist) {
        // var scale = vec4(0.1, 0.1, 0.1, 1.0);
        var scale = vec4(0.2, 0.2, 0.2, 1.0);

        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        //아래는 TRIANGLE_STRIP도 가능 하지만 안보임
        drawlist.push([gl.LINE_STRIP, 722, scale]);
        drawlist.push([gl.LINE_STRIP, 362, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);

        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 722, scale]);
        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);

        return drawlist;
    }

    static DrawCycle(vertices, ox, oy, oz, d, sx = 1, sy = 1) {
        vertices.push(vec4(ox, oy, oz, 1.0));

        for (var i = 0; i <= 360; i++) {
            var agree = i;
            var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
            var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
            var z = oz;
            vertices.push(vec4(x, y, z, 1.0));
        }
    }

    static pushCycle(vertices, ox, oy, oz, d, sx = 1, sy = 1){
        for (var i = 0; i <= 360; i++) {
          var agree = i;
          var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
          var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
          var z = 0.0;
          vertices.push(vec4(x, y, z, 1.0));

          var x = Math.cos(agree * Math.PI / 180.0) * d * sx + ox;
          var y = Math.sin(agree * Math.PI / 180.0) * d * sy + oy;
          var z = oz;
          vertices.push(vec4(x, y, z, 1.0));
        }
    }

    static pushCycleColor(colors, color) {
        for (var i = 0; i < 722; i++) {
            colors.push(color);
        }
    }

    static DrawCycleColor(colors, color) {
        for (var i = 0; i < 362; i++) {
            colors.push(color);
        }
    }

}
