<?php
$PrecesNosaukums = $_POST['PrecesNosaukums'];
$PrecesFoto = $_FILES['PrecesFoto']['name'];
$PrecesRegularaCena = $_POST['PrecesRegularaCena'];
$PrecesAkcijasCena = $_POST['PrecesAkcijasCena'];
$Klase = $_POST['Klase'];
$Tilpums = $_POST['Tilpums'];
$SaldetavasTilpums = $_POST['SaldetavasTilpums'];
$Augstums = $_POST['Augstums'];

$host = 'localhost';
$login = 'root';
$dbname = '9000watts';

$insert1 = "INSERT INTO preces (prece,foto,regulara_cena,akcijas_cena) VALUES ('$PrecesNosaukums','$PrecesFoto','$PrecesRegularaCena','$PrecesAkcijasCena')";

$connect = mysql_connect($host,$login) or die('Could not connect database: ' . mysql_error());

mysql_select_db($dbname,$connect) or die('Could not find database' . mysql_error());

$result = mysql_query($insert1) or die('Insert into database was not correct: ' . mysql_error());

$id = mysql_insert_id();

$insert2 = "INSERT INTO ledusskapji (id_prece,klase,tilpums,saldetavas_tilpums,augstums) VALUES ('$id','$Klase','$Tilpums','$SaldetavasTilpums','$Augstums')"; 

$result = mysql_query($insert2) or die('Insert into database was not correct: ' . mysql_error());


mysql_close($connect);
?>