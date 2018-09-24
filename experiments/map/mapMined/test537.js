





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return scaled(c, 255);
};
var argument2 = "T";
var argument3 = function (el, i) {
 callbackArguments.push(arguments) 

    return $.inArray(el, displayFiltered) === -1 ? el : null;
};
var argument4 = true;
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    return selectorLegend(id);
};
var argument6 = function (elem) {
 callbackArguments.push(arguments) 

    return elem.selected;
};
var argument7 = true;
var argument8 = null;
var base_0 = [49,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,403]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,403]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,403]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)