// 加载 XML 的脚本
// By:		Rockman
// Date:	2016-11-23

// 加载 XML 文档
function LoadXMLDoc(xmlfile)
{
	// 创建 XMLHTTP 对象
	if (window.XMLHttpRequest)
	{// for IE7+, Firefox, Chrome, Opera, Safari
		xhttp=new XMLHttpRequest();
	}
	else // for IE 5/6
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 打开此 XMLHTTP 对象
	xhttp.open("GET",xmlfile,false);
	// 发送一个 XML HTTP 请求到服务器
	xhttp.send();
	// 设置响应为 XML DOM 对象并返回
	return xhttp.responseXML;
}
// 加载 XML 字符串
function LoadXMLString(text)
{
 	if (window.DOMParser)
	{
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(text,"text/xml");
	}
	else // Internet Explorer
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(text);
	} 
	return xmlDoc;
}


