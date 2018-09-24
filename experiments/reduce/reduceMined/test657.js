





var callbackArguments = [];
var argument1 = function (memo, value) {
 callbackArguments.push(arguments) 

    if (_.isArray(value))
        return memo.concat(_.flatten(value));
    memo[memo.length] = value;
    return memo;
};
var argument2 = ["]w","{","S","jz","J"];
var argument3 = false;
var argument4 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev.concat(cur);
};
var argument5 = null;
var argument6 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev.concat(cur);
};
var argument7 = function (previousValue, currentValue, index, array) {
 callbackArguments.push(arguments) 

    return array.join();
};
var base_0 = ["N|<H&%a","d","{a","]h","J","543c","0"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N|<H&%a","d","{a","]h","J","543c","0"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N|<H&%a","d","{a","]h","J","543c","0"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N|<H&%a","d","{a","]h","J","543c","0"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)