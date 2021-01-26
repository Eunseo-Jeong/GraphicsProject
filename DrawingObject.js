var pointsArray = [];
var colorsArray = [];
var texCoordsArray = [];
var clocktheta = 0.0;

function DrawingSetup(){


  Classroom.Init(pointsArray, colorsArray);
  Blackboard.Init(pointsArray, colorsArray);
  Chair.Init(pointsArray, colorsArray, texCoordsArray);
  Desk.Init(pointsArray, colorsArray, texCoordsArray);

  Lecture_desk.Init(pointsArray, colorsArray);

  Locker.Init(pointsArray, colorsArray);
  for(var i = 0 ; i < 1094; i++){
    texCoordsArray.push(vec2(0, 0));
  }
  Clock.Init(pointsArray, colorsArray);

  Blind.Init(pointsArray, colorsArray);
  Door.Init(pointsArray, colorsArray);
  Light.Init(pointsArray, colorsArray);
  Number.Init(pointsArray, colorsArray);
  Hint.Init(pointsArray, colorsArray);
  Lock.Init(pointsArray, colorsArray);


  return [pointsArray, colorsArray, texCoordsArray];

}

function DrawObject(scaleLoc, thetaLoc, offsetLoc, texture_desk){
  var drawlist = [];
  var num = 0;
  var theta = [0, 0, 0];

  drawlist = Classroom.GetDraw(drawlist);
  drawlist = Blackboard.GetDraw(drawlist);
  drawlist = Chair.GetDraw(drawlist);
  drawlist = Desk.GetDraw(drawlist);
  drawlist = Lecture_desk.GetDraw(drawlist);
  //drawlist = Blind.GetDraw(drawlist);
  drawlist = Locker.GetDraw(drawlist);
  drawlist = Clock.GetDraw(drawlist);
  drawlist = Blind.GetDraw(drawlist);
  drawlist = Door.GetDraw(drawlist);
  drawlist = Light.GetDraw(drawlist);
  drawlist = Number.GetDraw(drawlist);
  drawlist = Hint.GetDraw(drawlist);
  drawlist = Lock.GetDraw(drawlist);
  //console.log(drawlist);
  //Texture 적용하지 않는 것
  gl.uniform1f(textureMappingLoc, 0.0);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv(offsetLoc, [0, 0, 0, 0]);
  for(var i = 0; i < 2; i++){

    gl.uniform4fv( scaleLoc, drawlist[i][2]);
    gl.drawArrays( drawlist[i][0], num, drawlist[i][1]);
    num = num + drawlist[i][1];
  }

  //1분단
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, -0.55 - 0.7, -1.7, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 - 0.7, -1.7, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, -0.55 - 0.7, -0.85, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 - 0.7, -0.85, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, -0.55 - 0.7, 0.0, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 - 0.7, 0.0, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, -0.55 - 0.7, 0.85, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 - 0.7, 0.85, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, -0.55 - 0.7, 1.7, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 - 0.7, 1.7, drawlist, num);
  //2분단
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.55 + 0.7, -1.7, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 + 0.7, -1.7, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.55 + 0.7, -0.85, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 + 0.7, -0.85, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.55 + 0.7, 0.0, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 + 0.7, 0.0, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.55 + 0.7, 0.85, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 + 0.7, 0.85, drawlist, num);

  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.55 + 0.7, 1.7, drawlist, num);
  make_chair_desk(scaleLoc, thetaLoc, offsetLoc, 0.0 + 0.7, 1.7, drawlist, num);
  num = num + drawlist[2][1] + drawlist[3][1];


  theta = [0, 0, 0];
  gl.uniform4fv(offsetLoc, [0, 0, -2.5, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[4][2]);
  gl.drawArrays( drawlist[4][0], num, drawlist[4][1]);
  num = num + drawlist[4][1];

  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.596, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.596, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.596, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.33, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.33, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.33, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.064, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.064, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -1.064, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.798, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.798, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.798, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.532, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.532, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.532, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.266, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.266, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, -0.266, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.0, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.0, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.0, 0.56, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.266, 0.0, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.266, 0.28, 3.7, drawlist, num);
  make_locker(scaleLoc, thetaLoc, offsetLoc, 0.266, 0.56, 3.7, drawlist, num);
  num = num +  drawlist[5][1] + drawlist[6][1] + drawlist[7][1] + drawlist[8][1] + drawlist[9][1] + drawlist[10][1] + drawlist[11][1];

  theta = [0, 0, 0];
  gl.uniform4fv(offsetLoc, [0, 1.5, -3.8, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[13][2]);
  gl.drawArrays( drawlist[12][0], num, drawlist[12][1]);
  num = num + drawlist[12][1];
  gl.drawArrays( drawlist[13][0], num, drawlist[13][1]);
  num = num + drawlist[13][1];
  gl.drawArrays( drawlist[14][0], num, drawlist[14][1]);
  num = num + drawlist[14][1];
  clocktheta = clocktheta - 0.1;
  theta = [0, 0, clocktheta];
  gl.uniform3fv(thetaLoc, theta);
  gl.drawArrays( drawlist[15][0], num, drawlist[15][1]);
  num = num + drawlist[15][1];

  theta = [0, 90, 0];
  // gl.uniform4fv(offsetLoc, [0.0, 0.0, 0.0, 0]);
  gl.uniform4fv(offsetLoc, [-1.96, 0.2, 1.0, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[16][2]);
  gl.drawArrays( drawlist[16][0], num, drawlist[16][1]);

  theta = [0, 90, 0];
  gl.uniform4fv(offsetLoc, [-1.96, 0.2, -1.0, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[16][2]);
  gl.drawArrays( drawlist[16][0], num, drawlist[16][1]);
  num = num + drawlist[16][1];

  //문
  theta = [0, -90, 0];
  gl.uniform4fv(offsetLoc, [2.05, -0.355, -3.2, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[17][2]);
  gl.drawArrays( drawlist[17][0], num, drawlist[17][1]);

  theta = [0, -90, 0];
  gl.uniform4fv(offsetLoc, [2.05, -0.355, 3.2, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[17][2]);
  gl.drawArrays( drawlist[17][0], num, drawlist[17][1]);
  num = num + drawlist[17][1];

  //형광등
  theta = [90, 0, 0];
  // gl.uniform4fv(offsetLoc, [2.05, -0.355, 3.2, 0]);
  gl.uniform4fv(offsetLoc, [-0.8, 1.805, -2.5, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);

  theta = [90, 0, 0];
  // gl.uniform4fv(offsetLoc, [2.05, -0.355, 3.2, 0]);
  gl.uniform4fv(offsetLoc, [0.8, 1.805, -2.5, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);

  theta = [90, 0, 0];
  // gl.uniform4fv(offsetLoc, [2.05, -0.355, 3.2, 0]);
  gl.uniform4fv(offsetLoc, [-0.8, 1.805, 0.0, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);

  theta = [90, 0, 0];
  // gl.uniform4fv(offsetLoc, [2.05, -0.355, 3.2, 0]);
  gl.uniform4fv(offsetLoc, [0.8, 1.805, 0.0, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);

  theta = [90, 0, 0];
  gl.uniform4fv(offsetLoc, [-0.8, 1.805, 2.3, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);

  theta = [90, 0, 0];
  gl.uniform4fv(offsetLoc, [0.8, 1.805, 2.3, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[18][2]);
  gl.drawArrays( drawlist[18][0], num, drawlist[18][1]);
  num = num + drawlist[18][1];
  //숫자
  //1
  theta = [-90, 0, 0];
  gl.uniform4fv(offsetLoc, [-0.5, 0.02, -1.9, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[19][2]);
  gl.drawArrays( drawlist[19][0], num, drawlist[19][1]);
  num = num + drawlist[19][1];
  //9
  theta = [-90, 0, 0];
  gl.uniform4fv(offsetLoc, [1.27, -0.12, 1.68, 0.0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[20][2]);
  gl.drawArrays( drawlist[20][0], num, drawlist[20][1]);
  num = num + drawlist[20][1];

  gl.uniform4fv( scaleLoc, drawlist[21][2]);
  gl.drawArrays( drawlist[21][0], num, drawlist[21][1]);
  num = num + drawlist[21][1];
  //3
  theta = [-90, 0, 0];
  gl.uniform4fv(offsetLoc, [0.3, 1.802, 0.0, 0.0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[22][2]);
  gl.drawArrays( drawlist[22][0], num, drawlist[22][1]);
  num = num + drawlist[22][1];

  gl.uniform4fv( scaleLoc, drawlist[23][2]);
  gl.drawArrays( drawlist[23][0], num, drawlist[23][1]);
  num = num + drawlist[23][1];

  gl.uniform4fv( scaleLoc, drawlist[24][2]);
  gl.drawArrays( drawlist[24][0], num, drawlist[24][1]);
  num = num + drawlist[24][1];

  gl.uniform4fv( scaleLoc, drawlist[25][2]);
  gl.drawArrays( drawlist[25][0], num, drawlist[25][1]);
  num = num + drawlist[25][1];

  //5
  theta = [-90, 0, 0];
  gl.uniform4fv(offsetLoc, [-0.16, 0.0, -2.45, 0.0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[26][2]);
  gl.drawArrays( drawlist[26][0], num, drawlist[26][1]);
  num = num + 1;

  gl.uniform4fv( scaleLoc, drawlist[27][2]);
  gl.drawArrays( drawlist[27][0], num, drawlist[27][1]);
  num = num + 1;

  gl.uniform4fv( scaleLoc, drawlist[28][2]);
  gl.drawArrays( drawlist[28][0], num, drawlist[28][1]);
  num = num + 1;
  //
  gl.uniform4fv( scaleLoc, drawlist[29][2]);
  gl.drawArrays( drawlist[29][0], num, drawlist[29][1]);
  num = num + 1;
  //
  gl.uniform4fv( scaleLoc, drawlist[30][2]);
  gl.drawArrays( drawlist[30][0], num, drawlist[30][1]);
  num = num + drawlist[30][1];

  theta = [0, 0, 0];
  gl.uniform4fv(offsetLoc, [0, 0.4, -3.93, 0]);
  // gl.uniform4fv(offsetLoc, [0, 0.6, -3.0, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[31][2]);
  gl.drawArrays( drawlist[31][0], num, drawlist[31][1]);
  num = num + drawlist[31][1];
  var num2 = num;

  //자물쇠
  theta = [0, -90, 0];
  gl.uniform4fv(offsetLoc, [2.0, 0.33, -2.92, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[32][2]);
  for(var i = 0; i < 9; i++){
    gl.drawArrays( drawlist[32+i][0], num, drawlist[32+i][1]);
    num = num + drawlist[32+i][1];
  }

  theta = [0, -90, 0];
  gl.uniform4fv(offsetLoc, [2.0, 0.33, 3.49, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[32][2]);
  for(var i = 0; i < 9; i++){
    gl.drawArrays( drawlist[32+i][0], num2, drawlist[32+i][1]);
    num2 = num2 + drawlist[32+i][1];
  }
  // gl.drawArrays( drawlist[32][0], num, drawlist[32][1]);
  // num = num + drawlist[32][1];
  // gl.drawArrays( drawlist[33][0], num, drawlist[33][1]);
  // num = num + drawlist[33][1];

}
function make_chair_desk(scaleLoc, thetaLoc, offsetLoc, X, Z, drawlist, num){
  var theta = [0, 180, 0];

  gl.uniform4fv(offsetLoc, [X, -0.3, Z, 0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[2][2]);
  gl.drawArrays( drawlist[2][0], num, drawlist[2][1]);
  num = num + drawlist[2][1];


  gl.uniform4fv(offsetLoc, [X, -0.3, Z-0.2, 0]);
  theta = [0, 0, 0];
  gl.uniform3fv( thetaLoc, theta);
  gl.uniform4fv( scaleLoc, drawlist[3][2]);
  gl.drawArrays( drawlist[3][0], num, drawlist[3][1]);
}

function make_locker(scaleLoc, thetaLoc, offsetLoc, X, Y, Z, drawlist, num){
  var theta = [0, 180, 0];
  gl.uniform4fv(offsetLoc, [X,Y-0.3,Z,0]);
  gl.uniform3fv(thetaLoc, theta);
  gl.uniform4fv(scaleLoc, drawlist[5][2]);
  gl.drawArrays( drawlist[5][0], num, drawlist[5][1]);
  num = num + drawlist[5][1];
 gl.drawArrays( drawlist[6][0], num, drawlist[6][1]);
  num = num + drawlist[6][1];
  gl.drawArrays( drawlist[7][0], num, drawlist[7][1]);
  num = num + drawlist[7][1];
  gl.drawArrays( drawlist[8][0], num, drawlist[8][1]);
  num = num + drawlist[8][1];
  gl.drawArrays( drawlist[9][0], num, drawlist[9][1]);
  num = num + drawlist[9][1];
  gl.drawArrays( drawlist[10][0], num, drawlist[10][1]);
  num = num + drawlist[10][1];
  gl.drawArrays( drawlist[11][0], num, drawlist[11][1]);
}

function texture_image(image_name, image, value){

  var url= 'image/'+image_name;

  gl.uniform1f(textureMappingLoc, value);
}
