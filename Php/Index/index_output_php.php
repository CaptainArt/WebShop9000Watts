<?php
$host = 'localhost';
$login = 'root';
$dbname = '9000watts';

$connect = mysql_connect($host,$login) or die('Could not connect database: ' . mysql_error());

mysql_select_db($dbname,$connect) or die('Could not find database' . mysql_error());

$select = "SELECT * FROM preces ORDER BY akcijas_cena";

$result = mysql_query($select) or die('Insert into database was not correct: ' . mysql_error());

$array = mysql_fetch_array($result);

While($array = mysql_fetch_array($result))
{
	if($array['akcijas_cena'] == 0)
	{
		continue;
	}
	echo "<div class=\"CheapProduct\">";
	echo "<img id=\"CheapProductFoto\" src=\"";
	echo "../PrecesFoto/PersonalieDatori/";
	echo $array['foto'];
	echo "\">";
	echo "<div class=\"CheapProductContent1\">Regulārā cena: ";
	echo $array['regulara_cena'];
	echo "</div>";
	echo "<div class=\"CheapProductContent2\">Akcijas cena: ";
	echo $array['akcijas_cena'];
	echo "</div>";
	echo "</div>";
}

mysql_close($connect);
?>