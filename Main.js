var Canvas = new fabric.Canvas("myCanvas");
block_imageWidth=30;
block_imageHeight=30;

PlayerX=10;
PlayerY=10;
var PlayerObject="";
var ImageObject="";

function PlayerUpdate() {
    fabric.Image.fromURL(""),function(Img) {
        PlayerObject=Img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top:PlayerY,
            left:PlayerX,
        });
        Canvas.add(PlayerObject);
    })
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