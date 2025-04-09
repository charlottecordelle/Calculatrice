const affichage = document.querySelector('.affichage');
const boutons = document.querySelectorAll('button');

let expression = '';

boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeur = bouton.textContent;

    if (valeur === 'C') {
      expression = '';
      affichage.value = '';
    } else if (valeur === '=') {
      try {
        expression = eval(expression);
        affichage.value = expression;
      } catch (e) {
        affichage.value = 'Erreur';
        expression = '';
      }
    } else {
      expression += valeur;
      affichage.value = expression;
    }
  });
});