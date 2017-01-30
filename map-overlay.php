<?php
$data_file = "data/event-data-beta.json";
$stylesheet = "css/rm-map-mm.css";
$gmap_styles = "data/gmap-styles.js";

if($_GET['t']=='pa'){
	$data_file = "data/education-programs-pa-2017.json";
	$stylesheet = "css/rm-map-pa.css";
	$gmap_styles = "data/gmap-styles-pa.js";
	require_once('rm-program-finder.php');
	
}else if($_GET['t']=='pad'){
	$data_file = "data/education-programs-pad-2017.json";
	$stylesheet = "css/rm-map-pa.css";
	$gmap_styles = "data/gmap-styles-pad.js";
	require_once('rm-program-finder.php');
	
}else{
	$data_file = "data/education-programs-mm-2017.json";
	require_once('rm-program-finder.php');
}

?>