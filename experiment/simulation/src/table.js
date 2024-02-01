
function tableCreate(FinalJsonArr,coreNo)		
{console.log("core no"+coreNo);
	$('#next').prop("disabled",false);
			var tableMainDiv=""
					+ '<div class="well well-lg">'
					
//					+'<center><b>Material Type : '+masterJson.demo[0].material+'</b></center>'
				    +'<table class="table  table-bordered table-hover" >'
					+ ' <thead>'

					+ '  <tr>'
					+ '  <th scope="col"><center>Core Name</center></th>'
					+ '   <th scope="col"><center >RQD </center></th>'
					+ '  <th scope="col"><center>DESCRIPTION</center></th>'
					
					
					+ '   </tr>'
					+ '  </thead>'
					+ '   <tbody>'
					for(var i=0;i<FinalJsonArr.length;i++)
					{
						
						tableMainDiv+='<tr>'
								+'   <td><center >' + FinalJsonArr[i].name+ '</center></td>'
								+' <td><center style="color:red;">' + FinalJsonArr[i].RQD + '</center></td>'
								+ ' <td><center style="color:red;">' + FinalJsonArr[i].description + '</center></td>'
						       
						        + ' </tr>'
					}
			tableMainDiv+=' </tbody>'
					 + '  </table>'
					 + ' </div>'
					+'<div class="row">'
					+'<div class="col-sm-8">'
					
					 + ' </div>'
					 +'<div class="col-sm-4">'
					 if(i<5){
						 tableMainDiv+='<button type="button" class="btn btn-danger btn-sm" id="next">SELECT NEXT CORE</button>'
					 }
					 else
						 {
						 $('#coreType').prop("disabled",true);
						 htm='<b>Experiment Completed Successfully.</b>'
							 $('.setStyle').html(htm);
						 $('.setStyle').css("background-color","Green");
						 $('.setStyle').css("color","#fff");
						 clearInterval(cron);
						 $('#CalculateActualFlow,#CalculateActualFlow2,.blink').prop("hidden",true);
						 
						 }
						
			htm+= ' </div>'
					 + ' </div>'
				
				$("#tableDesign").html(tableMainDiv);
			
				$('#next').click(function(){
					$('#next').prop("disabled",true);
					$('#canvas-div').html("");
				
						
					
			});
				
}
