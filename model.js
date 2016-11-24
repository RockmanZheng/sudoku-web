//������
function Shudu(num){
    this.n = 0;
    this.m = 0;
    this.num = num;
    this.style = 0;
    this.size;
    
    //��������
    this.generateContent();
}



Shudu.prototype.getN = function(){
    return this.n;
}

//��������
Shudu.prototype.generateContent = function(){

    if(this.num<=2) this.style=2;
    else this.style=1;
    // ���� 1: �Ź���
    if(this.style==1)
    	{
    		this.n=3;
    		this.m=3;
    		this.size=9;
    	}
    // ���� 2: ������
    else
    	{
    		this.n=2;
    		this.m=3;
    		this.size=6;
    	}
    
    
    
    this.realMap = TwoDArray(this.size, this.size);
    this.mask = TwoDArray(this.size, this.size);
    for(var i=0;i<this.size;i++){
    for(var j=0;j<this.size;j++){
        this.realMap[i][j] = 0;
        this.mask[i][j]=0;
    }
    }
 
 
}
 

//��������
Shudu.prototype.insert = function(num, pos){
    this.realMap[pos[0]][pos[1]] = num;
    
}

//ɾ��
Shudu.prototype.delete = function(pos){
    this.realMap[pos[0]][pos[1]] = 0;
   
}
 
Shudu.prototype.visible = function(x, y){
    return this.mask[x][y];
}
 
 
//���ɶ�ά����
function TwoDArray(width, height){
    array = new Array();
    for(var i=0;i<width;i++){
    var col = new Array();
    for(var j=0;j<height;j++){
        col.push(0);
    }
    array.push(col);
    }
     
    return array;
}
 
