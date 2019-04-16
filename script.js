$(document).ready(function(){
  //Fonction pour augmenté la hauteur de 10px, si il dépasse 100px, il remet la hauteur à 10px
  $('#btn1').click(function(){
    //la variable qui correspond à la hauteur maximun à ne pas dépasser
    var maxHeight = '100px';
    //la variable qui remet la hauteur par defaut
    var initialHeight = '0px';
    //Condition, si le rectangle dépasse une hauteur de 100px, remet 10px de hauteur
    if ($('.container').css('height') == maxHeight) {
      $('.container').height(initialHeight);
    }
    $('.container').css('height','+=10px');
  });
  //fonction pour mettre le rectangle en vert
  $('#btn2').click(function() {
    $('.container').css('background-color','green');
  });
  //fonction pour mettre la couleur initiale
  $('#btn3').click(function() {
    $('.container').css('background-color','red');
  });
  //fonction pour faire dispaître le rectangle
  $('#btn4').click(function() {
    $('.container').hide();
  });
  //fonction pour faire apparaître le rectangle
  $('#btn5').click(function() {
    $('.container').show();
  });
});
