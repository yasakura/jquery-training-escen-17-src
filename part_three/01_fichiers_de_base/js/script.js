/* global jQuery, Intl */
(function($) {

  // Récupération des données dans le fichier json en AJAX.
  $.ajax({
    url: '/data.json',
  }).done(function(data) {
    // Si la récupération est réussie, construction des 'card' représentant les voyages.
    buildCard(data);
  }).fail(function() {
    // Si la récupération échoue, affichage d'un message d'erreur dans la console du navigateur.
    console.log('Ajax error');
  });

  // Actions effectuée quand on clique sur le bouton réservation d'un voyage.
  $('.card-wrapper').on('click', '[data-reservation]', function() {
    var card = $(this).parents('.card');
    card.addClass('in-basket');
    refrechBadgeBasket();
    addItemInBasket(card);
    calculTotal();
  });

  // Action effectuées quand on clique sur le bouton suppression d'un produit du panier.
  $('.basket').on('click', '[data-delete]', function(event) {
    // Désactivation du lien.
    event.preventDefault();

    var product = $(this).parents('.product');

    // Suppression du produit.
    product.remove();

    // On rend la card dans la page à nouveau sélectionnable.
    $('.card[data-id="' + product.data('id') + '"]').removeClass('in-basket');

    // On rafraîchit le badge sur le panier et on calcul à nouveau le montant total du panier.
    refrechBadgeBasket();
    calculTotal();

    // Si il n'y a plus de produit dans le panier, affichage du message panier vide.
    if($('.basket .product').length === 0) {
      var textEmptyBasket = `
        <p class="h6-like grey-text text-lighten-1 center-align basket-empty">Le panier est vide.</p>
      `;

      // Suppression du bloc html du total et insertion du message dans le panier.
      $('.basket .total').remove();
      $('#dropdown1').append(textEmptyBasket);
    }
  });

  // Initialisation de la fonction modal du framework CSS (pour quand on clique sur le bouton payer).
  $('.modal').modal();

  // Création d'une 'card' représentant un produit
  function buildCard(data) {
    data.forEach(function(item) {
      var card = `
        <div class="col s4">
          <div class="card" data-destination="${ item.city }" data-price="${ item.price }" data-id="${ Date.now() }" data-url-image="${ item.url_image }">
            <div class="card-image">
              <img src="${ item.url_image }">
            </div>
            <div class="card-content">
              <p class="card-title grey-text text-darken-4">${ item.city } <span class="price right">${ convertFormat(item.price) }</span></p>
              <p class="center-align mt-1">
                <a class="waves-effect waves-light btn blue lighten-2" data-reservation><i class="material-icons left">airplanemode_active</i>RÉSERVER</a>
              </p>
            </div>
          </div>
        </div>
      `;

      // Insertion de la 'card' dans la page.
      $('.card-wrapper').append(card);
    });
  }

  // Affiche le nombre de produits dans le panier
  function refrechBadgeBasket() {
    var count = 0;
    var card = $('.card');

    // Parcours les éléments .card et si ils ont la classe .in-basket on ajoute +1 a la variable 'count'
    card.each(function() {
      if($(this).hasClass('in-basket')) count += 1;
    });

    // Si aucun élément n'a la classe .in-basket, on supprime le badge et on sort de la fonction refrechBadgeBasket
    if($('.card.in-basket').length === 0) {
      $('.basket .nb-items').remove();
      return;
    }

    // Si on ne trouve pas le badge indiquant le nombre d'item sur le panier, on le créé.
    if($('.basket .nb-items').length === 0) $('<span class="nb-items"></span>').insertAfter('#dropdown1');

    // Mise a jour du nombre dans le badge.
    $('.basket .nb-items').text(count);

  }

  // Création d'un produit dans le panier.
  function itemInBasket(destination, price, id, urlImage) {
    var product = `
      <div class="product" data-price="${ price }" data-id="${ id }">
        <div class="img-dropdown">
          <img src="${ urlImage }">
        </div>
        <div class="txt-dropdown">
          <p>${ destination }</p>
          <p class="h5-like price">${ convertFormat(price) }</p>
        </div>
        <div class="delete-product">
          <a class="grey-text text-lighten-1 waves-effect waves-blue" data-delete href="#">
            <i class="material-icons left">delete_forever</i>
            Supprimer
          </a>
        </div>
      </div>
    `;

    return product;
  }

  // Ajout d'un produit dans le panier.
  function addItemInBasket(item) {
    // Suppression du message panier vide.
    if($('.basket-empty')) $('.basket-empty').remove();

    // Affectation des données pour la création d'un produit.
    var destination = item.data('destination');
    var price = item.data('price');
    var id = item.data('id');
    var urlImage = item.data('url-image');

    // Affectation d'un nouveau produit à la variable product.
    var product = itemInBasket(destination, price, id, urlImage);

    // Si il n'y a pas la ligne .total dans le panier, on la créé.
    if($('.total').length === 0) buildTotal();

    // Insertion du produit créé.
    $(product).insertBefore('.basket .total');
  }

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

  // Convertion des chiffres au format monétaire EUR.
  function convertFormat(num) {
    return new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' }).format(num);
  }

  // Calcul du montant du panier
  function calculTotal() {
    var priceTotal = 0;

    // Récupération du montant de chaque produit dans le panier.
    $('.product').each(function() {
      // on ajout le montant trouvé à la variable priceTotal.
      priceTotal += $(this).data('price');
    });

    // Affichage du nouveau montant.
    $('.total-amount').html(convertFormat(priceTotal));
  }

})(jQuery);
