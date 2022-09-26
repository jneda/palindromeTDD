function estPalindrome(chaine) {
  // on utilise une regexp pour convertir la chaine en array de caractères
  // alphanumériques
  const regex = /[a-z0-9]/gi;
  const cars = chaine.match(regex);

  // constantes utilitaires
  const original = cars.join("");
  const inverse = cars.reverse().join("");
  const sontIdentiques = original === inverse;

  // console.log(`${original} vs ${inverse} : ${sontIdentiques}`);

  // on teste si le mot inversé est bien le même
  return original === inverse;
}

module.exports = {
  estPalindrome
}