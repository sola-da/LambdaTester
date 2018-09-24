





var callbackArguments = [];
var argument1 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof tree.Rule && r.variable === true) {
        hash[r.name] = r;
    }
    return hash;
};
var argument2 = function (length, delta) {
 callbackArguments.push(arguments) 

    return length + delta.getLength();
};
var argument3 = {"1.4596588547220522e+308":"a","":460,"1.2960284157390719e+308":"","1.1975773311661912e+308":1.1893031039768922e+308};
var argument4 = function (output, guest) {
 callbackArguments.push(arguments) 

    guest = extend({}, guest, { mealOptions: options.hash.meals });
    return output + options.fn(guest);
};
var argument5 = function (u, elem) {
 callbackArguments.push(arguments) 

    if (u.indexOf(elem) < 0) {
        u.push(elem);
    }
    return u;
};
var base_0 = ["0p","T","=Ma","-iy","="]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0p","T","=Ma","-iy","="]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0p","T","=Ma","-iy","="]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0p","T","=Ma","-iy","="]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)