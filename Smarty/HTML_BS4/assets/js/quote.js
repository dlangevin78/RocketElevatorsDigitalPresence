
$('.building_type').hide();
//hides all the div that have a 'building_type' class

$(document).ready(function () {
    var choiceSelect = document.getElementsByClassName('building_type').value;
    console.log(choiceSelect);
      if (choiceSelect == 'Residential-choice') {
      $('#Residential').innerText.show();
    } else if (choiceSelect == 'Commercial-choice') {
      $('#Commercial').show();
    }else if (choiceSelect == 'Corporative-choice') {
        $('#Corporative').show();
    }else if (choiceSelect == 'Hybrid-choice') { 
         $('#Hybrid').show();
    }
  });
//shows on chrome console as a HTML collection (not an array). Is it my problem? change it into an array??

  //Quote calculations to put in the button submit for each building-type
  // Make a radio button inside a popup = (quote?).modal and (inside the html?).modal-content DUNNO
  // saw the way of making one on #questions of slack...copy paste the method? Not with friday's warning...


  //Residential   NEED TO COME BACK LATER YOU LOOSING TIME!!! rapport avec (n; n<length,; n++) pour +sieurs shaft or jQuery *.each() pr faire un loop

  var mean = $('aptnum')/$('residential_floor_num');
  var total1 = 0 ;          //will contain the result of '20 or less' so 1 shaft
  var total2 = 0 ;          //will contain the result of the 'if more than 20' so 2 shaft
  var n = 0;           //what if we have 100 floors...I can't make a variable forever! NOT WORKING THE WAY I DO IT
//put function involving the value of var mean "('*')function('mean'){} " and put the following in fonction -->
  if ('mean' > 20) {
        println(total1);        // I know its not println but some jQuery fnct still have to figure this out
  };//2 times de number of shaft
  if ('mean' <= 20){            // single shaft
        println(total1)*2
    };
  //Commercial

  var commValue = $('commercial_shaft_num');        //number the client inputed is the number of shaft proposed

  //Corporative

  var corpTotalOcc = $('corporative_occupancy_num')*$('corporative_floor_num'+'corporative_basement_num');
  var corpshaftNum = corpTotalOcc/1000;
  var corpColumn = ($('corporative_floor_num'+ 'corporative_basement_num')/20);
  var corpShaftInColumn = corpshaftNum/corpColumn;
  var CorpTotal = corpShaftInColumn * corpColumn;
  $('CorpTotal').show();                               //same comment as hybrid so are residential total and commercial value
  
  //Hybrid
 
  var hybrTotalOcc = $('hybrid_occupancy_num')*$('hybrid_floor_num'+'hybrid_basement_num');
  var hybrshaftNum = hybrTotalOcc/1000;
  var hybrColumn = ($('hybrid_floor_num'+ 'hybrid_basement_num')/20);
  var hybrShaftInColumn = hybrShaftNum/hybrColumn;
  var hybrTotal = hybrShaftInColumn * hybrColumn;
  $('hybrTotal').show();                            //but in the popup1 with the radio button choice underneath once the radio button is done


  //get a popup2 page with the radio button when the fields are completed and the radio button submit is clicked (standard/premium/excelliu
  
  //if ('standard-button') is pressed:
  var residStandard = ('dunno') ;
  var commStandard = ('commValue' * 7565)
  var corpoStandard = ('corpTotal' * 7565);
  var hybridStandard = ('hybrTotal' * 7565);
  //var pctStandard to create ('var *Standard * 0.1)+ "value of the var *Standard"

  //if ('premium') is pressed:

  var residPremium = ('dunno');
  var commPremium = ('commValue' * 12345);
  var corpoPremium = ('corpTotal'* 12345);
  var hybridPremium = ('hybrid' * 12345);
//var pctPremium to create ('var *Premium * 0.1)+ "value of the var *Premium"

  //if ('excelium') is pressed:

  var residExcel = ('dunno');
  var commExcel = ('commValue' * 15400);
  var corpoExcel = ('corpTotal' * 15400);
  var hybridExcel = ('hybridTotal' * 15400);

  
  //button SEE QUOTE to ADD at the end of the popup2

  //final popup that shows in read only the final quote
  

  
 