





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlNavProperty(entityType, prop, schema);
};
var argument2 = function (variable) {
 callbackArguments.push(arguments) 

    if (!variable.defs.length) {
        return;
    }
    var bindingSource;
    if ((bindingSource = symbolMap[variable.name]) && bindingSource !== scope && !isParameter(variable)) {
        reportShadow(variable.defs[0].name, variable.name);
    }
};
var argument3 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.restoreRange(subFold);
    this.addFold(subFold);
};
var argument4 = function (levelSpec) {
 callbackArguments.push(arguments) 

    levelSpec.bind(type);
};
var base_0 = [49,"[U",783,655,893,"q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"[U",783,655,893,"q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"[U",783,655,893,"q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"[U",783,655,893,"q"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test133.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)