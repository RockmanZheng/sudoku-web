/****检测游戏结果****/

// 检查选手是否已填写基本信息
function update(){
    showtime();
    var score=0;
    for(var i=0;i<=4;i++)
    	{
    	    fill(i);
    	}
    var id=document.getElementById("Id").value;
    var name=document.getElementById("Name").value;
    var tel=document.getElementById("Tel").value;
    if(id==""||name=="")
    {
    	alert("请*填写完个人信息*再提交喔！");
    	return false;
    }
    else return true;
}
 
function update_ans(){
    for(var i=0;i<=4;i++)
    	{
    	    fill(i);
    	}
}
// 将选手填好的答案输入到隐藏的 sodu 元素中
// 以便上传到数据库中
function fill(x){
    var vv="";
    for(var i=0;i<shudu[x].size;i++)
    	for(var j=0;j<shudu[x].size;j++)
    	{
    		vv+=shudu[x].realMap[i][j];
    	}
    document.getElementById("sodu"+(x+1)).value=vv;
    
}
 
 
