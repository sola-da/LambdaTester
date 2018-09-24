





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    child.renderInteractive();
};
var argument2 = false;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    var parentRole = parent[p];
    parentRole && (this[p] = parentRole);
};
var argument4 = null;
var argument5 = [49,242,213,157,-1,157,126,100,783];
var argument6 = function (child) {
 callbackArguments.push(arguments) 

    child.destroyRecursive();
};
var argument7 = "_";
var argument8 = function (type) {
 callbackArguments.push(arguments) 

    _remove(element.target, gesture.defaultEvent + '.' + type);
};
var argument9 = false;
var argument10 = null;
var base_0 = ["|tb","D",213,";",595,157]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|tb","D",213,";",595,157]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|tb","D",213,";",595,157]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|tb","D",213,";",595,157]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test875.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)