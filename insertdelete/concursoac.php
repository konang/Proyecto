<?php


	$conexion = mysql_connect("localhost", "root", "");
    mysql_select_db("cojacm");
	
	$date1=strtotime($_GET['fechai']);
	$date2=strtotime($_GET['fechaf']);
	echo $date1;
	echo $date2;
    $qwe = "INSERT INTO concurso (`idConcurso`, `fechaini`, `fechafin`) VALUES  (".$_GET['idConcurso'].", $date1, $date2)";
    $result = mysql_query($qwe, $conexion);
	

?>