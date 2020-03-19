
alert("Bunogiorno, vi dirò ora quale delle due perosne è più vecchia, per cominciare a giocare premere ok");
var nome1;
var nome2;
var age1;
var age2;
nome1 = prompt ("Inserisci il nome del primo giocatore");
nome2 = prompt ("Inserisci il nome del secondo giocatore");
age1 = prompt("inserisci la prima età");
age2 = prompt("inserisci la seconda età");
 if (age1 > age2) {
   document.getElementById('age').innerHTML = nome1 +' è più vecchio di ' + nome2;
 }
 else if  (age1 < age2) {
   document.getElementById('age').innerHTML = nome2 +' è più vecchio di ' + nome1;
 }
 else {
    document.getElementById('age').innerHTML ='avete la stessa età';
 }
