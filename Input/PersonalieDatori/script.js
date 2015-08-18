window.onload = start;

	function start() {
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
		
		//
		
		document.getElementById("ButtonSubmit").onmousemove = ButtonSubmit1;
		document.getElementById("ButtonSubmit").onmouseout = ButtonSubmit2;
		document.getElementById("ButtonReset").onmousemove = ButtonReset1;
		document.getElementById("ButtonReset").onmouseout = ButtonReset2;
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
	
	function ButtonSubmit1() {
		document.getElementById("ButtonSubmit").style.background = "#FFD6EB";
	}
	
	function ButtonSubmit2() {
		document.getElementById("ButtonSubmit").style.background = "#E6E6E6";
	}
	
	function ButtonReset1() {
		document.getElementById("ButtonReset").style.background = "#B2E6FF";
	}
	
	function ButtonReset2() {
		document.getElementById("ButtonReset").style.background = "#E6E6E6";
	}