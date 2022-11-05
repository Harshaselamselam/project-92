var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image(){
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {
		block_image_object =Img;
		block_image_object.scaleToWidth(700);
		block_image_object.scaleToHeight(510);
		block_image_object.set({
			top:block_y,
			left:block_x
		});
		canvas.add(block_image_object);

	    });

	new_image();
}
function playSound(){

}
