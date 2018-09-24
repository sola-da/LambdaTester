





var callbackArguments = [];
var argument1 = function (sum, x) {
 callbackArguments.push(arguments) 

    return sum + x;
};
var argument2 = null;
var argument3 = function (acc, e) {
 callbackArguments.push(arguments) 

    if (acc.indexOf("Error") === -1) {
        acc.push("Error");
    }
    return acc;
};
var argument4 = r_1;
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev || cur(entity);
};
var argument6 = function (count, p) {
 callbackArguments.push(arguments) 

    if (p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument7 = ["9","(","n%","f;"];
var base_0 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","m9FaCU)U&","X","t","S","^","_`EJ"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test174.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)