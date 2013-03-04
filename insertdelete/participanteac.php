<?php


$conexion = mysql_connect("localhost", "root", "");
    mysql_select_db("cojacm");
	
    $qwe = "INSERT INTO participante (`idPart`, `mat`, `nom`) VALUES  ('".$_GET['idPart']."', ".$_GET['mat'].", '". $_GET['nombre']."' )";
    $result = mysql_query($qwe, $conexion);

	

?>