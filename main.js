
var canvas = new fabric.Canvas("myCanvas");
var blockWidth = 30;
var blockHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";
var blockObject = "";

function playerUpdate() {
fabric.Image.fromURL("player.png", function(Img){
    playerObject = Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top:playerY,
        left:playerX
    });
canvas.add(playerObject);
});

}
function newImg(getImg) {
    fabric.Image.fromURL(getImg, function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY,
            left:playerX
        });
    canvas.add(blockObject);
    });
    
    }
    
    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {
        var keyPressed = e.keyCode;
      console.log(keyPressed);
      if (e.shiftKey == true && keyPressed == "80") {
          console.log("p & shift pressed together");
          blockWidth = blockWidth + 10;
          blockHeight = blockHeight + 10;
          document.getElementById("currentWidth").innerHTML = blockWidth;
          document.getElementById("currentHeight").innerHTML = blockHeight;
      }
      if (e.shiftKey == true && keyPressed == "77") {
        console.log("m & shift pressed together");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockWidth;
        document.getElementById("currentHeight").innerHTML = blockHeight;
    }

    if (keyPressed == '70'){
        newImg('ironman_face.png');
        console.log("f");
    }
    if (keyPressed == '66'){
        newImg('spiderman_body.png');
        console.log("b");
    }
    if (keyPressed == '76'){
        newImg('hulk_legs.png');
        console.log("l");
    }
    if (keyPressed == '82'){
        newImg('thor_right_hang.png');
        console.log("r");
    }
    if (keyPressed == '72'){
        newImg("captain_america_left_hand.png");
        console.log("h");
    }
     if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    }