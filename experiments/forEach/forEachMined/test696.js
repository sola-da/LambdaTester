





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    var source = c[vars.edges.source], target = c[vars.edges.target];
    var claim = target[vars.id.value] == primaryId ? source : target;
    claimed.push(claim[vars.id.value]);
};
var argument2 = function (value) {
 callbackArguments.push(arguments) 

    BOOLEAN_ELEMENTS[uppercase(value)] = true;
};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    keys.push(key);
};
var argument4 = "";
var argument5 = [627,100,783,25,595,607,655];
var argument6 = function (element) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1)
        children.push(element);
};
var argument7 = r_0;
var base_0 = [627,783,595,1.7976931348623157e+308,100,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,783,595,1.7976931348623157e+308,100,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,783,595,1.7976931348623157e+308,100,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,783,595,1.7976931348623157e+308,100,242]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)