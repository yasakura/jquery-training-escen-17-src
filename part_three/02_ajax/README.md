# Ajax

Dans le dossier où sont les sources, vous avez un fichier nommé *data.json*. Ce sont les informations à afficher dans la page web.

## Récupérez les données.

Comme dans [cet exercice](https://yasakura.github.io/jquery-training-escen-17-slides/part_two.html#/39), récupérez les données présentent dans le fichier *data.json*.

Une fois celles-ci récupérées, vous allez devoir construire, pour chaque élément, une structure HTML, la remplir avec les données récupérées et injecter le tout dans la page.

La structure est la suivante :
```
var card = `
    <div class="col s4">
      <div class="card" data-destination="${ }" data-price="${ }" data-id="${ Date.now() }" data-url-image="${ }">
        <div class="card-image">
          <img src="${ }">
        </div>
        <div class="card-content">
          <p class="card-title grey-text text-darken-4">${ } <span class="right price">${ }</span></p>
          <p class="center-align mt-1">
            <a class="waves-effect waves-light btn blue lighten-2" data-reservation><i class="material-icons left">airplanemode_active</i>RÉSERVER</a>
          </p>
        </div>
      </div>
    </div>
`;
```

Vous devez mettre entre chaque `${ }` les bonnes données.

Il faut injecter les *cards* ainsi créées dans la div ayant la classe `.card-wrapper`.

## Conversion des nombres en montant en euros

Pour convertir les chiffres au format monétaire (exemple : 1099 en 1 099 €), utilisez la fonction suivante :
```
// Convertion des chiffres au format monétaire EUR.
function convertFormat(num) {
  return new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(num);
}
```
