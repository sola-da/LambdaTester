





var callbackArguments = [];
var argument1 = function (total, xA) {
 callbackArguments.push(arguments) 

    return total + getScore(xA, sampleB);
};
var argument2 = "";
var argument3 = function (max, depName) {
 callbackArguments.push(arguments) 

    return data[depName] > max ? data[depName] : max;
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function (memo, el, i) {
 callbackArguments.push(arguments) 

    if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el)))
        memo[memo.length] = el;
    return memo;
};
var argument7 = null;
var argument8 = "wdz";
var argument9 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument10 = ["I",705,49,126,"H","`","Hg",403,"4y ","p:F"];
var base_0 = [403,157,0,1.7976931348623157e+308,213,213,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,157,0,1.7976931348623157e+308,213,213,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,157,0,1.7976931348623157e+308,213,213,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,157,0,1.7976931348623157e+308,213,213,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)