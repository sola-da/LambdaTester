





var callbackArguments = [];
var argument1 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 2 && el.char === 'B';
};
var argument2 = function (inRole) {
 callbackArguments.push(arguments) 

    debug('isInRole() returns: %j', inRole);
    if (callback)
        callback(null, inRole);
};
var argument3 = ["p","nU"];
var argument4 = null;
var argument5 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument6 = true;
var argument7 = 82;
var argument8 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument9 = 1.5864311510432763e+308;
var base_0 = ["^","kJ8","4","OM","RR","u","u4","[","=","J]"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","kJ8","4","OM","RR","u","u4","[","=","J]"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","kJ8","4","OM","RR","u","u4","[","=","J]"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","kJ8","4","OM","RR","u","u4","[","=","J]"]
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
require("fs").writeFileSync("./experiments/some/someMined/test932.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)