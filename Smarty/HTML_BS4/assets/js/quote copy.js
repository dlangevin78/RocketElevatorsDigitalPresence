//Fonction pour faire une selection unique d'un building-type

   $(document).ready(function () {
      $('.building_type').hide();         //origine = tous les champs sont cachés sauf ---Select---
        
     $('#selectMe').change(function () {     //lorsque le ID est selectionné dans la liste de choix
            $('.building_type').hide();         // cache le texte ---Select---
            $('#'+$(this).val()).show();        // affiche le div selectionné avec les input pour le client
        })
     });

                                                  

//$(document).ready(function () {
  //  alert("you are going somewhere!")
//});
