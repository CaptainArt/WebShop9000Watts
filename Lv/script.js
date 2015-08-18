window.onload = start;

	function start() {
		document.getElementById("autorizacija").onmousemove = autorizacija1;
		document.getElementById("autorizacija").onmouseout = autorizacija2;

		document.getElementById("registracija").onmousemove = registracija1;
		document.getElementById("registracija").onmouseout = registracija2;
		
		document.getElementById("Galvena").onmousemove = Galvena1;
		document.getElementById("Galvena").onmouseout = Galvena2;
		
		document.getElementById("Akcijas").onmousemove = Akcijas1;
		document.getElementById("Akcijas").onmouseout = Akcijas2;
		
		document.getElementById("Norekini").onmousemove = Norekini1;
		document.getElementById("Norekini").onmouseout = Norekini2;
		
		document.getElementById("PrecuSanemsana").onmousemove = PrecuSanemsana1;
		document.getElementById("PrecuSanemsana").onmouseout = PrecuSanemsana2;
		
		document.getElementById("Garantija").onmousemove = Garantija1;
		document.getElementById("Garantija").onmouseout = Garantija2;
		
		document.getElementById("Pasutit").onmousemove = Pasutit1;
		document.getElementById("Pasutit").onmouseout = Pasutit2;
		
		document.getElementById("Kontakti").onmousemove = Kontakti1;
		document.getElementById("Kontakti").onmouseout = Kontakti2;
		
		//
		
		document.getElementById("Datori").onmousemove = Datori1;
		document.getElementById("Datori").onmouseout = Datori2;
		
		document.getElementById("MobilieTelefoni").onmousemove = MobilieTelefoni1;
		document.getElementById("MobilieTelefoni").onmouseout = MobilieTelefoni2;
		
		document.getElementById("Televizori").onmousemove = Televizori1;
		document.getElementById("Televizori").onmouseout = Televizori2;
		
		document.getElementById("FotoVideo").onmousemove = FotoVideo1;
		document.getElementById("FotoVideo").onmouseout = FotoVideo2;
		
		document.getElementById("Programmatura").onmousemove = Programmatura1;
		document.getElementById("Programmatura").onmouseout = Programmatura2;
		
		document.getElementById("Videospeles").onmousemove = Videospeles1;
		document.getElementById("Videospeles").onmouseout = Videospeles2;
		
		document.getElementById("SadzivesTehnika").onmousemove = SadzivesTehnika1;
		document.getElementById("SadzivesTehnika").onmouseout = SadzivesTehnika2;
		
		document.getElementById("BirojaTehnika").onmousemove = BirojaTehnika1;
		document.getElementById("BirojaTehnika").onmouseout = BirojaTehnika2;
		
		document.getElementById("Apgaismojums").onmousemove = Apgaismojums1;
		document.getElementById("Apgaismojums").onmouseout = Apgaismojums2;
		
		document.getElementById("EnergijasAvoti").onmousemove = EnergijasAvoti1;
		document.getElementById("EnergijasAvoti").onmouseout = EnergijasAvoti2;
		
		document.getElementById("AutomasinasPiederumi").onmousemove = AutomasinasPiederumi1;
		document.getElementById("AutomasinasPiederumi").onmouseout = AutomasinasPiederumi2;
		
		//
		
		document.getElementById("DatoriBlock").onmousemove = Datori1;
		document.getElementById("DatoriBlock").onmouseout = Datori2;
		
		document.getElementById("MobilieTelefoniBlock").onmousemove = MobilieTelefoni1;
		document.getElementById("MobilieTelefoniBlock").onmouseout = MobilieTelefoni2;
		
		document.getElementById("TelevizoriBlock").onmousemove = Televizori1;
		document.getElementById("TelevizoriBlock").onmouseout = Televizori2;
		
		document.getElementById("FotoVideoBlock").onmousemove = FotoVideo1;
		document.getElementById("FotoVideoBlock").onmouseout = FotoVideo2;
		
		document.getElementById("ProgrammaturaBlock").onmousemove = Programmatura1;
		document.getElementById("ProgrammaturaBlock").onmouseout = Programmatura2;
		
		document.getElementById("VideospelesBlock").onmousemove = Videospeles1;
		document.getElementById("VideospelesBlock").onmouseout = Videospeles2;
		
		document.getElementById("SadzivesTehnikaBlock").onmousemove = SadzivesTehnika1;
		document.getElementById("SadzivesTehnikaBlock").onmouseout = SadzivesTehnika2;
		
		document.getElementById("BirojaTehnikaBlock").onmousemove = BirojaTehnika1;
		document.getElementById("BirojaTehnikaBlock").onmouseout = BirojaTehnika2;
		
		document.getElementById("ApgaismojumsBlock").onmousemove = Apgaismojums1;
		document.getElementById("ApgaismojumsBlock").onmouseout = Apgaismojums2;
		
		document.getElementById("EnergijasAvotiBlock").onmousemove = EnergijasAvoti1;
		document.getElementById("EnergijasAvotiBlock").onmouseout = EnergijasAvoti2;
		
		document.getElementById("AutomasinasPiederumiBlock").onmousemove = AutomasinasPiederumi1;
		document.getElementById("AutomasinasPiederumiBlock").onmouseout = AutomasinasPiederumi2;
	}
	
	function autorizacija1() {
		document.getElementById("autorizacija").style.color = "#FF3300";
		document.getElementById("autorizacija").style.textDecoration = "underline";
		document.getElementById("autorizacija").style.fontSize = "110%";
	}
	
	function autorizacija2() {
		document.getElementById("autorizacija").style.color = "black";
		document.getElementById("autorizacija").style.textDecoration = "none";
		document.getElementById("autorizacija").style.fontSize = "100%";
	}
	
	function registracija1() {
		document.getElementById("registracija").style.color = "#FF3300";
		document.getElementById("registracija").style.textDecoration = "underline";
		document.getElementById("registracija").style.fontSize = "110%";
	}
	
	function registracija2() {
		document.getElementById("registracija").style.color = "black";
		document.getElementById("registracija").style.textDecoration = "none";
		document.getElementById("registracija").style.fontSize = "100%";
	}
	
	
	function Galvena1() {
		document.getElementById("Galvena").style.color = "blue";
	}
	
	function Galvena2() {
		document.getElementById("Galvena").style.color = "black";
	}
	
	function Akcijas1() {
		document.getElementById("Akcijas").style.color = "blue";
	}
	
	function Akcijas2() {
		document.getElementById("Akcijas").style.color = "black";
	}
	
	function Norekini1() {
		document.getElementById("Norekini").style.color = "blue";
	}
	
	function Norekini2() {
		document.getElementById("Norekini").style.color = "black";
	}
	
	function PrecuSanemsana1() {
		document.getElementById("PrecuSanemsana").style.color = "blue";
	}
	
	function PrecuSanemsana2() {
		document.getElementById("PrecuSanemsana").style.color = "black";
	}
	
	function Garantija1() {
		document.getElementById("Garantija").style.color = "blue";
	}
	
	function Garantija2() {
		document.getElementById("Garantija").style.color = "black";
	}
	
	function Pasutit1() {
		document.getElementById("Pasutit").style.color = "blue";
	}
	
	function Pasutit2() {
		document.getElementById("Pasutit").style.color = "black";
	}
	
	function Kontakti1() {
		document.getElementById("Kontakti").style.color = "blue";
	}
	
	function Kontakti2() {
		document.getElementById("Kontakti").style.color = "black";
	}
	
	
	function Datori1() {
		document.getElementById("Datori").style.backgroundColor = "#66CCFF";
		document.getElementById("DatoriBlock").style.display = "block";
	}
	
	function Datori2() {
		document.getElementById("Datori").style.backgroundColor = "#FFCCE0";
		document.getElementById("DatoriBlock").style.display = "none";
	}
	
	function MobilieTelefoni1() {
		document.getElementById("MobilieTelefoni").style.backgroundColor = "#66CCFF";
		document.getElementById("MobilieTelefoniBlock").style.display = "block";
	}
	
	function MobilieTelefoni2() {
		document.getElementById("MobilieTelefoni").style.backgroundColor = "#FFCCE0";
		document.getElementById("MobilieTelefoniBlock").style.display = "none";
	}
	
	function Televizori1() {
		document.getElementById("Televizori").style.backgroundColor = "#66CCFF";
		document.getElementById("TelevizoriBlock").style.display = "block";
	}
	
	function Televizori2() {
		document.getElementById("Televizori").style.backgroundColor = "#FFCCE0";
		document.getElementById("TelevizoriBlock").style.display = "none";
	}
	
	function FotoVideo1() {
		document.getElementById("FotoVideo").style.backgroundColor = "#66CCFF";
		document.getElementById("FotoVideoBlock").style.display = "block";
	}
	
	function FotoVideo2() {
		document.getElementById("FotoVideo").style.backgroundColor = "#FFCCE0";
		document.getElementById("FotoVideoBlock").style.display = "none";
	}
	
	function Programmatura1() {
		document.getElementById("Programmatura").style.backgroundColor = "#66CCFF";
		document.getElementById("ProgrammaturaBlock").style.display = "block";
	}
	
	function Programmatura2() {
		document.getElementById("Programmatura").style.backgroundColor = "#FFCCE0";
		document.getElementById("ProgrammaturaBlock").style.display = "none";
	}
	
	function Videospeles1() {
		document.getElementById("Videospeles").style.backgroundColor = "#66CCFF";
		document.getElementById("VideospelesBlock").style.display = "block";
	}
	
	function Videospeles2() {
		document.getElementById("Videospeles").style.backgroundColor = "#FFCCE0";
		document.getElementById("VideospelesBlock").style.display = "none";
	}
	
	function SadzivesTehnika1() {
		document.getElementById("SadzivesTehnika").style.backgroundColor = "#66CCFF";
		document.getElementById("SadzivesTehnikaBlock").style.display = "block";
	}
	
	function SadzivesTehnika2() {
		document.getElementById("SadzivesTehnika").style.backgroundColor = "#FFCCE0";
		document.getElementById("SadzivesTehnikaBlock").style.display = "none";
	}
	
	function BirojaTehnika1() {
		document.getElementById("BirojaTehnika").style.backgroundColor = "#66CCFF";
		document.getElementById("BirojaTehnikaBlock").style.display = "block";
	}
	
	function BirojaTehnika2() {
		document.getElementById("BirojaTehnika").style.backgroundColor = "#FFCCE0";
		document.getElementById("BirojaTehnikaBlock").style.display = "none";
	}
	
	function Apgaismojums1() {
		document.getElementById("Apgaismojums").style.backgroundColor = "#66CCFF";
		document.getElementById("ApgaismojumsBlock").style.display = "block";
	}
	
	function Apgaismojums2() {
		document.getElementById("Apgaismojums").style.backgroundColor = "#FFCCE0";
		document.getElementById("ApgaismojumsBlock").style.display = "none";
	}
	
	function EnergijasAvoti1() {
		document.getElementById("EnergijasAvoti").style.backgroundColor = "#66CCFF";
		document.getElementById("EnergijasAvotiBlock").style.display = "block";
	}
	
	function EnergijasAvoti2() {
		document.getElementById("EnergijasAvoti").style.backgroundColor = "#FFCCE0";
		document.getElementById("EnergijasAvotiBlock").style.display = "none";
	}
	
	function AutomasinasPiederumi1() {
		document.getElementById("AutomasinasPiederumi").style.backgroundColor = "#66CCFF";
		document.getElementById("AutomasinasPiederumiBlock").style.display = "block";
	}
	
	function AutomasinasPiederumi2() {
		document.getElementById("AutomasinasPiederumi").style.backgroundColor = "#FFCCE0";
		document.getElementById("AutomasinasPiederumiBlock").style.display = "none";
	}