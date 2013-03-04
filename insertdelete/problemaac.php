<?php


$conexion = mysql_connect("localhost", "root", "");
    mysql_select_db("cojacm");
	
    $qwe = "INSERT INTO `cojacm`.`problema` (`idProb`, `desc`, `tip`, `nom`, `valor`) VALUES  ('".$_GET['idProblema']."', '".$_GET['desc']."', '". $_GET['tip']."', '".$_GET['nombre']."', '".$_GET['valor']."' )";
    $result = mysql_query($qwe, $conexion);

	

?>