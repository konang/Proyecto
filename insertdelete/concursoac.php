<?php


$conexion = mysql_connect("localhost", "root", "");
    mysql_select_db("cojacm");
	
	$date1=strtotime($_GET['fechai']);
	$date2=strtotime($_GET['fechaf']);
	//$fec = date('Y-m-d', $date1);
	//$fec2 = date('Y-m-d', $date2);
    $qwe = "INSERT INTO concurso (`idConcurso`, `fechaini`, `fechafin`) VALUES  (".$_GET['idConcurso'].", FROM_UNIXTIME($date1), FROM_UNIXTIME($date2))";
    $result = mysql_query($qwe, $conexion);
	
	

?>