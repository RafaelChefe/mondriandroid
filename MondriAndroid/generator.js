var symbols = ['#icon-scissors', '#icon-eye', '#icon-font', '#icon-sphere', '#icon-power-cord', '#icon-fire', '#icon-meter', '#icon-mail4', '#icon-html-five2', '#icon-css3', '#icon-embed2', '#icon-rocket', '#icon-gift', '#icon-trophy', '#icon-stats-bars', '#icon-stats-dots', '#icon-bug', '#icon-magic-wand', '#icon-pencil2', '#icon-quill', '#icon-pen', '#icon-eyedropper', '#icon-paint-format', '#icon-film', '#icon-pacman', '#icon-bullhorn', '#icon-binoculars', '#icon-wrench', '#icon-key2', '#icon-search', '#icon-quotes-right', '#icon-users', '#icon-bubbles2', '#icon-mobile', '#icon-laptop', '#icon-compass2', '#icon-display', '#icon-display', '#icon-cart', '#icon-ticket'];

var geometric = ['#icon-write', '#icon-wonder', '#icon-win', '#icon-weld', '#icon-wear', '#icon-watch', '#icon-wait', '#icon-use', '#icon-urbanize', '#icon-upload', '#icon-unlock', '#icon-undo', '#icon-type', '#icon-travel', '#icon-tower', '#icon-time', '#icon-target', '#icon-tag', '#icon-swim', '#icon-subtract', '#icon-strike', '#icon-store', '#icon-stop', '#icon-steam', '#icon-stamp', '#icon-stack', '#icon-spook', '#icon-spin', '#icon-sound', '#icon-solve', '#icon-smoke', '#icon-smell', '#icon-sleep', '#icon-sit', '#icon-shine', '#icon-send', '#icon-search2', '#icon-schedule', '#icon-scare', '#icon-saw', '#icon-save', '#icon-rule', '#icon-rewind', '#icon-resize', '#icon-report', '#icon-reply', '#icon-reflect', '#icon-redo', '#icon-record', '#icon-rain', '#icon-race', '#icon-push', '#icon-protect', '#icon-produce', '#icon-print', '#icon-primp', '#icon-press', '#icon-prank', '#icon-power', '#icon-point', '#icon-plug', '#icon-ping', '#icon-pin', '#icon-photograph', '#icon-perform', '#icon-pay', '#icon-pause', '#icon-open', '#icon-navigate', '#icon-narrow', '#icon-merge', '#icon-marry', '#icon-love', '#icon-lock', '#icon-locate', '#icon-load', '#icon-listen', '#icon-link', '#icon-lift', '#icon-launch', '#icon-label', '#icon-kiss', '#icon-kill', '#icon-keep', '#icon-join', '#icon-impregnate', '#icon-hurt', '#icon-home', '#icon-harvest', '#icon-hang', '#icon-hammer', '#icon-hack', '#icon-grow', '#icon-groom', '#icon-go', '#icon-give', '#icon-game', '#icon-gamble', '#icon-forward', '#icon-forbid', '#icon-flag', '#icon-fit', '#icon-finish', '#icon-find', '#icon-film2', '#icon-fight', '#icon-explore', '#icon-explode', '#icon-equal', '#icon-enter', '#icon-enlarge', '#icon-eat', '#icon-drown', '#icon-drive', '#icon-drink', '#icon-drill', '#icon-dream', '#icon-download', '#icon-divide', '#icon-dig', '#icon-die', '#icon-develop', '#icon-defend', '#icon-decorate', '#icon-dazzle', '#icon-cut', '#icon-cry', '#icon-crop', '#icon-create', '#icon-copy', '#icon-cook', '#icon-connect', '#icon-condemn', '#icon-collect', '#icon-code', '#icon-close', '#icon-climb', '#icon-clamber', '#icon-chop', '#icon-charge', '#icon-celebrate', '#icon-capture', '#icon-camp', '#icon-call', '#icon-calculate', '#icon-caffeinate', '#icon-build', '#icon-broadcast', '#icon-bookmark', '#icon-blow', '#icon-bloom', '#icon-blaze', '#icon-bite', '#icon-believe', '#icon-barbecue', '#icon-bake', '#icon-attract', '#icon-ask', '#icon-ascend', '#icon-arrest', '#icon-anchor', '#icon-alert', '#icon-alarm', '#icon-adjust', '#icon-add', '#icon-accommodate'];

var rotations = ['rotate-1', 'rotate-2', 'rotate-3'];

// list of active symbols

var testIcons = ['#icon-scissors', '#icon-eye', '#icon-font', '#icon-sphere', '#icon-power-cord']

var article= "2 knives to poke your face and launch a nuke";
var author = "Alex Walker ";
var pubdate = "8/5/2017";
var seed = "aaaaaaaaaaaaaa"; // Extra randomness if you don't like the default graphic

var numbers_regex = /\d{1,2} /g;

var numbers = article.match(numbers_regex).map(function(x){ return parseInt(x) });


var iconNames = symbols.map(function(icon){
  return(icon.substring(6, icon.length));
});

function getIcons(allIcons, title) {
  var iconsFound = [];

  allIcons.forEach(function(icon){
    var regex = new RegExp(icon, 'i');

    if (regex.test(title)) {
      iconsFound.push("#icon-" + icon);
    }
  });

  return iconsFound;
}

console.log(numbers);

var title = article+author+pubdate+seed;
var titleHash = md5(title);
var subHash = titleHash.substring(16, 32);
var randColor = parseInt(subHash, 16) % 255;

//var randColor = Math.floor(Math.random() * 255);

/* BREAK THE HASH INTO 16 PARTS */

var createGroupedArray = function(articlehash, chunkSize) {
    var groups = [], i;
    var dec = [], i;
    for (i = 0; i < articlehash.length; i += chunkSize) {
     groups.push(articlehash.slice(i, i + chunkSize));

    }
    return groups;
}

var groupedArr = createGroupedArray(titleHash, 2);
var result = JSON.stringify(groupedArr);
//result: "[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14]]"


function dec2bin(dec){ // convert decimal 2 binary
    return (dec >>> 0).toString(2);
}

var decimal = new Array();
var binary = new Array();

// RANDOM SYMBOL SELECTION
// var selectsymbol = symbols[Math.floor(Math.random() * symbols.length)]; // pick one at random

var matchedIcons = getIcons(iconNames, title);
var selectsymbol = ( matchedIcons.length > 0 ? matchedIcons[0] : symbols[Math.floor(Math.random() * symbols.length)] );

console.log(selectsymbol);

var selectsymbol2 = geometric[Math.floor(Math.random() * symbols.length)]; // pick one at random
var selectsymbol3 = geometric[Math.floor(Math.random() * symbols.length)]; // pick one at random


// SELECTED NON-RANDOM
var ss = (symbols.length/255) * decimal[i];
//var selectsymbol = symbols[decimal[i]];



/* COLOR PALETTE GENERATION */

var basehue = randColor;
var secondhue = basehue * 1.618;
var thirdhue = secondhue * 1.618;

var basecolor = "hsl("+basehue+", 52%, 49%)";
var secondcolor = "hsl("+secondhue+", 52%, 49%)";
var thirdcolor = "hsl("+thirdhue+", 52%, 20%)";
var framecolor = "hsl("+thirdhue+", 52%, 75%)";

// COLOR SWATCHES
var swatch = document.querySelector("#swatch1");
swatch.style.fill = basecolor;
var swatch2 = document.querySelector("#swatch2");
swatch2.style.fill = secondcolor;
var swatch3 = document.querySelector("#swatch3");
swatch3.style.fill = thirdcolor;
var swatch4 = document.querySelector("#swatch4");
swatch4.style.fill = framecolor;
// DRAW

var svg = document.querySelector("#art1");


//Get svg element

function setAttributes(node, attrs) { // pete's function
    for(k in attrs) { node.setAttribute(k, attrs[k]) }
}

var xmlns = "http://www.w3.org/2000/svg";
var xlinkr= "http://www.w3.org/1999/xlink";

// CREATE RAW DESIGN ELEMENTS
var newFocalpoint = document.createElementNS(xmlns, 'use'); // main icon
var newElementGeoA = document.createElementNS(xmlns, 'use'); // large BG icon
var newElementGeoB = document.createElementNS(xmlns, 'use'); // large BG icon
var newElementGeoA2 = document.createElementNS(xmlns, 'use'); // large BG icon
var newFPSVG = document.createElementNS(xmlns, 'svg'); // focalpoint grouping
var newFrame = document.createElementNS(xmlns, 'circle'); // background rect
var newBG = document.createElementNS(xmlns, 'rect'); // background rect
var paper = document.createElementNS(xmlns, 'rect'); // overlay paper texture

var newGraphicnumber = document.createElementNS(xmlns, 'text');

setAttributes(newGraphicnumber, {
   x: '150', y: '600', id: 'newGraphicnumber'
  })

// ADD SVG SYMBOL COMPONENTS
newFocalpoint.setAttributeNS(xlinkr, 'xlink:href', selectsymbol);
newElementGeoA.setAttributeNS(xlinkr, 'xlink:href', selectsymbol2);
newElementGeoB.setAttributeNS(xlinkr, 'xlink:href', selectsymbol2);
newElementGeoA2.setAttributeNS(xlinkr, 'xlink:href', selectsymbol3);


// STYLE DESIGN ELEMENTS


setAttributes(newBG, {
  width: "1000", height: '610', x: '0', y: '0', fill: basecolor
})

setAttributes(paper, {
  height: '610px', x: '0', y: '0', class: "paper"
})

setAttributes(newFPSVG, {
  id: "focalpoint",  x: '440', y: '140', width: "500", height: "500", viewbox: "0 0 500 500"
})

setAttributes(newElementGeoA, {
  opacity: 1, height: '1100px', x: '-30%', y: '-30%', class: 'patternA'
})

setAttributes(newElementGeoB, {
  opacity: 1, height: '1100px', x: '-30%', y: '-30%', fill: secondcolor
})

setAttributes(newElementGeoA2, {
  opacity: .5, height: '1100px', x: '20%', y: '-30%', fill: thirdcolor, class: 'rotate-1'
})

setAttributes(newFrame, {
  cx: '200', cy: '200', r: '200', fill: framecolor, class: 'frame'
})

setAttributes(newFocalpoint, { // main icon
  fill: 'rgba(0,0,0,.7)', width: '200', x: '20%', y: '-10%', class: 'focalpoint'
})


/* BUILD THE SVG */
svg.appendChild(newBG); // BG rect
svg.appendChild(newElementGeoB);  //  Large Geo: solid color
svg.appendChild(newElementGeoA);  //  Large Geo: Ben Day dots
svg.appendChild(newElementGeoA2); //  Large Geo: Ben Day dots
svg.appendChild(newFPSVG) // G group for attaching the focalpoint;

svg.appendChild(newGraphicnumber);

var addnumber = document.querySelector("#newGraphicnumber");
var numbertxt = document.createTextNode(numbers[0]);
//addnumber.appendChild(numbertxt);

svg.appendChild(paper); // Paper texture

var focalpoint = document.querySelector("#focalpoint");
focalpoint.appendChild(newFrame); // Main icon frame
focalpoint.appendChild(newFocalpoint); // Main icon


// FEEDBACK PANEL
var hue = document.querySelector("#hue");
var helloTxt = document.createTextNode(basehue);
hue.appendChild(helloTxt);

var orig = document.querySelector("#orig");
var titleTxt = document.createTextNode(article);
orig.appendChild(titleTxt);

var matchednumbers = document.querySelector("#matchednumbers");
var numberTxt = document.createTextNode(numbers[0]);
matchednumbers.appendChild(numberTxt);

var hash = document.querySelector("#hash");
var hashTxt = document.createTextNode(titleHash);
hash.appendChild(hashTxt);

// dropping a table

document.write("<table>");
var hashArrLen = groupedArr.length;

  for (var i=0; i < 16; i++) {
     decimal[i] = parseInt(groupedArr[i], 16);
     binary[i] = dec2bin(decimal[i]);

     document.write("<tr><td> Hex: </td><td>"+groupedArr[i]+" </td><td>Decimal: </td><td>"+ decimal[i] + "</td><td> Binary </td><td>" + binary[i] +"</td></tr>");
  }
document.write("</table>");

document.write("<li>symbols.length: "+symbols.length+"</li>");
document.write("<li>geometric.length: "+geometric.length+"</li>");
document.write("<li>symbols.length: "+symbols.length+"</li>");
document.write("<li>geometric.length: "+geometric.length+"</li>");

var numberoffunctions = 5;
var magicnumber = Math.ceil((numberoffunctions /255) * decimal[0]);


document.write("<li>Decimal: "+decimal[0]+"</li>");
document.write("<li>Magic number: "+magicnumber+"</li>");
