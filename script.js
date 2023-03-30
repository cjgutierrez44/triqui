const c11 = document.getElementById("c11");
const c12 = document.getElementById("c12");
const c13 = document.getElementById("c13");
const c21 = document.getElementById("c21");
const c22 = document.getElementById("c22");
const c23 = document.getElementById("c23");
const c31 = document.getElementById("c31");
const c32 = document.getElementById("c32");
const c33 = document.getElementById("c33");


const btn_j1 = document.getElementById("btn-j1");
const btn_j2 = document.getElementById("btn-j2");


let juego = true;

let turno = 1;
let figura = "x";

let tablero = new Array(3);

tablero[0] = new Array(3);
tablero[1] = new Array(3);
tablero[2] = new Array(3);


tablero[0][0] = [c11, "."];
tablero[0][1] = [c12, "."];
tablero[0][2] = [c13, "."];


tablero[1][0] = [c21, "."];
tablero[1][1] = [c22, "."];
tablero[1][2] = [c23, "."];


tablero[2][0] = [c31, "."];
tablero[2][1] = [c32, "."];
tablero[2][2] = [c33, "."];


function jugada(i, j){
	if (juego) {
		if (turno == 1 ) {
			figura = "x";
			turno = 2;
			btn_j1.classList.remove("btn-outline-info");
			btn_j2.classList.add("btn-outline-info");
		}else{
			figura = "o";
			turno = 1;
			btn_j1.classList.add("btn-outline-info");
			btn_j2.classList.remove("btn-outline-info");
		}
		tablero[i][j][1] = figura;
		tablero[i][j][0].classList.add(figura);
		//revisar();
	}
	

}

function revisar() {
	if (tablero[0][0][1] == tablero[0][1][1] && tablero[0][0][1]  == tablero[0][2][1] && tablero[0][0][1] != ".") {
		juego = false;
		ganador = tablero[0][0][1];
	}
	if (tablero[1][0][1] == tablero[1][1][1] && tablero[1][0][1] == tablero[1][2][1] && tablero[1][0][1] != ".") {
		juego = false;
		ganador = tablero[1][0][1];
	}
	if (tablero[2][0][1] == tablero[2][1][1] && tablero[2][0][1] == tablero[2][2][1] && tablero[2][0][1] != ".") {
		juego = false;
		ganador = tablero[0][0][1];
	}
	if (tablero[0][0][1] == tablero[1][1][1] && tablero[0][0][1] == tablero[2][2][1] && tablero[0][0][1] != ".") {
		juego = false;
		ganador = tablero[0][0][1];
	}	
	if (tablero[0][2][1] == tablero[1][1][1] && tablero[0][2][1] == tablero[2][0][1] && tablero[0][2][1] != ".") {
		juego = false;
		ganador = tablero[0][2][1];
	}
	if (!juego){
		if (ganador == "x") {
			btn_j1.classList.add("btn-success");
			btn_j2.classList.add("btn-danger");
		}else{
			btn_j1.classList.add("btn-danger");
			btn_j2.classList.add("btn-success");
		}
	}else{
		btn_j1.classList.add("btn-warning");
		btn_j2.classList.add("btn-warning");
		juego = false;
	}	

}

c11.onclick = function(){
	jugada(0, 0);
}
c12.onclick = function(){
	jugada(0, 1);
}
c13.onclick = function(){
	jugada(0, 2);
}
c21.onclick = function(){
	jugada(1, 0);
}
c22.onclick = function(){
	jugada(1, 1);
}
c23.onclick = function(){
	jugada(1, 2);
}
c31.onclick = function(){
	jugada(2, 0);
}
c32.onclick = function(){
	jugada(2, 1);
}
c33.onclick = function(){
	jugada(2, 2);
}