





var callbackArguments = [];
var argument1 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, _.first(join)));
    Array.prototype.push.apply(acc, join);
    return acc;
};
var argument2 = true;
var argument3 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument4 = 9.682649628554629e+307;
var argument5 = function (acc, key) {
 callbackArguments.push(arguments) 

    acc[key] = options[key];
    return acc;
};
var argument6 = r_2;
var argument7 = function (memo, value) {
 callbackArguments.push(arguments) 

    return memo.concat(Array.isArray(value) ? flatten(value) : value);
};
var base_0 = [595,627,122,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,627,122,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,627,122,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,627,122,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)