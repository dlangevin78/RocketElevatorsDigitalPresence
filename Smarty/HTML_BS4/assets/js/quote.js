
//hides all the div that have a 'building_type' class when the page is loading
$('.building_type').hide();

//fonction to dynamically change the inputs of building-type:
$(document).ready(function () {
    $('#selectMe').change(function(){
      var choiceSelect = document.getElementById('selectMe').value;
      
      if (choiceSelect == '0'){
        $('#Residential').hide();
        $('#Commercial').hide();
        $('#Corporative').hide();
        $('#Hybrid').hide();
    } else if (choiceSelect == 'residential') {
        $('#Residential').show();
        $('#Commercial').hide();
        $('#Corporative').hide();
        $('#Hybrid').hide();
    } else if (choiceSelect == 'commercial') {
        $('#Commercial').show();
        $('#Residential').hide();
        $('#Corporative').hide();
        $('#Hybrid').hide();
    } else if (choiceSelect == 'corporative') {
        $('#Corporative').show();
        $('Residential').hide();
        $('#Commercial').hide();
        $('#Hybrid').hide();
      
    } else if (choiceSelect == 'hybrid') { 
        $('#Hybrid').show();
        $('#Residential').hide();
        $('#Commercial').hide();
        $('#Corporative').hide();
    }
  })    
  });

 //Residential Input Section
 //#Residential = div id of the Residential Section
 //#aptnum = id of the input from the client to the question 'How many apt'
 //#residential_floor_num = id of the input to question 'How many floors'
 //#residential_basement_num = id of the input to question 'How many basements' USELESS in that situation
 $(document).ready(function () {
    $('#Residential').change(function(){
      var $aptnum = $('#aptnum').val();
      var $resfloor = $('#residential_floor_num').val();

      var $XFloor = Math.ceil($aptnum/($resfloor * 6));

      var $columns = Math.ceil($resfloor/20);

      var $elevNumber = ($XFloor) * ($columns);

      //showing the values on readonly cases when the radio button is clicked
      if ($('#standard').is(':checked')){
        planStd();
      }else if ($('#premium').is(':checked')){
        planPr();
      }else if ($('#excelium').is(':checked')){
        planEx();
      }

    //Sending the $elevNumber to the 'cost by elevator' read-only case 
     $('#Recommended').val($elevNumber);
    })
 });

 //Commercial Input Section
 //#Commercial = id of the div Commercial Section
 //#commercial_shaft_num = shaft input id
 $('#Commercial').change(function () { 
      var $shaftNum = $('#commercial_shaft_num').val();
      //showing the values on readonly cases when the radio button is clicked
      if ($('#standard').is(':checked')){
        planStd();
      }else if ($('#premium').is(':checked')){
        planPr();
      }else if ($('#excelium').is(':checked')){
        planEx();
      }
     //Sending the $shaftNum to the 'cost by elevator' read-only case 
      $('#Recommended').val($shaftNum);
 })

 //Corporative Input Section
 //#Corporative = div id for Corporative Section
 //#corporative_floor_num = floor input id
 //#corporative_basement_num = basement input id
 //#corporative_occupancy_num = occupancy input id
$('#Corporative').change(function(){
    var $floorCo = $('#corporative_floor_num').val();
    var $basementCo = $('#corporative_basement_num').val();
    var $occCo = $('#corporative_occupancy_num').val();

    var $elevCo = Math.ceil($occCo *($floorCo + $basementCo) /1000);
    var $columnCo = Math.ceil(($floorCo + $basementCo)/20);
    var $elevByColumnCo = Math.ceil($elevCo/$columnCo);
    var $totalElevCo = $elevByColumnCo * $columnCo;

    //showing the values on readonly cases when the radio button is clicked
    if ($('#standard').is(':checked')){
      planStd();
    }else if ($('#premium').is(':checked')){
      planPr();
    }else if ($('#excelium').is(':checked')){
      planEx();
    }

    //Sending the $shaftNum to the 'cost by elevator' read-only case 
    $('#Recommended').val($totalElevCo);

})

 //Hybrid Input Section
 //#Hybrid = div id for Hybrid Section
 //#hybrid_floor_num = floor input id
 //#hybrid_basement_num = basement input id
 //#hybrid_occupancy_num = occupancy input id
 $('#Hybrid').change(function(){
   var $floorHy = $('#hybrid_floor_num').val();
   var $basementHy = $('#hybrid_basement_num').val();
   var $occHy = $('#hybrid_occupancy_num').val();

   var $elevHy = Math.ceil($occHy *($floorHy + $basementHy) /1000);
   var $columnHy = Math.ceil(($floorHy + $basementHy)/20);
   var $elevByColumnHy = Math.ceil($elevHy/$columnHy);
   var $totalElevHy = $elevByColumnHy * $columnHy;

   //showing the values on readonly cases when the radio button is clicked
   if ($('#standard').is(':checked')){
    planStd();
  }else if ($('#premium').is(':checked')){
    planPr();
  }else if ($('#excelium').is(':checked')){
    planEx();
  }

  //Showing the $shaftNum to the 'cost by elevator' read-only case 
  $('#Recommended').val($totalElevHy);

  
 })

 //Radio Button Selected Standard
 //standard plan  
 //#elevatorCost  
 //#totalElevators  
 //#installFee 
 //#total  
function planStd(){
  console.log('standard plan')
  var $std = $('#Recommended').val();
  console.log($std)
  var $stdElevCost = 7565;
  console.log($stdElevCost)
//showing the $std to the 'Cost by elevators' case plus $
$('#elevatorCost').val($stdElevCost.toFixed(2));
document.getElementById('elevatorCost').value =  document.getElementById('elevatorCost').value + '$';

var $stdInstall = parseInt($std * 7565);
console.log($stdInstall)
 $stdFee =  ($stdInstall * 0.1);
 $stdTotal = ($stdInstall + $stdFee);

//showing the $stdInstall to the 'Total cost for elevators' case plus $
$('#totalElevators').val($stdInstall.toFixed(2));
document.getElementById('totalElevators').innerHtml =  $stdInstall + '$';


//showing the $stdFee to the 'Install Fee' case plus $
$('#installFee').val($stdFee.toFixed(2));
document.getElementById('installFee').innerHTML =  $stdFee + '$';

//showing the $stdTotal to the 'Total ' case plus $
$('#total').val($stdTotal.toFixed(2));
document.getElementById('total').innerHTML =  $stdTotal + '$';


};
 
 //Radio Button Selected Premium
 //premium plan  
 //#elevatorCost  
 //#totalElevators  
 //#installFee 
 //#total  
 function planPrem(){
  console.log('standard plan')
  var $prem = $('#Recommended').val();
  console.log($prem)
  var $premElevCost = 12345;
  console.log($premElevCost)
//showing the $std to the 'Cost by elevators' case plus $
$('#elevatorCost').val($premElevCost.toFixed(2));
document.getElementById('elevatorCost').value =  document.getElementById('elevatorCost').value + '$';

var $premInstall = parseInt($prem * 12345);
console.log($premInstall)
 $premFee =  ($premInstall * 0.13);
 $premTotal = ($premInstall + $premFee);

//showing the $premInstall to the 'Total cost for elevators' case plus $
$('#totalElevators').val($premInstall.toFixed(2));
document.getElementById('totalElevators').innerHtml =  $premInstall + '$';


//showing the $premFee to the 'Install Fee' case plus $
$('#installFee').val($premFee.toFixed(2));
document.getElementById('installFee').innerHTML =  $premFee + '$';

//showing the $premTotal to the 'Total ' case plus $
$('#total').val($premTotal.toFixed(2));
document.getElementById('total').innerHTML =  $premTotal + '$';


};

//Radio Button Selected Excelium
 //standard plan  
 //#elevatorCost  
 //#totalElevators  
 //#installFee 
 //#total  
 function planEx(){
  console.log('excelium plan')
  var $ex = $('#Recommended').val();
  console.log($ex)
  var $exElevCost = 15400;
  console.log($exElevCost)
//showing the $std to the 'Cost by elevators' case plus $
$('#elevatorCost').val($exElevCost.toFixed(2));
document.getElementById('elevatorCost').value =  document.getElementById('elevatorCost').value;

var $exInstall = parseInt($ex * 15400);
console.log($exInstall)
 $exFee =  ($exInstall * 0.16);
 $exTotal = ($exInstall + $exFee);

//showing the $premInstall to the 'Total cost for elevators' case 
$('#totalElevators').val($exInstall.toFixed(2));
document.getElementById('totalElevators').innerHtml =  $exInstall;


//showing the $premFee to the 'Install Fee' case plus $
$('#installFee').val($exFee.toFixed(2));
document.getElementById('installFee').innerHTML =  $exFee + '$';

//showing the $premTotal to the 'Total ' case plus $
$('#total').val($exTotal.toFixed(2));
document.getElementById('total').innerHTML =  $exTotal + '$';




};



  
 
 
 
 
 


  
  


  
  
   
  

  

  