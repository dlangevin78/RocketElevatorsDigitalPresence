
$('.building_type').hide();
//hides all the div that have a 'building_type' class

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
//shows on chrome console as a HTML collection (not an array).

  //Quote calculations to put in the button submit for each building-type
  // Make a radio button inside a popup = (quote?).modal and (inside the html?).modal-content DUNNO

  //Residential

  var mean = $('aptnum')/$('residential_floor_num');
   

  if ('mean' > 20) {};//2 times de number of shaft
  if ('mean' <= 20){}; // single shaft

  //Commercial

  var commValue = $('commercial_shaft_num');

  //Corporative

  var corpTotalOcc = $('corporative_occupancy_num')*$('corporative_floor_num'+'corporative_basement_num');
  var corpshaftNum = corpTotalOcc/1000;
  var corpColumn = ($('corporative_floor_num'+ 'corporative_basement_num')/20);
  var corpShaftInColumn = corpshaftNum/corpColumn;
  var CorpTotal = corpShaftInColumn * corpColumn;
  
  //Hybrid
 
  var hybrTotalOcc = $('hybrid_occupancy_num')*$('hybrid_floor_num'+'hybrid_basement_num');
  var hybrshaftNum = hybrcorpTotalOcc/1000;
  var hybrColumn = ($('hybrid_floor_num'+ 'hybrid_basement_num')/20);
  var hybrShaftInColumn = hybrShaftNum/hybrColumn;
  var hybrTotal = hybrShaftInColumn * hybrColumn;


  //get a popup page with the radio button when the fields are completed and the button submit is clicked (standard/premium/excelliu
  //if ('standard-button') is pressed:
  var residStandard = ('dunno') ;
  var commStandard = ('commValue' * 7565);
  var corpoStandard = ('corpTotal' * 7565);
  var hybridStandard = ('hybrTotal' * 7565);

  //if ('premium') is pressed:

  var residPremium = ('dunno');
  var commPremium = ('commValue' * 12345);
  var corpoPremium = ('corpTotal'* 12345);
  var hybridPremium = ('hybrid' * 12345);

  //if ('excelium') is pressed:

  var residExcel = ('dunno');
  var commExcel = ('commValue' * 15400);
  var corpoExcel = ('corpTotal' * 15400);
  var hybridExcel = ('hybridTotal' * 15400);

  //
  

  
 