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