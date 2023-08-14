<script>
// on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  // selectors
  const DATE_VERSION_ONE_SELECTOR = '[fs-hacks-element="date-version-1"]';
  const DATE_VERSION_TWO_SELECTOR = '[fs-hacks-element="date-version-2"]';
  const dateVersionOne = document.querySelector(DATE_VERSION_ONE_SELECTOR);
  const dateVersionTwo = document.querySelector(DATE_VERSION_TWO_SELECTOR);

  // early exit if no elements found
  if (!dateVersionOne || !dateVersionTwo) return;
  // Set your formatting options e.g. Version 1 output = "Sat, Dec 25, 2019"
  // See more available options at {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options}
  const dateVersion1Format = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  };
  //Version 2 output = "12/25/19"
  const dateVersion2Format = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  };

  dateVersionOne.innerText = new Date().toLocaleDateString('en-GB', dateVersion1Format);

  dateVersionTwo.innerText = new Date().toLocaleDateString('en-GB', dateVersion2Format);
});
</script>


<!-- F’in sweet Webflow Hacks -->
<script>
// on criolla weight input
$('#criolla-weight').on('input', function(){
  // update total text
  $('#criolla').text(formatNumber(calculateCriolla()));
});
// calculate criolla weight
function calculateCriolla(){
  // get criolla weight value
  const criollaWeight = Number($('#criolla-weight').val());
  const criollaFreeze = Number($('#criolla-freeze').val());
  // get criolla tare value
  const criollaTare = 1245;
//  if criollaWeight <= criollaTare 
  // subtract projectCost from projectFee to get profit
  return Math.floor(((criollaWeight - criollaTare)/128)+criollaFreeze);
}

// on jamon y queso weight input
$('#jamon-y-queso-weight').on('input', function(){
  // update total text
  $('#jamon-y-queso').text(formatNumber(calculateJYQ()));
});
// calculate jamon y queso weight
function calculateJYQ(){
  // get jyq weight value
  const jyqWeight = Number($('#jamon-y-queso-weight').val());
  const jyqFreeze = Number($('#jamon-y-queso-freeze').val());
  // get jyq tare value
  const jyqTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((jyqWeight - jyqTare)/128)+jyqFreeze);
}

// on pollo weight input
$('#pollo-weight').on('input', function(){
  // update total text
  $('#pollo').text(formatNumber(calculatePollo()));
});
// calculate pollo weight
function calculatePollo(){
  // get pollo weight value
  const polloWeight = Number($('#pollo-weight').val());
  const polloFreeze = Number($('#pollo-freeze').val());
  // get pollo tare value
  const polloTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((polloWeight - polloTare)/128)+polloFreeze);
  
}
// on cerdo weight input
$('#cerdo-weight').on('input', function(){
  // update total text
  $('#cerdo').text(formatNumber(calculateCerdo()));
});
// calculate cerdo weight
function calculateCerdo(){
  // get cerdo weight value
  const cerdoWeight = Number($('#cerdo-weight').val());
  const cerdoFreeze = Number($('#cerdo-freeze').val());
  // get cerdo tare value
  const cerdoTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((cerdoWeight - cerdoTare)/128)+cerdoFreeze);
}

// on angus weight input
$('#angus-weight').on('input', function(){
  // update total text
  $('#angus').text(formatNumber(calculateAngus()));
});
// calculate angus weight
function calculateAngus(){
  // get angus weight value
  const angusWeight = Number($('#angus-weight').val());
  const angusFreeze = Number($('#jamon-y-queso-freeze').val());
  // get angus tare value
  const angusTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((angusWeight - angusTare)/128)+cerdoFreeze);
}

// on arrabalera weight input
$('#arrabalera-weight').on('input', function(){
  // update total text
    $('#arrabalera').text(formatNumber(calculateArrabalera()));
});
// calculate arrabalera weight
function calculateArrabalera(){
  // get arrabalera weight value
  const arrabaleraWeight = Number($('#arrabalera-weight').val());
  const arrabaleraFreeze = Number($('#arrabalera-freeze').val());
  // get arrabalera tare value
  const arrabaleraTare = 1803;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((arrabaleraWeight - arrabaleraTare)/128)+arrabaleraFreeze);
}

// on vegetales weight input
$('#vegetales-weight').on('input', function(){
  // update total text
  $('#vegetales').text(formatNumber(calculateVegetales()));
});
// calculate vegetales weight
function calculateVegetales(){
  // get vegetales weight value
  const vegetalesWeight = Number($('#vegetales-weight').val());
  const vegetalesFreeze = Number($('#vegetales-freeze').val());
  // get vegetales tare value
  const vegetalesTare = 980;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((vegetalesWeight - vegetalesTare)/128)+vegetalesFreeze);
}
// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}

// on champinones weight input
$('#champinones-weight').on('input', function(){
  // update total text
  $('#champinones').text(formatNumber(calculateChampinones()));
});
// calculate champinones weight
function calculateChampinones(){
  // get champinones weight value
  const champinonesWeight = Number($('#champinones-weight').val());
  const champinonesFreeze = Number($('#champinones-freeze').val());
  // get champinones tare value
  const champinonesTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((champinonesWeight - champinonesTare)/128)+champinonesFreeze);
}

// on espinaca weight input
$('#espinaca-weight').on('input', function(){
  // update total text
  $('#espinaca').text(formatNumber(calculateEspinaca()));
});
// calculate espinaca weight
function calculateEspinaca(){
  // get espinaca weight value
  const espinacaWeight = Number($('#espinaca-weight').val());
  const espinacaFreeze = Number($('#espinaca-freeze').val());
  // get espinaca tare value
  const espinacaTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((espinacaWeight - espinacaTare)/128)+espinacaFreeze);
}

// on queso weight input
$('#queso-weight').on('input', function(){
  // update total text
  $('#queso').text(formatNumber(calculateQueso()));
});
// calculate queso weight
function calculateQueso(){
  // get queso weight value
  const quesoWeight = Number($('#queso-weight').val());
  const quesoFreeze = Number($('#queso-freeze').val());
  // get queso tare value
  const quesoTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((quesoWeight - quesoTare)/128)+quesoFreeze);
}
// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}

// on milonguita weight input
$('#milonguita-weight').on('input', function(){
  // update total text
  $('#milonguita').text(formatNumber(calculateMilonguita()));
});
// calculate milonguita weight
function calculateMilonguita(){
  // get milonguita weight value
  const milonguitaWeight = Number($('#milonguita-weight').val());
  const milonguitaFreeze = Number($('#milonguita-freeze').val());
  // get milonguita tare value
  const milonguitaTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((milonguitaWeight - milonguitaTare)/128)+milonguitaFreeze);
}
// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}

// on hongos weight input
$('#hongos-weight').on('input', function(){
  // update total text
  $('#hongos').text(formatNumber(calculateHongos()));
});
// calculate hongos weight
function calculateHongos(){
  // get hongos weight value
  const hongosWeight = Number($('#hongos-weight').val());
  const hongosFreeze = Number($('#hongos-freeze').val());
  // get hongos tare value
  const hongosTare = 1245;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((hongosWeight - hongosTare)/128)+hongosFreeze);
}
// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}

// on criolla-vegan weight input
$('#criolla-vegan-weight').on('input', function(){
  // update total text
  $('#criolla-vegan').text(formatNumber(calculateCriollavegan()));
});
// calculate criolla-vegan weight
function calculateCriollavegan(){
  // get criolla-vegan weight value
  const criollaveganWeight = Number($('#criolla-vegan-weight').val());
  const criollaveganFreeze = Number($('#criolla-vegan-freeze').val());
  // get criolla-vegan tare value
  const criollaveganTare = 1802;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((criollaveganWeight - criollaveganTare)/128)+criollaFreeze);
}
// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}


// on humita weight input
$('#humita-weight').on('input', function(){
  // update total text
  $('#humita').text(formatNumber(calculateHumita()));
});
// calculate humita weight
function calculateHumita(){
  // get humita weight value
  const humitaWeight = Number($('#humita-weight').val());
  const humitaFreeze = Number($('#humita-freeze').val());
  // get humita tare value
  const humitaTare = 978;
  // subtract total weight - weight of bin to get # of empanadas
  return Math.floor(((humitaWeight - humitaTare)/128)+humitaFreeze);
}

// on chipa weight input
//$('#chipa1Weight').on('input', function(){
  // update total text
//  $('#chipaReg').text(formatNumber(calculateChipa()));
//});
// calculate chipa weight
//function calculateChipa(){
  // get chipa1 weight value
//  const chipa1Weight = Number($('#chipa1Weight').val());
//  const chipa2Weight = Number($('#chipa2Weight').val());
  // get chipa tare value
//  const chipa1Tare = 732;
//  const chipa2Tare = 731;
  // subtract total weight - weight of bin to get # of empanadas
//  return Math.floor((chipa1Weight - chipa1Tare)+(chipa2Weight - chipa2Tare);
//}

// on AlfajorBlancoCountinput
//$('#blanco-count').on('input', function(){
  // update total text
//  $('#alfajor-blanco').text(formatNumber(calculateAlfajorBlanco()));
//});
// calculate alfajor blanco
//function calculateAlfajorBlanco(){
  // get alfajor value
//const alfBlancoCount = Number($('#blanco-count').val());
   // subtract total weight - weight of bin to get # of empanadas
  //return Math.floor(alfBlancoCount - 0)


// format number function
// e.g. 3500 becomes 3,500
function formatNumber(num){
  return new Intl.NumberFormat().format(num);
}

</script>
