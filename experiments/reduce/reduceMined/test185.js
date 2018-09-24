





var callbackArguments = [];
var argument1 = function (count, p) {
 callbackArguments.push(arguments) 

    if (!p.name || p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument2 = r_0;
var argument3 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument4 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument5 = "e";
var argument6 = function (sum, suite) {
 callbackArguments.push(arguments) 

    return sum + suite.total();
};
var argument7 = r_1;
var argument8 = [82,100,403,714,705,893,-100,-1,714,595];
var base_0 = ["(","Q","kvs!","*","b","0j","N","_","tK{p"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","Q","kvs!","*","b","0j","N","_","tK{p"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","Q","kvs!","*","b","0j","N","_","tK{p"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","Q","kvs!","*","b","0j","N","_","tK{p"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test185.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)