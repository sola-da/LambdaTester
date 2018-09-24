





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument2 = null;
var argument3 = function (cp) {
 callbackArguments.push(arguments) 

    return cpHasOriginalValues(co, cp);
};
var argument4 = {"8":"","R+":1.6578896047179117e+308,"fD":"","":1.162672938857025e+308,"9.6167907435392e+307":3.3600723624746206e+307,"6.770128744136145e+307":969};
var argument5 = r_1;
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument7 = true;
var argument8 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.getDocTooltip)
        doc = completer.getDocTooltip(selected);
    return doc;
};
var argument9 = null;
var base_0 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bQ9","G","J@{","cf","Fr","V","{","7"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test727.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)