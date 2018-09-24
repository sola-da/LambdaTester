





var callbackArguments = [];
var argument1 = function (childNode) {
 callbackArguments.push(arguments) 

    return childNode.container;
};
var argument2 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label;
};
var argument3 = null;
var argument4 = function (chunk) {
 callbackArguments.push(arguments) 

    return chunk.toString(encoding);
};
var argument5 = {"=":1.7976931348623157e+308,"":5.764489555008803e+307,"1.795042430955286e+308":"","X":607,"e":""};
var argument6 = true;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument8 = r_0;
var argument9 = r_1;
var base_0 = [":l","M","7","s"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":l","M","7","s"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":l","M","7","s"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)