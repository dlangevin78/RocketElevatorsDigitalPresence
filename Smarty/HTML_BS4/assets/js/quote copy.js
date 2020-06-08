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

$(document).ready(function () {
   var choiceSelect = document.getElementsByClassName('building_type').value;
   console.log(choiceSelect);
     if (choiceSelect == 'Residential-choice') {
     $('#Residential').show();
   } else if (choiceSelect == 'Commercial-choice') {
     $('#Commercial').show();
   }else if (choiceSelect == 'Corporative-choice') {
     $('#Corporative').show();
   }else if (choiceSelect == 'Hybrid-choice') {
     $('#Hybrid').show();
   }
 });
 