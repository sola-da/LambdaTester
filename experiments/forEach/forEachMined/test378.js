





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    this[field] = val;
};
var argument2 = 655;
var argument3 = function (c) {
 callbackArguments.push(arguments) 

    c._getDatumsOnRect(datumMap, rect, ka);
};
var argument4 = r_0;
var argument5 = function (desc) {
 callbackArguments.push(arguments) 

    var bundle = dojo.i18n.getLocalization(desc.pkg, desc.name, locale);
    buddhist = dojo.mixin(buddhist, bundle);
};
var argument6 = function (axis) {
 callbackArguments.push(arguments) 

    axis.option.defaults({ Offset: 0.02 });
};
var argument7 = {"82":1.7119989077918475e+308,"714":"X>","q":"","":893,"=g":"","|":"e","b":"","*":1.186040551622807e+308,"L]":1.437186133221307e+308};
var base_0 = [714,82,595,59,893,-1,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,82,595,59,893,-1,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,82,595,59,893,-1,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,82,595,59,893,-1,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test378.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)