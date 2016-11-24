<!DOCTYPE html>  
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    <title>笃行数独</title>
    <style>
    .green{
    background: -webkit-linear-gradient(#91bd09, #578730);
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, .4);
    -webkit-border-radius: 10px;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
    font: bold 3em Arial, Helvetica, sans-serif;
    } 
    </style>
</head>
<body>
<?php

    header("content-type:application/msexcel");
    header("content-disposition:filename=提交信息.xls");
    $mysql_server_name='localhost';
    $mysql_username='mcdoingc_Bob';
    $mysql_password='371511983';
    $mysql_database='mcdoingc_sodu';

    $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
    mysql_query("set names gbk");
    mysql_select_db($mysql_database,$conn);
    
    $sodu1=$_POST['sodu1'];
    $sodu2=$_POST['sodu2'];
    $sodu3=$_POST['sodu3'];
    $sodu4=$_POST['sodu4'];
    $sodu5=$_POST['sodu5'];
    $sql="select * from user";  
    $result=mysql_query($sql);  
    if(!$result) die("数据查询失败");  
  
  
    echo "<table border=1><tr>";//表格  
    while ($field=mysql_fetch_field($result))  
    {  
        echo "<th>$field->name</th>";//$field的name属性..  
    }  
    
    echo "<th>是否全对</th>";//$field的name属性..  
    echo "</tr>";  
  
    while($res=mysql_fetch_row($result))  
    {  
        echo "<tr>";  
        $i=1;
        $correct=0;
        foreach($res as $val)  
        	{
        	        if($i==4&&$sodu1==$val) $correct++;
        	        if($i==5&&$sodu2==$val) $correct++;
        	        if($i==6&&$sodu3==$val) $correct++;
        	        if($i==7&&$sodu4==$val) $correct++;
        	        if($i==8&&$sodu5==$val) $correct++;
        	        
            		echo "<th>$val</th>"; 
            		$i++;
        	} 
        if($correct==5) echo "<th>是</th>";
        else echo "<th>$correct</th>";
        echo "</tr>";  
    }  
    echo "</table>";  
    mysql_close();
?>
</body>
</html>