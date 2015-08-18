<!DOCTYPE html>
<html>

<head>
	<title>9000 Watts</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="styles.css">
	<script src="script.js"></script>
</head>

<body>

<div id="page">
<div id="Content">
	<div class="CategoriesBlocks" id="DatoriBlock"><br><a class="CategoriesBlocksHref" href="../PersonalieDatori/personalie_datori.php">Personālie datori</a><br><br><a class="CategoriesBlocksHref" href="../PortativieDatori/portativie_datori.php">Portatīvie datori</a><br><br><a class="CategoriesBlocksHref" href="../Plansetdatori/plansetdatori.php">Planšetdatori</a></div>
	<div class="CategoriesBlocks" id="MobilieTelefoniBlock"><br><a class="CategoriesBlocksHref" href="../StacionarieTelefoni/stacionarie_telefoni.php">Stacionārie telefoni</a><br><br><a class="CategoriesBlocksHref" href="../BezvaduTelefoni/bezvadu_telefoni.php">Bezvadu telefoni</a><br><br><a class="CategoriesBlocksHref" href="../MobilieTelefoni/mobilie_telefoni.php">Mobīlie telefoni</a></div>
	<div class="CategoriesBlocks" id="TelevizoriBlock"><br><a class="CategoriesBlocksHref" href="../LedTelevizori/led_televizori.php">LED Televīzori</a><br><br><a class="CategoriesBlocksHref" href="../LcdTelevizori/lcd_televizori.php">LCD Televīzori</a></div>
	<div class="CategoriesBlocks" id="FotoVideoBlock"><br><a class="CategoriesBlocksHref" href="../DigitalasKameras/digitalas_kameras.php">Digitālās kameras</a><br><br><a class="CategoriesBlocksHref" href="../Videokameras/videokameras.php">Videokameras</a><br><br><a class="CategoriesBlocksHref" href="../Binokli/binokli.php">Binokļi</a></div>
	<div class="CategoriesBlocks" id="ProgrammaturaBlock"><br><a class="CategoriesBlocksHref" href="../OfisaProgrammatura/ofisa_programmatura.php">Ofisa programmatūra</a><br><br><a class="CategoriesBlocksHref" href="../Operetajsistemas/operetajsistemas.php">Operētājsistēmas</a><br><br><a class="CategoriesBlocksHref" href="antivirusi.php">Antivīrusi</a></div>
	<div class="CategoriesBlocks" id="VideospelesBlock"><br><a class="CategoriesBlocksHref" href="../SpeluKonsoles/spelu_konsoles.php">Spēļu konsoles</a><br><br><a class="CategoriesBlocksHref" href="../Videospeles/videospeles.php">Videospēles</a></div>
	<div class="CategoriesBlocks" id="SadzivesTehnikaBlock"><br><a class="CategoriesBlocksHref" href="../VelasMasinas/velas_masinas.php">Veļas mašīnas</a><br><br><a class="CategoriesBlocksHref" href="../Ledusskapji/ledusskapji.php">Ledusskapji</a><br><br><a class="CategoriesBlocksHref" href="../Tejkannas/tejkannas.php">Tejkannas</a></div>
	<div class="CategoriesBlocks" id="BirojaTehnikaBlock"><br><a class="CategoriesBlocksHref" href="../PapiraSmalcinataji/papira_smalcinataji.php">Papīra smalcinātāji</a><br><br><a class="CategoriesBlocksHref" href="../Projektori/projektori.php">Projektori</a><br><br><a class="CategoriesBlocksHref" href="../Printeri/printeri.php">Printeri</a></div>
	<div class="CategoriesBlocks" id="ApgaismojumsBlock"><br><a class="CategoriesBlocksHref" href="../EnergoekonomiskasSpuldzes/energoekonomiskas_spuldzes.php">Energoekonomiskās spuldzes</a><br><br><a class="CategoriesBlocksHref" href="../LedSpuldzes/led_spuldzes.php">LED Spuldzes</a><br><br><a class="CategoriesBlocksHref" href="../Lukturi/lukturi.php">Lukturi</a></div>
	<div class="CategoriesBlocks" id="EnergijasAvotiBlock"><br><a class="CategoriesBlocksHref" href="../LadesanasIerices/ladesanas_ierices.php">Lādēšanas ierīces</a><br><br><a class="CategoriesBlocksHref" href="../Pagarinataji/pagarinataji.php">Pagarinātāji</a><br><br><a class="CategoriesBlocksHref" href="../Baterijas/baterijas.php">Baterijas</a></div>
	<div class="CategoriesBlocks" id="AutomasinasPiederumiBlock"><br><a class="CategoriesBlocksHref" href="../Automagnetolas/automagnetolas.php">Automagnetolas</a><br><br><a class="CategoriesBlocksHref" href="../Videoregistratori/videoregistratori.php">Videoreģistrātori</a><br><br><a class="CategoriesBlocksHref" href="../GpsNavigatori/gps_navigatori.php">GPS Navigātori</a></div>
	<div id="ContentLeft">
		<div id="kategorijas">Kategorijas</div><hr>
		<div class="categories" id="Datori">Dātori</div>
		<div class="categories" id="MobilieTelefoni">Telefoni</div>
		<div class="categories" id="Televizori">Televīzori</div>
		<div class="categories" id="FotoVideo">Foto & Video</div>
		<div class="categories" id="Programmatura">Programmatūra</div>
		<div class="categories" id="Videospeles">Videospēles</div>
		<div class="categories" id="SadzivesTehnika">Sadzīves tehnika</div>
		<div class="categories" id="BirojaTehnika">Biroja tehnika</div>
		<div class="categories" id="Apgaismojums">Apgaismojums</div>
		<div class="categories" id="EnergijasAvoti">Enerģijas avoti</div>
		<div class="categories" id="AutomasinasPiederumi">Automašinas piederumi</div>
	</div>
	<div id="ContentRight">
		<div id="ContentRightHeader">
			<div id="ContentRightHeaderLogo"><img id="ImgContentRightHeaderLogo" src="../../Images/Antivirusi/antivirusi.png"></div>
		</div>
			<div id="ContentRightFooter">
				<div id="InputForms">
					<form method="post">
					<div class="InputBlock">Preces nosaukums:&nbsp;<input type="text" name="PrecesNosaukums" class="InputText" placeholder="Preces nosaukums"></div><br>
					<div class="InputBlock">Preces foto:&nbsp;<input type="file" name="PrecesFoto" class="InputText" placeholder="Preces foto"></div><br>
					<div class="InputBlock">Preces regulārā cena:&nbsp;<input type="text" name="PrecesRegularaCena" class="InputText" placeholder="Preces regulārā cena"></div><br>
					<div class="InputBlock">Preces akcijas cena:&nbsp;<input type="text" name="PrecesAkcijasCena" class="InputText" placeholder="Preces akcijas cena"></div><br>
					<div class="InputBlock" id="InputBlockButtons"><button class="InputButtons" id="ButtonSubmit" type="submit">SŪTĪT</button>&nbsp;&nbsp;<button class="InputButtons" id="ButtonReset" type="reset">DZĒST</button></div>
					</form>
				</div>
			</div>
	</div>
</div>
<div id="Footer">
	<div id="FooterContent"><?php include "../../Php/date.php";?> © 9000 Watts</div>
</div>
</div>

</body>
</html>