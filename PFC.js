// PFC Utilisateur vs Ordi

var choixUtilisateur = prompt("Pierre, feuille, ou ciseaux ?");

var choixOrdi = Math.random();
if (choixOrdi < 0.34) {
	choixOrdi = "pierre";
} 

else if(choixOrdi <= 0.67) {
	choixOrdi = "feuille";
} 

else {
	choixOrdi = "ciseaux";
} 

console.log("Ordinateur : " + choixOrdi);

function play(a, b) {
  a = choixUtilisateur;
  b = choixOrdi;
  if (a === b) {
    return "égaliter"; } 
  
  else if (a == "papier" && b == "pierre" || a == "ciseaux" && b == "papier" || a == "pierre" && b == "ciseaux" ) {
    return "Joueur gagne avec " + a ; } 
    else {
    return "Ordinateur gagne avec " + b ;
  }
}

play(choixUtilisateur, choixOrdi);
