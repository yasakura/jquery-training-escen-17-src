# Nombre d'éléments dans le panier

Pour connaître le nombre d'éléments dans le panier, nous allons compter les éléments sélectionnés, ensuite on affichera ce nombre sur le panier.

## Le nombre d'éléments sélectionné

À l'étape précédente, nous avons ajouté la classe `.in-basket` quand un voyage a été sélectionné.

Créez une fonction `refrechBadgeBasket()`. Dans cette fonction :

1. Créez une variable `count` que vous mettez à 0
2. Comptez le nombre d'éléments ayant la classe `.in-basket`.
3. Mettez à jour le chiffre dans la variable `count`

## Le badge

Le badge doit avoir la structure suivante :
```
<span class="nb-items"></span>
```
Vous devez l'insérer après la dropdown `#dropdown1`

__Attention__ : vous devez créer le badge que s’il n'existe pas encore.

Remplissez le badge ainsi créé avec la valeur de la variable `count`.

