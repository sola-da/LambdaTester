





var callbackArguments = [];
var argument1 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument2 = false;
var argument3 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.getDocTooltip)
        doc = completer.getDocTooltip(selected);
    return doc;
};
var argument4 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument5 = function (et) {
 callbackArguments.push(arguments) 

    var group = this._findEntityGroup(et);
    ek = group && group.findEntityByKey(entityKey);
    return ek;
};
var argument6 = {"9":8.248375605689746e+307,"iQ":"","":2.864832914980868e+307,"1.1996628523310154e+308":1.5347135813630436e+308};
var argument7 = null;
var base_0 = [122,705,82,59,823,122,714,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,705,82,59,823,122,714,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,705,82,59,823,122,714,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,705,82,59,823,122,714,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test647.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)