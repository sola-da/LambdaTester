





var callbackArguments = [];
var argument1 = function (object, digit) {
 callbackArguments.push(arguments) 

    object[digit] = 'invalid';
    return object;
};
var argument2 = [627,"5$8vE",59,705,"zl","!",5e-324,"%T",714];
var argument3 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument4 = null;
var argument5 = function (r, s) {
 callbackArguments.push(arguments) 

    r[o[s]] = s;
    return r;
};
var argument6 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var base_0 = [126,705,213,242,714,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,705,213,242,714,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,705,213,242,714,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument6)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)