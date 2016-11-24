// DRAW_BOUNDS 变量在 controller.js 脚本中定义
function draw()
{
    for(var i=0;i<=4;i++)
    drawit(canvas[i],shudu[i],currentPos[i]);
}
// 往 canvas 上画出数独题目 
function drawit(canvas,shudu,currentPos){
    var context = canvas.getContext("2d");
    var N=shudu.getN();
    var M=3;
    var size = N*M;
    var ceil_w = DRAW_BOUNDS[2]/size;
    var ceil_h = DRAW_BOUNDS[3]/size;
    var font_size = 24;
    var font_offsetH = DRAW_BOUNDS[0] + (ceil_w - font_size)/2 + 4;
    var font_offsetV = DRAW_BOUNDS[1] + (ceil_h - font_size)/2 + 24;
    context.clearRect(
    DRAW_BOUNDS[0],
    DRAW_BOUNDS[1],
    DRAW_BOUNDS[2],
    DRAW_BOUNDS[3]
    );
    //alert(ceil_w);
    //alert(ceil_h);
    //????¡¤??¨°
    context.lineWidth = 2;
    context.strokeStyle = "black";
    for(var i=0;i<size;i++){
    for(var j=0;j<size;j++){
        //alert((i*ceil_w + DRAW_BOUNDS[0])+","+(j*ceil_h + DRAW_BOUNDS[1]));
        context.strokeRect(
        i*ceil_w + DRAW_BOUNDS[0],
        j*ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
        );
    }
    }
 
    //????¨ºy¡Á?
    for(var i=0;i<size ;i++){
    for(var j=0;j<size+1 ;j++){
        //????¡À3?¡ã
	if(j<size)
	{
        context.fillStyle = shudu.visible(i, j)?"gray":"white";
        context.fillRect(
        i*ceil_w + DRAW_BOUNDS[0],
        j*ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
        );
 	}
	else
	{
	
        context.fillStyle = "lightblue";
        context.fillRect(
        i*ceil_w + DRAW_BOUNDS[0],
        j*ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
        );
	}
        //????¨ºy¡Á?
        context.fillStyle = "black";
        context.font = "32px sans-serif";
	if(j<size)
	{
	  
	  if(shudu.realMap[i][j] != 0){
          context.fillText(
            shudu.realMap[i][j],
            ceil_w*i + font_offsetH,
            ceil_h*j + font_offsetV
          );
          }
	}
	else
	{
	    context.fillStyle = "red";
	    context.fillText(
            i+1,
            ceil_w*i + font_offsetH,
            ceil_h*j + font_offsetV
          );
	}
     }
    }
    
	
        context.fillStyle = "lightblue";
        context.fillRect(
        size*ceil_w + DRAW_BOUNDS[0],
        size*ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
        ); 

        context.fillStyle = "red";
        context.font = "28px sans-serif";
	context.fillText(
        "删",
        ceil_w*size + font_offsetH,
        ceil_h*size + font_offsetV
        );

    context.lineWidth = 5;
    context.strokeStyle = "black";
    
    if(shudu.style != 3)
    {
    
    for(var i=0;i<=N;i++){
    context.beginPath();
    context.moveTo(
        i*M*ceil_w + DRAW_BOUNDS[0],
        DRAW_BOUNDS[1]
    );
    context.lineTo(
        i*M*ceil_w + DRAW_BOUNDS[0],
        DRAW_BOUNDS[1] + DRAW_BOUNDS[3]+ceil_h
    );
    context.stroke();
    }
    for(var i=0;i<M;i++){
    context.beginPath();
    context.moveTo(
        DRAW_BOUNDS[0],
        i*N*ceil_h + DRAW_BOUNDS[1]
    );
    context.lineTo(
        DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
        i*N*ceil_h + DRAW_BOUNDS[1]
    );
    context.stroke();
    }
    
    }
    
    //**************选填数字描边
    context.beginPath();
    context.moveTo(
        DRAW_BOUNDS[0],
        (N*M)*ceil_h + DRAW_BOUNDS[1]
    );
    context.lineTo(
        DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
        (N*M)*ceil_h + DRAW_BOUNDS[1]
    );
    context.stroke();
    
    
    context.beginPath();
    context.moveTo(
        DRAW_BOUNDS[0],
        (N*M+1)*ceil_h + DRAW_BOUNDS[1]
    );
    context.lineTo(
        DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
        (N*M+1)*ceil_h + DRAW_BOUNDS[1]
    );
    context.stroke();
    
    
    context.beginPath();
    context.moveTo(
        DRAW_BOUNDS[0],
        (N*M)*ceil_h + DRAW_BOUNDS[1]
    );
    context.lineTo(
        DRAW_BOUNDS[0] ,
        (N*M+1)*ceil_h + DRAW_BOUNDS[1]
    );
    context.stroke();

    
    
    context.beginPath();
    context.moveTo(
        DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
        (N*M)*ceil_h + DRAW_BOUNDS[1]
    );
    context.lineTo(
        DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
        (N*M+1)*ceil_h + DRAW_BOUNDS[1]
    );
    context.stroke();

    //*****************选填数字描边

    context.lineWidth = 2;
    context.strokeStyle = "black";
    for(var i=0;i<size;i++){
    for(var j=0;j<size;j++){
        //alert((i*ceil_w + DRAW_BOUNDS[0])+","+(j*ceil_h + DRAW_BOUNDS[1]));
        context.strokeRect(
        i*ceil_w + DRAW_BOUNDS[0],
        j*ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
        );
    }
    }
    
    /*
    context.lineWidth = 5;
    context.strokeStyle = "black";
    if(shudu.style == 2)
    	{
    	   context.beginPath();
   	   context.moveTo(
           DRAW_BOUNDS[0],
           DRAW_BOUNDS[1]
           );
    	   context.lineTo(
           DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
           DRAW_BOUNDS[1] + DRAW_BOUNDS[3]
    	   );
    	   context.stroke();
    	   
    	   context.beginPath();
   	   context.moveTo(
           DRAW_BOUNDS[0] + DRAW_BOUNDS[2],
           DRAW_BOUNDS[1]
           );
    	   context.lineTo(
           DRAW_BOUNDS[0] ,
           DRAW_BOUNDS[1] + DRAW_BOUNDS[3]
    	   );
    	   context.stroke();
    	}
    
    	*/
   

    context.lineWidth = 5;
    context.strokeStyle = "blue";
    if(currentPos != null){
    context.strokeRect(
        currentPos[0] * ceil_w + DRAW_BOUNDS[0],
        currentPos[1] * ceil_h + DRAW_BOUNDS[1],
        ceil_w,
        ceil_h
    );
    }
}
