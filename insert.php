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
    $mysql_server_name='localhost';
    $mysql_username='mcdoingc_Bob';
    $mysql_password='371511983';
    $mysql_database='mcdoingc_sodu';

    $conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password);
    mysql_query("set names gbk");
    mysql_select_db($mysql_database,$conn);
    $id=$_POST['Id'];
    $name=$_POST['Name'];
    $tel=$_POST['Tel'];
    $sodu1=$_POST['sodu1'];
    $sodu2=$_POST['sodu2'];
    $sodu3=$_POST['sodu3'];
    $sodu4=$_POST['sodu4'];
    $sodu5=$_POST['sodu5'];
    $time=$_POST['Time'];
    
    echo "<font size=\"100\">";
    echo $name;
    echo "于";
    echo $time;
    echo "提交成功！";
    echo "</font>";
    $sql="insert into `user` (`id`,`name`,`tel`,`sodu1`,`sodu2`,`sodu3`,`sodu4`,`sodu5`,`time`) values ('$id','$name','$tel','$sodu1','$sodu2','$sodu3','$sodu4','$sodu5','$time')";
    
    
    $result=mysql_query($sql);
    
    mysql_close();
?>
</body>
</html>