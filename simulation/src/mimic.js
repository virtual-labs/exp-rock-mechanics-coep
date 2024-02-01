
function mimic(){
	$('#main-div-conf').html("");
//var paper = new Raphael(document.getElementById('main-div-conf'),800,800);
var w = 900;
var h = 700;
var x=y=100;
var width = $(window).width();

if ($(window).width() < 500) {
	width = $(this).width();
	paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
	paper.setViewBox(0, 0, w, h, true);
	paper.setSize('100%', '100%');
} else{
	paper = new Raphael(document.getElementById('main-div-conf'), '100%', '100%');
	paper.setViewBox(0, 0, w, h, true);
	paper.setSize('100%', '100%');
}


var angle=parseInt($("#coreType").val());
var start = paper.image("images/start.png",(x-20),(y-60), 100,90);

	if(angle==1){
		//var start = paper.image("images/start.png",(x-20),(y-60), 100,90);
		var rImg2=paper.image("images/r2222Preview.png",(x-12),(y+110), 195,120).rotate(360);
		var rImg3=paper.image("images/r2222Preview.png",(x+170),(y+108), 195,120).rotate(180);
		var rImg4=paper.image("images/4.png",(x+170),(y+111.5), 20,110);
		//rockBreaks();	
		
	}else if (angle==2){
		//var start = paper.image("images/start.png",(x-20),(y-60), 100,90);
		var unweathered1=paper.image("images/unweathered_preview.png",(x-60),(y+170), 500,280).rotate(182);
		var unweathered2=paper.image("images/unweathered_preview.png",(x+264),(y+290), 500,280).rotate(3);
	
	}else if(angle==3){
		//var start = paper.image("images/start.png",(x-20),(y-60), 100,90);
		var rockImg1= paper.image("images/swPreview.png",(x-40),(y+100), 400,200).rotate(185);
		var rockImg2= paper.image("images/swPreview.png",(x+200),(y+98.5), 400,200).rotate(4); 
	
	}else if(angle==4){
		//var start = paper.image("images/start.png",(x-20),(y-60), 100,90);
		var rockImg41= paper.image("images/c444444e.png",(x+10),(y+100), 400,200);
		var rockImg42= paper.image("images/c444444e.png",(x+240),(y+98), 400,200).rotate(180); 
	
	}else{
		//var rect=paper.rect((x+190),(y+130), 400,180).attr({'fill':'#000'});
		//var start = paper.image("images/start.png",(x-20),(y-60), 100,90);
		var rockPart1=paper.image("images/cwImg1preview.png",(x+180),(y+60), 440,180);
		var rockPart2=paper.image("images/cw5Imgpreview.png",(x+330),(y+145), 300,200);
		var rockPart3=paper.image("images/cwImg3preview.png",(x+65),(y+140), 345,200);
		
		
	}

	start.click(function(){
		$("#ans").prop("disabled",false);
		$("#btnAnsCheck").prop("disabled",false);
		if(angle==1){		
			var transform_rImg3=Raphael.animation({ 'width': 195, 'height':120, 'x': (x+130), 'y': (y+110) },2000);
			rImg3.animate( transform_rImg3 );
			var transform_rImg4=Raphael.animation({ 'width': 20, 'height':110, 'x': (x+220), 'y': (y+110) },2000);
			rImg4.animate( transform_rImg4 );
		}else if(angle==2){
			var anim1=Raphael.animation({ 'width': 500, 'height':280, 'x': (x-10), 'y':(y+170) },2000);
//			unweathered1.animate(anim1);
			unweathered1.animate( anim1 );
			var anim2=Raphael.animation({ 'width': 500, 'height':280, 'x': (x+304), 'y': (y+290) },2000);
			unweathered2.animate( anim2 );
		
			
		}else if(angle==3){
			var transform_rockImg1=Raphael.animation({ 'width': 400, 'height':200, 'x': (x-10), 'y': (y+100) },2000);
			rockImg1.animate( transform_rockImg1);
			
			var transform_rockImg2=Raphael.animation({ 'width': 400, 'height':200, 'x': (x+250), 'y': (y+98.5) },2000);
			rockImg2.animate( transform_rockImg2);
			
			
		}else if(angle==4){
			var anim41=Raphael.animation({ 'width': 400, 'height':200, 'x': (x-40), 'y': (y+100) },2000);
			rockImg41.animate( anim41);
			
			var anim42=Raphael.animation({ 'width': 400, 'height':200, 'x': (x+170), 'y': (y+98) },2000);
			rockImg42.animate( anim42);
			
			
		}else{
			var transform_rockPart1=Raphael.animation({ 'width': 440, 'height':180, 'x': (x+180), 'y': (y+40) },2000);
			rockPart1.animate( transform_rockPart1);
			
			var transform_rockPart2=Raphael.animation({ 'width': 300, 'height':200, 'x': (x+330), 'y': (y+160) },2000);
			rockPart2.animate( transform_rockPart2);
			
			var transform_rockPart3=Raphael.animation({ 'width': 345, 'height':200, 'x': (x+40), 'y': (y+160) },2000);
			rockPart3.animate( transform_rockPart3);
			
		}
	
	});

}
