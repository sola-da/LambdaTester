





var callbackArguments = [];
var argument1 = function (elt) {
 callbackArguments.push(arguments) 

    if (elt.value === v) {
        elt.undef = false;
        return v;
    }
};
var argument2 = function (needle) {
 callbackArguments.push(arguments) 

    return !some(arrs, function (haystack) {
        return contains(haystack, needle);
    });
};
var argument3 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument4 = r_2;
var argument5 = function (value, index, array) {
 callbackArguments.push(arguments) 

    return done || (done = !predicate(value, index, array));
};
var argument6 = null;
var argument7 = r_2;
var base_0 = [49,893,49,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,893,49,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,893,49,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,893,49,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test511.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)