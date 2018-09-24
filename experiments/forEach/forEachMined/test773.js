





var callbackArguments = [];
var argument1 = function (item) {
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
var argument2 = null;
var argument3 = null;
var argument4 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    __data_colors[id] = colors[id];
};
var argument6 = ["k",823,618,893,595,"h"];
var argument7 = function (item) {
 callbackArguments.push(arguments) 

    $(item).appendTo($('#userlist'));
};
var argument8 = [82,25,"<","a",82,5e-324,82,969];
var base_0 = [460]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)