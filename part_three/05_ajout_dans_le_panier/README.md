# Ajout d'un voyage dans le panier

Créez une fonction `addItemInBasket()`.

Dans cette fonction, écrivez les instructions pour :

1. Supprimer le message indiquant que le panier est vide
2. Récupérer la destination, le prix, l'id et l'url de l'image du voyage
3. Créer le produit dans le panier, il devra avoir la structure suivante :
```
  <div class="product" data-price="${ }" data-id="${ }">
    <div class="img-dropdown">
      <img src="${ }">
    </div>
    <div class="txt-dropdown">
      <p>${ }</p>
      <p class="h5-like price">${ }</p>
    </div>
    <div class="delete-product">
      <a class="grey-text text-lighten-1 waves-effect waves-blue" data-delete href="#">
        <i class="material-icons left">delete_forever</i>
        Supprimer
      </a>
    </div>
  </div>
```


