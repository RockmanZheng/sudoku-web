/****�����Ϸ���****/

// ���ѡ���Ƿ�����д������Ϣ
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
    	alert("��*��д�������Ϣ*���ύร�");
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
// ��ѡ����õĴ����뵽���ص� sodu Ԫ����
// �Ա��ϴ������ݿ���
function fill(x){
    var vv="";
    for(var i=0;i<shudu[x].size;i++)
    	for(var j=0;j<shudu[x].size;j++)
    	{
    		vv+=shudu[x].realMap[i][j];
    	}
    document.getElementById("sodu"+(x+1)).value=vv;
    
}
 
 
