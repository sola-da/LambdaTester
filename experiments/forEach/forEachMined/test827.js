





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    tops.push([
        v.d3plus.x,
        v.d3plus.y
    ]);
    bottoms.push([
        v.d3plus.x,
        v.d3plus.y0
    ]);
};
var argument2 = null;
var argument3 = function (def) {
 callbackArguments.push(arguments) 

    reportRedeclaration(def.name, def.name.name);
};
var argument4 = function cb_forEach(pattern) {
 callbackArguments.push(arguments) 

    this.addSimple(pattern);
};
var argument5 = function (_, i) {
 callbackArguments.push(arguments) 

    var fullKey = prefix + splittedKey.slice(0, i + 1).join('.');
    compiler.parser.plugin('can-rename ' + fullKey, function () {
        return true;
    });
};
var argument6 = true;
var argument7 = null;
var base_0 = ["P",")4","1","1","#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P",")4","1","1","#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P",")4","1","1","#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P",")4","1","1","#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test827.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)