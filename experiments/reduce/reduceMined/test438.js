





var callbackArguments = [];
var argument1 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument2 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument3 = r_0;
var argument4 = false;
var argument5 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument6 = r_1;
var argument7 = function (memo, item) {
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
var base_0 = [403,460,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,460,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,460,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,460,122]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)