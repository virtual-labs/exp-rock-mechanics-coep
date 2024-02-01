var coreName=0;
var FinalJsonArr=[];
finalJson2={};
function mainPage(){
	

$("#application").prop("hidden",false);

$('#canvas-div').html();
$('#coreType').change(function(){
	mimic();
	coreNo=coreName=$("#coreType").val();
	console.log("core name"+coreName);
	console.log(masterJson);
	htm='<span>'
		+'<center   class="blink">Note :- Only taken core length pieces which is greater then and equal to 10CM (>=10)</center></span>'
		for(var i=0;i<masterJsonArr.length;i++)
		{
			
				 		if(i==coreName-1){
				 			
						htm+='<br><center><span class="setStyle"> Set of core length pieces = [ '+masterJsonArr[i].coreSet +' ]'
						+' And Total length of the core run = '+masterJsonArr[i].length +'</span></center>'
				 		}
			
		}
    htm+='<div class="card" style="margin:20px;" id="CalculateActualFlow" hidden>'
//		+'<div class="card-header">'
//		+'<center><label style="font-size:20px;color:#fff;">Calculate RQD</label></center>'
//		+' </div>'
		+'<div class="card-body">'
		+'	<h5 class="card-title"></h5>'
		+'	<p class="card-text" >'
		 + '<div class="row"   >'
	         +'<div class="col-sm-3">'
	         +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"><b>Calculate RQD : </b></label>'
	         +'</div>'
	         +'<div class="col-sm-5">'
	         +'<input type="text" id="ans" value="" style=margin:15px 10px;width:100%;"  class=" form-control" disabled/>'
	         +'</div>'
	         +'<div class="col-sm-4">'
	         +'<br><button type="submit" class="btn btn-danger" id="btnAnsCheck" style="width:100%;margin-top: -6px;" data-toggle="modal" data-target="#ansModel" disabled >Submit</button>'
	         +'</div>'
	     +'</div>'
		+'</p>'
		
		+'</div>'
		+'</div>'
		+ '<div class="row" id="CalculateActualFlow2" hidden>'

        +'<div class="col-sm-4">'
        +'<label  id=""  class="" style="font-size:16px;margin:15px 10px ;"><b>DESCRIPTION<br> (Weathering and special features)   </b></label>'
        +'</div>'
     
        +'<div class="col-sm-4">'
        +'<select  class="form-control "  id="description" style="height:auto; margin-top:30px;"  >'
 	   +'<option value="-1">--- Select Description --- </option>'
 	  +'<option value="0" id="Weathered">Weathered  </option>'
 	   +'<option value="1" id="Unweathered">Unweathered  </option>'
 	   +'<option value="2" id="Slightly Weathered">Slightly Weathered  </option>'
 	   +'<option value="3" id="Medium Weathered">Medium Weathered </option>'
 	   +'<option value="4" id="Completely Weathered">Completely Weathered  </option>'
 	  +'<option value="5" id="High Weathered" >High Weathered  </option>'
 	 
 	   +'</select>'
       
        +'</div>'
        +'<div class="col-sm-3" id="message" style="margin-top: 33px;">'
    
      +'</div>'
        
    +'</div>'
		+'	<div class="modal" id="ansModel">'
		 +' <div class="modal-dialog">'
		+'	<div class="modal-content">'

//			  <!-- Modal Header -->
		+'	  <div class="modal-header" style="background-color:rgba(78,109,114,1);color:#fff;">'
		+'		<h4 class="modal-title">Message Box</h4>'
		+'		<button type="button" class="close" data-dismiss="modal">&times;</button>'
		+'	  </div>'

//			  <!-- Modal body -->'
		+'	  <div class="modal-body" id="modelBody">'
		+'		Modal body..'
		+'	  </div>'

//			  <!-- Modal footer -->
		+'	  <div class="modal-footer">'
		+'		<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>'
		+'	  </div>'

		+'	</div>'
		 +' </div>'
		+'</div>'
		$("#canvas-div").html(htm);

	if(coreName=="1"){
		coreName="c1";
		
		$("#CalculateActualFlow").prop("hidden",false);
	}
	else if(coreName=="2"){
		coreName="c2";
		$("#CalculateActualFlow").prop("hidden",false);
	}
	else if(coreName=="3"){
		coreName="c3";
		$("#CalculateActualFlow").prop("hidden",false);
	}
	else if(coreName=="4"){
		coreName="c4";
		$("#CalculateActualFlow").prop("hidden",false);
	}
	else if(coreName=="5"){
		coreName="c5";
		$("#CalculateActualFlow").prop("hidden",false);
	}
//	else if(coreName=="5"){
//		coreName="c3";
//		$("#CalculateActualFlow").prop("hidden",false);
//	}
	else if(coreName=="0"){
		alert("select core type");
	}
//	htm='<center><img src="images/'+coreName+'.png" class="img-fluid" style=" width: 440px;height: 584px;" ></center>'
	
	
	
//		$("#main-div-conf").html(htm);
	var id=0;
	$('#btnAnsCheck').click(function(){
		$("body").css("padding","0px 0px 0px 0px");
		console.log("btn");
		      flow = $("#ans").val();
		     
		      rountofAns= masterJsonArr[coreNo-1].answer;
			  if(flow==""){
				  	$("#modelBody").html("<b class='boldTextblue'>Enter numeric value.</b> ");
			}
			else
				{
					if (id <= 3) {
						if (rountofAns == flow) {
							//$("#ans").val("");
							$("#CalculateActualFlow2").prop("hidden",false);
							id=0;
							 $("#modelBody").css("color", "blue");
							$("#modelBody").html("<b class='boldTextblue'>Correct Answer Now See The Below Table .</b>");
//							tableCreation();
					
						} else if (rountofAns != flow) {
							 $("#modelBody").css("color", "red");
//						alert("Entered value is incorrect.Try it again... ");
						$("#modelBody").html("<b class='boldTextRed'>Entered value is incorrect.Try it again...</b>");
						
						}


					} else if (id == 4) {
						 $("#modelBody").css("color", "blue");
						
						$("#modelBody").html("Formula : RQD= ( sum of core length pieces >= 10cm / total length of core run ) * 100");
						
						
					} else {
						flow = $("#ans").val();

						if (rountofAns == flow) {
							
							//$("#ans").val("");
							
							id=0;
							 $("#modelBody").css("color", "blue");
							$("#modelBody").html("<b class='boldTextblue'>Your Answer is Correct. Now refer the below table .</b>");
							$("#CalculateActualFlow2").prop("hidden",false);
							
//							tableCreation();
						} else {

							 $("#modelBody").css("color", "green");
							$("#modelBody").html("<b class='boldTextblue'>Correct Answer is " + rountofAns+'</b>');
						}
					}
					id++;
		
				} 
		  });
	$('#description').change(function(){

			             descriptionValue=$("#description").children(":selected").attr("id");
				 		if(masterJsonArr[coreNo-1].description==descriptionValue)
				 		{	
				 			$('#message').html( '<span class="messageCorrect" style="margin-top:"><img src="images/checked.png"/></span>');
				 			$('#description').prop("disabled",true);
				 			
				 			coreType=$("#coreType").children(":selected").attr("id");
							   $("#coreType option[id="+coreType+"]").attr("disabled",true);
							   FinalJson={};
							   
									   FinalJson.name=coreName ;
									   FinalJson.RQD=rountofAns;
									   FinalJson.description=descriptionValue;
									
							   

							   FinalJsonArr.push(FinalJson);
							   finalJson2=FinalJsonArr;

							   console.log(FinalJsonArr);
							   tableCreate(FinalJsonArr,coreNo);
				 		}
				 		else
				 		{
				 			$('#message').html( '<span class="messageWrong"><img src="images/shape.png"/></span>');
				 		}
	
	});
	
	
});


$('#refTable').click(function(){
	$(".modal-header").css("background-color","#4d6c71");
	$(".modal-header").html("DEGREES OF WEATHERING");
	htm='<div class="row">'
		+'<div class="col-sm-12">'
		+'<table class=" table  table-hover table-responsive">'
		  +'<thead class="thead-dark">'
		  +'<tr>'
   +' <th>DIAGNOSTIC FEATURE DESCRIPTION TERM</th>'
   +'<th>DISCOLOURATION EXTENT</th>'
      +' <th>FRACTURE CONDITION</th>'
      +' <th>SURFACE CHARACTERISTICS</th>'
      +'<th>ORIGINAL TEXTURE</th>'
      +'<th>GRAIN BOUNDARY CONDITION</th>'
      +'</tr>'
      +' <tr>'
      +'<td>UNWEATHERED</td>'
      +'<td>NONE</td>'
      +'<td>CLOSED OR DISCOLOURED</td>'
      +'<td>UNCHANGED</td>'
      +'<td>PRESERVED</td>'
      +'<td>TIGH</td>'
      +'</tr>'
      +'<tr>'
      +'<td>SLIGHTLY WEATHERED</td>'
      +'<td>20% OF FRACTURE SPACING ON BOTH SIDES OF FRACTURE</td>'
      +'<td>DISCOLOURED MAY CONTAIN THIN FILLING</td>'
      +'<td>PARTIAL DISCOLOURATION</td>'
      +'<td>PRESERVED</td>'
      +'<td>TIGHT</td>'
      +'</tr>'
      +'<tr>'
      +' <td>MEDIUM WEATHERED</td>'
      +'<td>20% OF FRACTURE SPACING ON BOTH SIDES OF FRACTURE</td>'
      +'<td>DISCOLOURED MAY CONTAIN THICK FILLING</td>'
      +'<td>PARTIAL TO COMPLETE DISCOLOURATION NOTFRIABLE EXCEPT POORLY CEMETED ROCKS</td>'
      +' <td>PRESERVED</td>'
      +' <td>PARTIAL</td>'
      +'</tr>'
      +'<tr>'
      +'<td>HIGHLY WEATHERED</td>'
      +'<td>THROUGHOUT</td>'
      +'<td></td>'
      +'<td>FRIABLE POSSIBLY PITTED</td>'
      +'<td>AND MAINLY PRESERVED</td>'
      +'<td>PARTIAL SEPARATION</td>'
      +'</tr>'
      +'<tr>'
      +'<td>COMPLETELY WEATHERED</td>'
      +' <td>THROUGHOUT</td>'
      +'<td></td>'
      +' <td>RESEMBLES </td>'
      +' <td>PARTLY PRESERVED</td>'
      +'<td>COMPLETE SEPARATION</td>'
      +'</tr>'
      +'</thead>'
      +'</table>'
      +'</div>'
      +'</div>'
     $("#tableModel").html(htm);
});
}