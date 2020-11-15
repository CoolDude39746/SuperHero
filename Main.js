var Canvas = new fabric.Canvas("myCanvas");
block_imageWidth=30;
block_imageHeight=30;

PlayerX=10;
PlayerY=10;
var PlayerObject="";
var ImageObject="";

function PlayerUpdate() {
    fabric.Image.fromURL("Final_output.png"),function(Img) {
        PlayerObject=Img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top:PlayerY,
            left:PlayerX,
        });
        Canvas.add(PlayerObject);
    }
}

function NewImage(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        PlayerObject=Img;
        PlayerObject.scaleToWidth(block_imageWidth);
        PlayerObject.scaleToHeight(block_imageHeight);
        PlayerObject.set({
            top:PlayerY,
            left:PlayerX,
        });
        Canvas.add(ImageObject);
    })
}

function myKeyDown(e) {
    KeyPressed=e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey==true && KeyPressed=='80') {
        console.log("p and shift");
        block_imageWidth=block_imageWidth+10;
        block_imageHeight=block_imageHeight+10;
        document.getElementById("current_width").innerHTML=block_imageWidth;
        document.getElementById("current_height").innerHTML=block_imageHeight;
    }

    if (e.shiftKey==true && KeyPressed=='77') {
        console.log("m and shift");
        block_imageWidth=block_imageWidth-10;
        block_imageHeight=block_imageHeight-10;
        document.getElementById("current_width").innerHTML=block_imageWidth;
        document.getElementById("current_height").innerHTML=block_imageHeight;
    }

    if (KeyPressed=='38') {
        Up();
        console.log("Up");
    }

    function Up() {
    if (PlayerY >= 20) {
        PlayerY = PlayerY-block_imageHeight;
        console.log("block_imageHeight" + block_imageHeight);
        console.log("When Up Arrow Is Pressed,X =" + PlayerX + ",Y =" + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Down() {
    if (PlayerY <= 450) {
        PlayerY = PlayerY+block_imageHeight;
        console.log("block_imageHeight" + block_imageHeight);
        console.log("When Down Arrow Is Pressed,X =" + PlayerX + ",Y =" + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Left() {
    if (PlayerX >= 50) {
        PlayerX = PlayerX-block_imageWidth;
        console.log("block_imageWidth" + block_imageWidth);
        console.log("When Left Arrow Is Pressed,X =" + PlayerX + ",Y =" + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Right() {
    if (PlayerX <= 900) {
        PlayerX = PlayerX+block_imageWidth;
        console.log("block_imageWidth" + block_imageWidth);
        console.log("When Right Arrow Is Pressed,X =" + PlayerX + ",Y =" + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}