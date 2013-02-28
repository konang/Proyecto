<?php
//Send some headers to keep the user's browser from caching the response.
//header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" );
//header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" );
//header("Cache-Control: no-cache, must-revalidate" );
//header("Pragma: no-cache" );
//header("Content-Type: text/xml; charset=utf-8");

require('database.php');
    
    if(isset($_GET['id'])){
        $sql = "UPDATE registrados SET ".$_GET['att']."=\"".$_GET['valor']."\"  WHERE id = ".$_GET['id'];
        //echo $sql;
        $message_query = db_query($sql);
    }
    
    if(isset($_GET['borrarId'])){
        $sql = "DELETE FROM participante WHERE idPart = ".$_GET['borrarId'];
        //echo $sql;
        $message_query = db_query($sql);
    }
    
    if(isset($_GET['agregar'])){
        $id = 0;
        do{
            $id = $id +1;
            $sql = "SELECT * FROM participante WHERE idPart=$id";
            //echo $id;
            $message_query = db_query($sql);
            $message_array = db_fetch_array($message_query);
            /*if($message_array!=""){
                echo $message_array;
            }*/
        }while($message_array!="");
        $sql = "INSERT INTO participante VALUES ($id, \"nombre\", 0)";
        echo $id;
        $message_query = db_query($sql);
    }


//Check to ensure the user is in a chat room.
if(isset($_GET['hola'])) {
    header("Content-Type: text/xml; charset=utf-8");
    //Create the XML response.
    $xml = '<?xml version="1.0" ?><root>';
	//$last = (isset($_GET['last']) && $_GET['last'] != '') ? $_GET['last'] : 0;
	$sql = "SELECT * FROM participante";
	$message_query = db_query($sql);
	//Loop through each message and create an XML message node for each.
	while($message_array = db_fetch_array($message_query)) {
		$xml .= '<message id="' . $message_array['idPart'] . '">';
		$xml .= '<nombre>' . htmlspecialchars($message_array['nom']) . '</nombre>';
		$xml .= '<matricula>' . htmlspecialchars($message_array['mat']) . '</matricula>';
		$xml .= '<idParticipante>' . $message_array['idPart'] . '</idParticipante>';
		$xml .= '</message>';
	}
    $xml .= '</root>';
    echo $xml;
}
?>