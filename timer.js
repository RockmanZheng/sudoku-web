// ��������ʱ�����뵽 time Ԫ����
// �Ա��ϴ������ݿ�
var tt=document.getElementById("time");
function GetSevertime()
{
      var xmlHttp;
     xmlHttp = false;  
     try {  
       xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  
     } catch (e) {  
       try {  
          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
       } catch (e2) {  
          xmlHttp = false;  
       }  
     }  
      
     if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {  
       xmlHttp = new XMLHttpRequest();  
     }  
      
    xmlHttp.open("GET", "nul.txt", false);
    xmlHttp.setRequestHeader("Range", "bytes=-1");
    xmlHttp.send(null);
    var severtime=new Date(xmlHttp.getResponseHeader("Date"));  
    return severtime;
} 

function showtime(){
     tt=document.getElementById("time");
     var vv=GetSevertime();
     tt.value=vv;
 }
