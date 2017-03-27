# Montant total

## Création de la structure html

La fonction à appeler pour afficher dans le panier le montant total est la suivante :
```
// Création de la ligne affichant le montant total et le bouton d'achat.
function buildTotal() {
  var totalTemplate = `
    <div class="total">
      <p class="total-label center-align h5-like">Total</p>
      <p class="total-amount h4-like">0 €</p>
      <p class="buy"><a class="waves-effect waves-light btn blue lighten-2" href="#modal1">Payer</a></p>
    </div>
  `;

  $('#dropdown1').append(totalTemplate);
}
```

Dans la fonction `addItemInBasket()` créé au point précédent (*05_ajout_dans_le_panier*), invoquer la fonction `buildTotal()`.

## Calcul du montant total

Récupérez le montant de chaque produit présent dans le panier et insérez le montant au bon endroit.

## Bonus

Pour qu'une action se produise quand vous cliquez sur le bouton *payer*, inserer le code suivant dans votre fichier :
```
// Initialisation de la fonction modal du framework CSS (pour quand on clique sur le bouton payer).
$('.modal').modal();
```
