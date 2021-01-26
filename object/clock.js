class Clock {
    constructor(){

    }

    static Init(pointsArray, colorsArray) {
      this.GetVertexColor(pointsArray, colorsArray);
    }

    static GetVertexColor(pointsArray, colorsArray){

      this.DrawCycle(pointsArray, 0, 0, 0.03, 0.3); //안쪽
      this.DrawCycleColor(colorsArray, [ 1.0, 1.0, 1.0, 0.5 ]); //gray
      // this.DrawCycleColor(colorsArray, [ 1.0, 1.0, 1.0, 1.0 ]); //gray
      //362
      this.pushCycle(pointsArray, 0, 0, 0.1, 0.3); //테두리
      this.pushCycleColor(colorsArray, [ 0.0, 0.0, 0.0, 1.0 ]); //black
      // this.pushCycleColor(colorsArray, [ 1.0, 1.0, 1.0, 1.0 ]);
      //722

      this.makeClock(pointsArray, colorsArray);


    }
	// Draw Vertex
    static GetDraw(drawlist) {
        // var scale = vec4(0.1, 0.1, 0.1, 1.0);
        var scale = vec4(0.5, 0.5, 0.5, 1.0);

        drawlist.push([gl.TRIANGLE_FAN, 362, scale]);
        //아래는 TRIANGLE_STRIP도 가능 하지만 안보임
        drawlist.push([gl.LINE_STRIP, 722, scale]);
        drawlist.push([gl.LINES, 8, scale]);
        drawlist.push([gl.LINES, 2, scale]);
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

    static makeClock(vertices, colors){
      vertices.push(vec4(0.0, 0.3, 0.031, 1.0)); //위
      colors.push([0.0, 0.0, 0.0, 1.0]);
      vertices.push(vec4(0.0, 0.2, 0.031, 1.0));
      colors.push([0.0, 0.0, 0.0, 1.0]);

      vertices.push(vec4(0.3, 0.0, 0.031, 1.0)); //오른쪽
      colors.push([0.0, 0.0, 0.0, 1.0]);
      vertices.push(vec4(0.2, 0.0, 0.031, 1.0));
      colors.push([0.0, 0.0, 0.0, 1.0]);

      vertices.push(vec4(0.0, -0.3, 0.031, 1.0)); //아래
      colors.push([0.0, 0.0, 0.0, 1.0]);
      vertices.push(vec4(0.0, -0.2, 0.031, 1.0));
      colors.push([0.0, 0.0, 0.0, 1.0]);

      vertices.push(vec4(-0.3, 0.0, 0.031, 1.0)); //왼쪽
      colors.push([0.0, 0.0, 0.0, 1.0]);
      vertices.push(vec4(-0.2, 0.0, 0.031, 1.0));
      colors.push([0.0, 0.0, 0.0, 1.0]);

      vertices.push(vec4(0.18, 0.18, 0.032, 1.0)); //시계침
      colors.push([1.0, 0.0, 0.0, 1.0]);
      vertices.push(vec4(0, 0, 0.032, 1.0));
      colors.push([1.0, 0.0, 0.0, 1.0]);

    }
}
