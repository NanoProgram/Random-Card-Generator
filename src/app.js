/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function numAleatorio() {
  let aleatorioNum = Math.floor(Math.random() * 12);
  return aleatorioNum;
}

function simAleatorio() {
  let aleatorioSim = Math.floor(Math.random() * 4);
  /*if (aleatorioSim === 3 || aleatorioSim === 2) {
    document.getElementById("up").style.color = "#CC0000";
    document.getElementById("down").style.color = "#CC0000";
  }*/
  return aleatorioSim;
}

setInterval(function() {
  console.log("Hola");
}, 1000);

/*window.onload = function change() {
  let sim = simAleatorio();
  document.getElementById("up").innerHTML = simbolos[sim];
  document.getElementById("down").innerHTML = simbolos[sim];
  let num = numAleatorio();
  document.getElementById("center").innerHTML = numeros[num];
  if (sim === 2 || sim === 3) {
    document.getElementById("center").style.color = "#CC0000";
  }
};*/

window.onload = function change() {
  let sim = simAleatorio();
  document.getElementById("up").innerHTML = simbolos[sim];
  document.getElementById("down").innerHTML = simbolos[sim];
  let num = numAleatorio();
  document.getElementById("center").innerHTML = numeros[num];
  if (sim === 2 || sim === 3) {
    document.getElementById("center").style.color = "#CC0000";
  }
  if (sim === 3 || sim === 2) {
    document.getElementById("up").style.color = "#CC0000";
    document.getElementById("down").style.color = "#CC0000";
  }
};
