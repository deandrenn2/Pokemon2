//Crear el objeto pokemon
function pokemon(n,v,a,g){
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.grito = g;
	this.gritar = function () {
		alert(this.grito);
	}
	this.tipo = "tierra";
	this.imagen = "images/"
	};


function elegir(a,nombre,vida,ataque) {	// body...

	
	var pokeAleatorio = new pokemon(nombre,vida,ataque,a.alt);
	if (a.alt == "Pika! Pika!"){
	pokeAleatorio.tipo = "Tierra";
	};
	if (a.alt == "Chard!!"){
	pokeAleatorio.tipo = "Fuego";
	};
	if (a.alt == "Buld buld!"){
	pokeAleatorio.tipo = "Planta";
	};
	if (a.alt == "Squir...!"){
	pokeAleatorio.tipo = "Agua";
	};
	datos.innerHTML = " <h2>Mi pokemon es "+ pokeAleatorio.nombre + "</h2>"+ "<p>Datos:</p> <ul>"+ 
	"<li>Vida: " + pokeAleatorio.vida + "</li>"+
	"<li>Ataque: " + pokeAleatorio.ataque + "</li>"+
	"<li>Grito: " + a.alt + "</li>"+
	"<li>Tipo: " + pokeAleatorio.tipo + "</li>";

	document.body.style.backgroundImage = "url("+pokeAleatorio.imagen+pokeAleatorio.nombre+"Fondo.png)";
	//document.body.style.backgroundImage
	
}
