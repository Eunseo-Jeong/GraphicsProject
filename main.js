"use strict";

var canvas;
var gl;


var pointsArray = [];
var colorsArray = [];
var texCoordsArray = [];

var near = 0.1;
var far = 30.0;
var theta  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var  fovy = 45.0;  // Field-of-view in Y direction angle (in degrees)
var  aspect = 1.0;       // Viewport aspect ratio

var modelViewMatrix, projectionMatrix;
var modelViewMatrixLoc, projectionMatrixLoc;
var scaleLoc, thetaLoc, offsetLoc;
var textureMappingLoc;

var eye;
var eye_x = 0.0, eye_y = 0.8, eye_z = 0.0;
var at;
var distance = 0.0
const up = vec3(0.0, 1.0, 0.0);

var textureLoc;
var texture_desk, texture_blind;



window.onload = function init() {
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );

    aspect =  canvas.width/canvas.height;

    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    gl.enable(gl.DEPTH_TEST);
	   gl.enable(gl.CULL_FACE);



    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var temp = DrawingSetup()
    pointsArray = temp[0];
    colorsArray = temp[1];
    texCoordsArray = temp[2];



    this.gl.changeBuffer = function (name, array, elementsize) {
        // Load the data into the GPU
        var bufferId = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
        gl.bufferData(gl.ARRAY_BUFFER, flatten(array), gl.STATIC_DRAW);

        // Associate out shader variables with our data buffer

        var attribute = gl.getAttribLocation(program, name);
        gl.vertexAttribPointer(attribute, elementsize, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(attribute);
    }

    this.gl.changeBuffer("vPosition", pointsArray, 4);
    this.gl.changeBuffer("vColor", colorsArray, 4);
    this.gl.changeBuffer("vTextCoord", texCoordsArray, 2);

    modelViewMatrixLoc = gl.getUniformLocation( program, "modelViewMatrix" );
    projectionMatrixLoc = gl.getUniformLocation( program, "projectionMatrix" );
    thetaLoc = gl.getUniformLocation( program, "theta" );
    scaleLoc = gl.getUniformLocation( program, "scale" );
    offsetLoc = gl.getUniformLocation( program, "offset" );
    textureLoc = gl.getUniformLocation(program, "texture");

    texture_desk = loadTexture("image/mix.png");
    // texture_blind = loadTexture("image/blind.jpg");

    window.addEventListener("keydown", function(){
      //위 38 아래 40 왼 37 오른쪽 39
      //alert(Math.cos(theta), Math.sin(phi));
      switch(event.keyCode){
        case 65://'A'
          if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && 0.5<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_x -= 0.05;
          //뒤
          else if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && -1.0<= Math.cos(phi) && Math.cos(phi) <= -0.5)
            eye_x += 0.05;
          else if(0.5 <= Math.sin(phi) && Math.sin(phi) <= 1.0 && -0.5<= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_z -= 0.05;
          else if(-1.0 <= Math.sin(phi) && Math.sin(phi) <= -0.5 && -0.5 <= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_z += 0.05;
          else if(0.0<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_x = 0.05;
          else if(-1.0<= Math.cos(phi) && Math.cos(phi) <= -0.0)
            eye_x += 0.05;
          break;
        case 68://'D'
          if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && 0.5<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_x += 0.05;
          //뒤
          else if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && -1.0<= Math.cos(phi) && Math.cos(phi) <= -0.5)
            eye_x -= 0.05;
          else if(0.5 <= Math.sin(phi) && Math.sin(phi) <= 1.0 && -0.5<= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_z += 0.05;
          else if(-1.0 <= Math.sin(phi) && Math.sin(phi) <= -0.5 && -0.5 <= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_z -= 0.05;
          else if(0.0<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_x += 0.05;
          else if(-1.0<= Math.cos(phi) && Math.cos(phi) <= -0.0)
            eye_x -= 0.05;
          break;
        case 87://'W'
          if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && 0.5<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_z -= 0.05;
          else if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && -1.0<= Math.cos(phi) && Math.cos(phi) <= -0.5)
            eye_z += 0.05;
          else if(0.5 <= Math.sin(phi) && Math.sin(phi) <= 1.0 && -0.5<= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_x += 0.05;
          else if(-1.0 <= Math.sin(phi) && Math.sin(phi) <= -0.5 && -0.5 <= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_x -= 0.05;
          else if(0.0<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_z -= 0.05;
          else if(-1.0<= Math.cos(phi) && Math.cos(phi) <= -0.0)
            eye_z += 0.05;
          break;
        case 83://'S'
          //앞
          if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && 0.5<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_z += 0.05;
          //뒤
          else if(-0.5 <= Math.sin(phi) && Math.sin(phi) <= 0.5 && -1.0<= Math.cos(phi) && Math.cos(phi) <= -0.5)
            eye_z -= 0.05;
          else if(0.5 <= Math.sin(phi) && Math.sin(phi) <= 1.0 && -0.5<= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_x -= 0.05;
          else if(-1.0 <= Math.sin(phi) && Math.sin(phi) <= -0.5 && -0.5 <= Math.cos(phi) && Math.cos(phi) <= 0.5)
            eye_x += 0.05;
          else if(0.0<= Math.cos(phi) && Math.cos(phi) <= 1.0)
            eye_z += 0.05;
          else if(-1.0<= Math.cos(phi) && Math.cos(phi) <= -0.0)
            eye_z -= 0.05;
          break;
        case 38://위
          theta += 0.1;
          break;
        case 40://아래
          theta -= 0.1;
          break;
        case 37://왼
          phi -= 0.1;
          break;
        case 39://오른
          phi += 0.1;
          break;
      }
    });

    // image_desk = buildImage(image_desk, texturedeskLoc);
    // image_blind = buildImage(image_blind, textureblindLoc);

      render();
}


var render = function(){
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

    eye = vec3(eye_x, 0.8, eye_z); // eye point(0,0,4.0)
    at = 	vec3(Math.sin(phi) + eye_x , Math.sin(theta) + eye_y,-1* Math.cos(phi) + eye_z);

    modelViewMatrix = lookAt(eye, at , up);
    projectionMatrix = perspective(fovy, aspect, near, far);

    gl.uniformMatrix4fv( modelViewMatrixLoc, false, flatten(modelViewMatrix) );
    gl.uniformMatrix4fv( projectionMatrixLoc, false, flatten(projectionMatrix) );
    // gl.bindTexture(gl.TEXTURE_2D, texture_desk);

    DrawObject(scaleLoc, thetaLoc, offsetLoc, texture_desk);
    // gl.drawArrays( gl.TRIANGLES, 0, NumVertices );
    requestAnimFrame(render);
}


function loadTexture(url) {

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);

    const image = new Image();
    image.onload = function(){
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

      // gl.uniform1i(textureLoc,0);
    };
    image.src = url; //
    console.log(texture);
    return texture;
}
