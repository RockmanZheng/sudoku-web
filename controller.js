// 定义数独比赛系统所需的公有变量
// 加载试题
// 控制输入

var N = 3;
var M = 3;
// 加载问题 xml 时获取题目数
var problem_num;
// 画布绘制范围
var DRAW_BOUNDS = [80, 20, 480, 500];
 
var shudu=new Array();//数独对象
var currentPos=new Array();//当前位置
var canvas=new Array();//画布

var starttime=new Date();  

// 主函数
// 在 index 页面加载时立即调用
function main(){  
     
     /*
     var severtime=new Date(); 
     tt=document.getElementById("time");
     severtime=GetSevertime();
     starttime.setFullYear(2016);
     starttime.setMonth(3);
     starttime.setDate(15);
     starttime.setHours(22);
     starttime.setMinutes(30);
     starttime.setSeconds(00);
     //starttime=GetSevertime();
     if(severtime<starttime)
     	{
     	 alert("还没到时间呢!"+"\n现在服务器时间："+severtime+"\n比赛开始时间："+starttime);
     	 return ; 
     	}   
    */
    //GetProblem();
	// 加载数独试题
	//problem_num = LoadProblem("problem.xml");
	//for(var i = 0; i
    shudu[0] = new Shudu(0);  
    canvas[0] = document.getElementById("canvas"+0);
    canvas[0].addEventListener("click", function(e){selectGrid(e,0);}, true);
    canvas[0].addEventListener("click", function(e){insertNum(e,0);}, true);
    
    shudu[1] = new Shudu(1);  
    canvas[1] = document.getElementById("canvas"+1);
    canvas[1].addEventListener("click", function(e){selectGrid(e,1);}, true);
    canvas[1].addEventListener("click", function(e){insertNum(e,1);}, true);
    
    shudu[2] = new Shudu(2);  
    canvas[2] = document.getElementById("canvas"+2);
    canvas[2].addEventListener("click", function(e){selectGrid(e,2);}, true);
    canvas[2].addEventListener("click", function(e){insertNum(e,2);}, true);
    
    shudu[3] = new Shudu(3);  
    canvas[3] = document.getElementById("canvas"+3);
    canvas[3].addEventListener("click", function(e){selectGrid(e,3);}, true);
    canvas[3].addEventListener("click", function(e){insertNum(e,3);}, true);
    
    shudu[4] = new Shudu(4);  
    canvas[4] = document.getElementById("canvas"+4);
    canvas[4].addEventListener("click", function(e){selectGrid(e,4);}, true);
    canvas[4].addEventListener("click", function(e){insertNum(e,4);}, true);
    
    draw();
}
 
//选择单元格
function selectGrid(event,i){
    var posX = event.pageX - canvas[i].offsetLeft;
    var posY = event.pageY - canvas[i].offsetTop;
    

    //判断选中的位置
    var tmpPos = toPos(posX, posY,i);
    
    if(tmpPos == null)
    return;
    currentPos[i] = shudu[i].visible(tmpPos[0], tmpPos[1])?currentPos[i]:tmpPos;
    
    draw();
}
 
//填写数据
function insertNum(event,i){
    var x = event.pageX - canvas[i].offsetLeft;
    var y = event.pageY - canvas[i].offsetTop;
    //alert(x+","+y);
    var N=shudu[i].getN();
    var M=3;
    var CEIL_W = DRAW_BOUNDS[2]/(N*M);
    var CEIL_H = DRAW_BOUNDS[3]/(N*M);

    if(x < DRAW_BOUNDS[0] || y < DRAW_BOUNDS[3] + DRAW_BOUNDS[1])
    return ;

    if(
    DRAW_BOUNDS[2] + DRAW_BOUNDS[0] +CEIL_W <= x ||
    DRAW_BOUNDS[3] + DRAW_BOUNDS[1] +CEIL_H < y
    )
    return;

    //alert("ceil-w"+CEIL_W);
    var posX = Math.floor((x - DRAW_BOUNDS[0])/CEIL_W)+1;
    //alert(posX);
    //alert(currentPos[i]);
    if(posX<=N*M&&currentPos[i])shudu[i].insert(posX,currentPos[i]);
    else shudu[i].delete(currentPos[i]);
    
    draw();
}
 
//判断是否在绘图区域内
function inDrawRange(x, y,i){
    if(x < DRAW_BOUNDS[0] || y < DRAW_BOUNDS[1])
    return false;
 
    if(
    DRAW_BOUNDS[2] + DRAW_BOUNDS[0] <= x ||
    DRAW_BOUNDS[3] + DRAW_BOUNDS[1] <= y
    )
    return false;
 
    return true;
}
 
//将坐标转换为位置
function toPos(x, y,i){
    if(!inDrawRange(x, y,i))
    return currentPos[i];
 
    var N=shudu[i].getN();
    var M=3;
    var CEIL_W = DRAW_BOUNDS[2]/(N*M);
    var CEIL_H = DRAW_BOUNDS[3]/(N*M);
 
    var posX = Math.floor((x - DRAW_BOUNDS[0])/CEIL_W);
    var posY = Math.floor((y - DRAW_BOUNDS[1])/CEIL_H);
 
    return [posX, posY];
}
