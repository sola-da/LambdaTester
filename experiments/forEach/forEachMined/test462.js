





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    prop._walk(visitor);
};
var argument2 = "";
var argument3 = function (ct) {
 callbackArguments.push(arguments) 

    var complexType = parseCsdlComplexType(ct, schema, metadataStore);
};
var argument4 = [783];
var argument5 = function (player) {
 callbackArguments.push(arguments) 

    player.fullName = player.firstName + (player.lastName ? ' ' + player.lastName : '');
};
var argument6 = [59,618,100,213,1.7976931348623157e+308,-1,783,607];
var argument7 = function (fkName, i) {
 callbackArguments.push(arguments) 

    newValue.setProperty(fkName, pkValues[i]);
};
var base_0 = [403,"g","|"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"g","|"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"g","|"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"g","|"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test462.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)