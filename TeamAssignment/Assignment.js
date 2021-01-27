
var gl;
var index = 0;
var program;
var people_x, people_y;
var cloudIdx=0;

var intervalId;
var fish_x_position = -0.65;
var fish_direction = true;
//var fish_direction = false;
var fish_theta = 0.0;
var theta = 0.0;
var direction = true;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height);
    //Color = white gray
    gl.clearColor( 0.85, 0.85, 0.85, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
     gl.useProgram( program );


    /*------------------vertex position---------------------------------------*/
    var vertex = [
      //sun_position
      vec2( 0, 0 ),         //v0
      vec2( -0.08, 0.15 ),  //v1
      vec2( 0.08, 0.15 ),   //v2
      vec2( 0.15,0.08 ),    //v3
      vec2( 0.15,-0.08 ),   //v4
      vec2( 0.08, -0.15 ),  //v5
      vec2( -0.08, -0.15 ), //v6
      vec2( -0.15, -0.08 ), //v7
      vec2( -0.15, 0.08 ),  //v8
      vec2( -0.08, 0.15 ),  //v1
      /***human_position***/
      //house_up_position
      vec2( -0.2, 0.2 ),
      vec2( -0.3, 0 ),
      vec2( 0.3, 0 ),
      vec2( 0.2, 0.2 ),
      vec2( -0.2,0.2 ),
      //house_down_position
      vec2( -0.2, 0 ),
      vec2( -0.2, -0.3 ),
      vec2( 0.2, 0 ),
      vec2( 0.2, -0.3 ),
      //house_window_position
      vec2( -0.05, 0 ),
      vec2( -0.05, -0.1 ),
      vec2( 0.05, 0 ),
      vec2( 0.05, -0.1 ),
      vec2( 0, 0 ),
      vec2( 0, -0.1 ),
      vec2( -0.05, -0.05 ),
      vec2( 0.05, -0.05 ),
      //house_door_position
      vec2( -0.05, 0 ),
      vec2( -0.05, -0.2 ),
      vec2( 0.05, 0 ),
      vec2( 0.05, -0.2 ),

      //cloude_position
      vec2( 0, 0 ),           //v0
      vec2( -0.07, 0.14 ),    //v1
      vec2( 0.07, 0.14 ),     //v2
      vec2( 0.14, 0.07 ),     //v3
      vec2( 0.14, -0.07 ),    //v4
      vec2( 0.07, -0.14 ),    //v5
      vec2( -0.07, -0.14 ),   //v6
      vec2( -0.14, -0.07 ),   //v7
      vec2( -0.14, 0.07 ),    //v8
      vec2( -0.07, 0.14 ),     //v1
      //rock_position
      vec2( 0.1, 0 ),
      vec2( -0.1, 0 ),
      vec2( 0.1, 0.06 ),
      vec2( -0.1, 0.06 ),
      vec2( 0.06, 0.11 ),
      vec2( -0.06, 0.11 ),
      //river_position
      vec2( -1, -0 ),
      vec2( -1, -0.5 ),
      vec2( 1, 0 ),
      vec2( 1, -0.5 ),
      //tree_position
      vec2( 0, 0.4 ),
      vec2( -0.2, 0.2 ),
      vec2( 0.2, 0.2 ),
      vec2( 0, 0.25 ),
      vec2( -0.2, 0.05 ),
      vec2( 0.2, 0.05 ),
      vec2( 0, 0.1 ),
      vec2( -0.2, -0.1 ),
      vec2( 0.2, -0.1 ),
      //square_position
      vec2( -0.07, -0.1 ),
      vec2( 0.07, -0.1 ),
      vec2( -0.07, -0.3 ),
      vec2( 0.07, -0.1 ),
      vec2( -0.07, -0.3 ),
      vec2( 0.07, -0.3),

      /***human_position***/
      //human_face
      vec2( 0, 0 ),         //v0
      vec2( -0.04, 0.075 ),  //v1
      vec2( 0.04, 0.075 ),   //v2
      vec2( 0.075,0.04 ),    //v3
      vec2( 0.075,-0.04 ),   //v4
      vec2( 0.04, -0.075 ),  //v5
      vec2( -0.04, -0.075 ), //v6
      vec2( -0.075, -0.04 ), //v7
      vec2( -0.075, 0.04 ),  //v8
      vec2( -0.04, 0.075 ),  //v1
      //human_hair
      vec2( 0.075, 0 ),
      vec2( -0.075, 0 ),
      vec2( 0.075, 0.04 ),
      vec2( -0.075, 0.04 ),
      vec2( 0.04, 0.075 ),
      vec2( -0.04, 0.075 ),
      //human_eyes
      vec2(0.03, -0.02),
      vec2(-0.03, -0.02),
      //human_mouse
      vec2(0.02, -0.05),
      vec2(-0.02, -0.05),
      //human_clothing
      vec2(0.075, -0.075),
      vec2(-0.075, -0.075),
      vec2(0.075, -0.255),
      vec2(-0.075, -0.255),
      vec2(0.075, -0.075),
      vec2(0.075, -0.135),
      vec2(0.155, -0.2),
      vec2(0.12, -0.21),
      vec2(-0.075, -0.075),
      vec2(-0.075, -0.135),
      vec2(-0.155, -0.2),
      vec2(-0.12, -0.21),
      //human_hand
      vec2(0.155, -0.2),
      vec2(0.12, -0.21),
      vec2(0.165, -0.218),
      vec2(0.13, -0.226),
      vec2(-0.155, -0.2),
      vec2(-0.12, -0.21),
      vec2(-0.165, -0.218),
      vec2(-0.13, -0.226),
      //human_Pants
      vec2(-0.075, -0.255),
      vec2(0.0, -0.255),
      vec2(-0.06, -0.385),
      vec2(-0.015, -0.385),
      vec2(0.075, -0.255),
      vec2(0.0, -0.255),
      vec2(0.06, -0.385),
      vec2(0.015, -0.385),
      //human_shoes
      vec2(-0.015, -0.385),
      vec2(-0.015, -0.412),
      vec2(-0.06, -0.385),
      vec2(-0.08, -0.412),
      vec2(0.015, -0.385),
      vec2(0.015, -0.412),
      vec2(0.06, -0.385),
      vec2(0.08, -0.412),

      /***fish_position***/
      //fish_body
      vec2( 0.125, 0.125 ),  //v1
      vec2( 0.25, 0 ),   //v2
      vec2( 0.125, -0.125 ),//v3
      vec2( 0, 0 ),         //v0
      vec2( -0.075, 0.1 ),   //v4
      vec2( -0.075, -0.1 ),  //v5
      //fish_eye
      vec2( 0.2, 0.0), //v6
      //fish_line
      vec2( 0.15, 0.06 ), //v7
      vec2( 0.15, -0.06 )  //v8

    ];
    /*------------------vertex color------------------------------------------*/
    var color = [
      //sun_color
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),
      vec4(1.0,0.2,0.2,1.0),

      /***house_color***/
      //house_up_color
      vec4(0.4, 0.2, 0, 1),
      vec4(0.4, 0.2, 0, 1),
      vec4(0.4, 0.2, 0, 1),
      vec4(0.4, 0.2, 0, 1),
      vec4(0.4, 0.2, 0, 1),
      //house_down_color
      vec4(1, 0.8, 0.5, 1),
      vec4(1, 0.8, 0.5, 1),
      vec4(1, 0.8, 0.5, 1),
      vec4(1, 0.8, 0.5, 1),
      //house_window_color
      vec4(1, 1, 1, 1 ),
      vec4(1, 1, 1, 1 ),
      vec4(1, 1, 1, 1 ),
      vec4(1, 1, 1, 1 ),
      vec4(0, 0, 0, 1 ),
      vec4(0, 0, 0, 1 ),
      vec4(0, 0, 0, 1 ),
      vec4(0, 0, 0, 1 ),
      //house_door_color
      vec4(0.6, 0.4, 0, 1),
      vec4(0.6, 0.4, 0, 1),
      vec4(0.6, 0.4, 0, 1),
      vec4(0.6, 0.4, 0, 1),

      //cloud_color Gradation
      vec4(0.6, 1, 1, 0.5),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      vec4(0.6, 1, 1, 1),
      //rock_color gray
      vec4(0.7, 0.7, 0.7, 1),
      vec4(0.7, 0.7, 0.7, 1),
      vec4(0.7, 0.7, 0.7, 1),
      vec4(0.7, 0.7, 0.7, 1),
      vec4(0.7, 0.7, 0.7, 1),
      vec4(0.7, 0.7, 0.7, 1),
      //river_color Gradation
      vec4(0, 0, 1, 0.85),
      vec4(0, 0, 1, 0.85),
      vec4(0.2, 0.4, 1, 0.85),
      vec4(0.2, 0.4, 1, 0.85),
      //tree_color green
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0, 1, 0, 1),
      vec4(0.5, 0.25, 0, 1),
      vec4(0.5, 0.25, 0, 1),
      vec4(0.5, 0.25, 0, 1),
      vec4(0.5, 0.25, 0, 1),
      vec4(0.5, 0.25, 0, 1),
      vec4(0.5, 0.25, 0, 1),

      /***human_color***/
      //human_face
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      //human_hair
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      //human_eyes
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      //human_mouse
      vec4(0.0, 0.0, 0.0, 1),
      vec4(0.0, 0.0, 0.0, 1),
      //human_clothing
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      vec4(0.6, 0.4, 1.0, 1),
      //human_hand
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      vec4(1.0,0.8,0.7,1.0),
      //human_Pants
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      vec4(0.2,0.2,0.8,1.0),
      //human_shoes
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),
      vec4(0.2,0.0,0.0,1.0),

      /***fish_color***/
      //fish_body
      vec4(0.7,0.4,0.4,1.0),
      vec4(0.9,0.4,0.4,1.0),
      vec4(0.7,0.4,0.4,1.0),
      vec4(1.0,0.6,0.6,1.0),
      vec4(0.6,0.2,0.2,1.0),
      vec4(0.8,0.3,0.3,1.0),
      //fish_eye
      vec4(0.0,0.0,0.0,1.0),
      //fish_line
      vec4(0.9,0.6,0.6,1.0),
      vec4(0.9,0.6,0.6,1.0),
    ];

    /*------------------vertex position---------------------------------------*/
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData(gl.ARRAY_BUFFER, flatten(vertex), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray( vPosition );

    /*------------------vertex color------------------------------------------*/
    var vertexColorBufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vertexColorBufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten( color ), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    render();
    //click listenr
    //when click button position make or move people
    canvas.addEventListener("mousedown", function(event){
      //store click position
      people_x = 2*event.clientX/canvas.width-1;
      people_y = 2*(canvas.height-event.clientY)/canvas.height-1;
      index++;
    });
    //button 'change to night'
    //when click button position make or move people
    document.getElementById( "btnToNight" ).onclick = function () {
      cloudIdx=1;
      //change backgroundcolor
      gl.clearColor( 0.15, 0.2, 0.2, 1.0 );

    };

    //button 'change to sun'
    //when click button position make or move people
    document.getElementById( "btnToSun" ).onclick = function () {
      cloudIdx=0;
      //change backgroundcolor
      gl.clearColor( 0.85, 0.85, 0.85, 1.0 );

    };

    //button 'change direction'
    //when click button
    var myButton = document.getElementById("change_dir");
        myButton.addEventListener("click", function() {
          //change dirction
           if (event.shiftKey == 0) { direction = !direction; }
    });

};
function render(){
  //clear color buffer
  gl.clear( gl.COLOR_BUFFER_BIT );
  //uniform variable
  //thta rotation
  var thetaLoc = gl.getUniformLocation( program, "theta" );
  //offset position
  var offsetLoc = gl.getUniformLocation(program, "offset");

  //make sun
  sun(offsetLoc, thetaLoc);

  //house_offset
  var house_offset_x = 0.5, house_offset_y = 0;
  //make house
  house(offsetLoc, house_offset_x, house_offset_y, thetaLoc);

  //make cloud
  var cloud_x = -0.3, cloud_y = 0.6;
  cloud(offsetLoc, cloud_x, cloud_y, thetaLoc);

  //make river
  river(offsetLoc, thetaLoc);

  //make rock
  rock(offsetLoc, thetaLoc);

  //make tree
  tree(offsetLoc, thetaLoc);

  //make people
  people(offsetLoc, thetaLoc);

  //make fish
  fish(offsetLoc, thetaLoc);

  //callback function 60fps
  window.requestAnimFrame(render);
}

function sun(offsetLoc, thetaLoc){
  //offset & theta
  gl.uniform4fv(offsetLoc, [-0.35,0.7,0,0]);
  //sun rotation every time
  theta += (direction ? 0.1 : -0.1);
  gl.uniform1f(thetaLoc, theta);
  //when night sun delete
  if(cloudIdx==0){
    //offset and position 0 to 10
    gl.drawArrays( gl.TRIANGLE_FAN, 0, 10 );
  }
}

function fish(offsetLoc, thetaLoc){
  //offset & theta
  if(fish_x_position > 0.65 || fish_x_position < -0.65){
    //if fish_position out of canvase than change dirction
    fish_direction = !fish_direction;
    //fish change dirction 180(angle)
    fish_theta += 3.14
  }
  //fish move according to direction
  fish_x_position += (fish_direction ? 0.01 : -0.01);
  //offset & fish_theta
  gl.uniform4fv(offsetLoc, [fish_x_position,-0.755,0,0]);
  gl.uniform1f(thetaLoc, fish_theta);
  //offset and position 122 to 131
  gl.drawArrays( gl.TRIANGLE_FAN, 122, 4 );
  gl.drawArrays( gl.TRIANGLES, 125,3 );
  gl.drawArrays( gl.POINTS, 128 ,1 );
  gl.drawArrays( gl.LINES, 129 ,2 );
}

function house(offsetLoc, house_offset_x, house_offset_y, thetaLoc){
  //offset & theta
  gl.uniform4fv(offsetLoc, [house_offset_x,house_offset_y,0,0]);
  gl.uniform1f(thetaLoc, 0.0);
  //make house_up
  //position 10 to 15
  gl.drawArrays( gl.TRIANGLE_STRIP, 10, 5 );
  //make house_down
  //position 15 to 19
  gl.drawArrays( gl.TRIANGLE_STRIP, 15, 4);
  //make house_window
  //offset and position 19 to 23 & 23 to 27
  gl.uniform4fv(offsetLoc, [house_offset_x+0.1,house_offset_y-0.05,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 19, 4);
  gl.drawArrays( gl.LINES, 23, 4);
  //make house_door
  //offset and position 27 to 31
  gl.uniform4fv(offsetLoc, [house_offset_x-0.1,house_offset_y-0.1,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 27, 4);
}

function cloud(offsetLoc, cloud_x, cloud_y, thetaLoc){
  //when night cloud change position
  if(cloudIdx===1){
    cloud_x = -0.2, cloud_y = 0.8;
  }
  //first cloud
  //offset & theta
  //position 31 to 41 three time
  gl.uniform1f(thetaLoc, 0.0);
  gl.uniform4fv(offsetLoc, [cloud_x-0.5,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );
  gl.uniform4fv(offsetLoc, [cloud_x-0.28,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );
  gl.uniform4fv(offsetLoc, [cloud_x-0.06,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );

  //when night cloud change position
  if(cloudIdx===1){
     cloud_y = 0.4;
  }
  //second cloud
  //offset & theta
  //offset and position 31 to 41 three time
  cloud_x = cloud_x + 1.0, cloud_y = cloud_y + 0.2;
  gl.uniform1f(thetaLoc, 0.0);
  gl.uniform4fv(offsetLoc, [cloud_x-0.5,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );
  gl.uniform4fv(offsetLoc, [cloud_x-0.28,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );
  gl.uniform4fv(offsetLoc, [cloud_x-0.06,cloud_y,0,0]);
  gl.drawArrays( gl.TRIANGLE_FAN, 31, 10 );
}
function river(offsetLoc, thetaLoc){
  //offset & theta
  gl.uniform4fv(offsetLoc, [0,-0.5,0,0]);
  gl.uniform1f(thetaLoc, 0.0);
  //offset and position 47 to 51
  gl.drawArrays( gl.TRIANGLE_STRIP, 47, 4 );
}

function rock(offsetLoc, thetaLoc){
  //offset & theta
  gl.uniform1f(thetaLoc, 0.0);
  gl.uniform4fv(offsetLoc, [0,-0.53,0,0]);
  //offset and position 41 to 47 nine time
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [0.21,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [0.42,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [0.63,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [0.84,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [-0.21,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [-0.42,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [-0.63,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
  gl.uniform4fv(offsetLoc, [-0.84,-0.53,0,0]);
  gl.drawArrays( gl.TRIANGLE_STRIP, 41, 6 );
}

function tree(offsetLoc, thetaLoc){
  //make tree 1
  //position 51 to 60 & 60 to 66 three time
  gl.uniform1f(thetaLoc, 0.0);
  gl.uniform4fv(offsetLoc, [-0.6,0.05,0,0]);
  gl.drawArrays( gl.TRIANGLES, 51, 9 );
  gl.drawArrays( gl.TRIANGLES, 60, 6 );
  //make tree 2
  gl.uniform4fv(offsetLoc, [-0.15,-0.1,0,0]);
  gl.drawArrays( gl.TRIANGLES, 51, 9 );
  gl.drawArrays( gl.TRIANGLES, 60, 6 );
  //make tree 3
  gl.uniform4fv(offsetLoc, [-0.8,-0.25,0,0]);
  gl.drawArrays( gl.TRIANGLES, 51, 9 );
  gl.drawArrays( gl.TRIANGLES, 60, 6 );
}

function people(offsetLoc, thetaLoc){
  //offset move click position
  gl.uniform4fv(offsetLoc, [people_x, people_y + 0.2, 0, 0]);
  gl.uniform1f(thetaLoc, 0.0);
  //Appears only when clicked.
  if(index != 0){
    //draw face
    gl.drawArrays( gl.TRIANGLE_FAN, 66, 10 );
    //draw hair
    gl.drawArrays( gl.TRIANGLE_STRIP, 76, 6 );
    //draw eyes
    gl.drawArrays( gl.POINTS, 82, 2);
    //draw mouse
    gl.drawArrays( gl.LINES, 84, 2);
    //draw dress
    gl.drawArrays( gl.TRIANGLE_STRIP, 86, 4);
    gl.drawArrays( gl.TRIANGLE_STRIP, 90, 4);
    gl.drawArrays( gl.TRIANGLE_STRIP, 94, 4);
    //draw hand
    gl.drawArrays( gl.TRIANGLE_STRIP, 98, 4);
    gl.drawArrays( gl.TRIANGLE_STRIP, 102, 4);
    //draw pants
    gl.drawArrays(gl.TRIANGLE_STRIP, 106, 4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 110, 4);
    //draw shoes
    gl.drawArrays(gl.TRIANGLE_STRIP, 114, 4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 118, 4);
  }
}
