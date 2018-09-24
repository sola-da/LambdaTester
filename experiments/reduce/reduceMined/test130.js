





var callbackArguments = [];
var argument1 = function (systems, name) {
 callbackArguments.push(arguments) 

    systems[name] = list[name].system;
    return systems;
};
var argument2 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo[memo.length] = el;
    return memo;
};
var argument3 = r_0;
var argument4 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument5 = r_2;
var argument6 = function (sum, x) {
 callbackArguments.push(arguments) 

    return sum + x;
};
var argument7 = "?";
var base_0 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)