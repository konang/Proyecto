<?php
echo "<html>
		<head>
		</head>
		<body>
			<form name='input' action='problemaac.php' method='get'>
				IDProblema:<input type='text' name='idProblema'><br>
				Nombre<input type='text' name='nombre'><br>
				Descripcion:<textarea rows='4' cols='50' name='desc'></textarea><br>
				Tip:<textarea rows='4' cols='50' name='tip'></textarea><br>
				Valor<input type='text' name='valor'><br>
				<input type='submit' value='Agregar Problema'>
			</form>
		</body>
	</html>"
?>