





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    stats[valu"Error"]++;
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    var row = $('<tr />').addClass('point');
    $('<img />').attr('src', item.iconUrl).appendTo($('<td/>').appendTo(row));
    var textCell = $('<td />').addClass('text');
    textCell.html(item.narrative);
    textCell.appendTo(row);
    var distCell = $('<td />').addClass('distance');
    if (lastItem) {
        distCell.html(Convert.toDistance(lastItem.distance));
    }
    lastItem = item;
    distCell.appendTo(row);
    row.appendTo($('#directionsPanel > table'));
};
var argument3 = {"627":"G","893":1.628030346892069e+308,"1.0917533500214567e+308":4.445098397284049e+306,"1.7097795038951207e+308":49,"":1.0722955656148012e+308,"5.449122358646185e+307":"v","1.2707956928718327e+308":1.696453975407894e+307,"7.935628672996363e+307":"zM%3=",">z":"ND5h"};
var argument4 = 1.0360149261779862e+308;
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    var arr = [];
    columns.forEach(function (c) {
        arr.push(fetchValue(vars, n, c));
    });
    csv_to_return.push(arr);
};
var argument6 = false;
var argument7 = function (id) {
 callbackArguments.push(arguments) 

    var axisPanel = axesPanels[id], sizes = sizesMaxByAxisId[id], ol = 'x' === axisPanel.axis.orientation ? 'height' : 'width';
    size = axisPanel[ol];
    size > sizes.axis && (sizes.axis = size);
    var titlePanel = axisPanel.titlePanel;
    if (titlePanel) {
        size = titlePanel[ol];
        size > sizes.title && (sizes.title = size);
    }
};
var argument8 = true;
var base_0 = [893,843,100,126,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,843,100,126,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,843,100,126,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,843,100,126,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/forEach/forEachMined/test956.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)