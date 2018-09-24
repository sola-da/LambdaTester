





var callbackArguments = [];
var argument1 = function (memo, item) {
 callbackArguments.push(arguments) 

    var group;
    group = memo[memo.length - 1];
    if (group.length < count) {
        group.push(item);
    } else {
        memo.push([item]);
    }
    return memo;
};
var argument2 = true;
var argument3 = {"100":893,"157":460,"969":627,"1.481488662167942e+308":"","E)S":1.0409968788528605e+308,"1.240615044451071e+308":213,"":-100,"1.6726072457737271e+308":"","1.3225682766524541e+308":"-"};
var argument4 = function (result, child, idx) {
 callbackArguments.push(arguments) 

    var name = child.getKey(idx);
    result[name] = child;
    return result;
};
var argument5 = null;
var argument6 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument7 = function (previous, current) {
 callbackArguments.push(arguments) 

    return current < previous ? current : previous;
};
var base_0 = [126,126,-1,607,595,893,607,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,126,-1,607,595,893,607,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,126,-1,607,595,893,607,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,126,-1,607,595,893,607,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test763.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)