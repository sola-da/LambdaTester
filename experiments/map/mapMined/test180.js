





var callbackArguments = [];
var argument1 = function (opt) {
 callbackArguments.push(arguments) 

    return document.id(opt).get('value');
};
var argument2 = "Xe=";
var argument3 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument4 = function (tab) {
 callbackArguments.push(arguments) 

    return lis.index(tab);
};
var argument5 = {};
var argument6 = false;
var argument7 = function (value) {
 callbackArguments.push(arguments) 

    return value == null ? '' : value + '';
};
var argument8 = null;
var base_0 = ["%","y(","?","q{","6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","y(","?","q{","6"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","y(","?","q{","6"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","y(","?","q{","6"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test180.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)