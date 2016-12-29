<?php
header('Access-Control-Allow-Origin: *');

if(isset($_GET["r"])){
	// /(?<=\<div id\=\"content\"\>).*?(?=\<h2\>\<a name\=\"locations\")/is
	//echo preg_replace( "/\r|\n/", "", file_get_contents("http:".$_GET["r"]) );
	preg_match('/(?<=\<div id\=\"content\"\>).*?(?=\<h2\>\<a name\=\"locations\")/is', file_get_contents("http:".$_GET["r"]), $matches);
	//echo stream_get_contents(fopen("http:".$_GET["r"], "r"));
	echo $matches[0];
}else{
	include('map-overlay-uib-modal.html');
}

?>