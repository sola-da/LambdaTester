





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el[prop];
};
var argument2 = function (m) {
 callbackArguments.push(arguments) 

    return new L.LatLng(m.startPoint.lat, m.startPoint.lng);
};
var argument3 = true;
var argument4 = null;
var argument5 = function (completion) {
 callbackArguments.push(arguments) 

    return {
        text: completion.name,
        type: completion.message,
        guess: !!res.guess
    };
};
var argument6 = true;
var argument7 = function (i, el) {
 callbackArguments.push(arguments) 

    row = el.parentNode._DT_RowIndex;
    return {
        row: row,
        column: $.inArray(el, data[row].anCells)
    };
};
var base_0 = [1.7976931348623157e+308,"Cd","Ee","w{y,","q",213,627,242,"@"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"Cd","Ee","w{y,","q",213,627,242,"@"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"Cd","Ee","w{y,","q",213,627,242,"@"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"Cd","Ee","w{y,","q",213,627,242,"@"]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test596.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)