





var callbackArguments = [];
var argument1 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument5 = r_1;
var argument6 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument7 = r_1;
var argument8 = function (a, branch) {
 callbackArguments.push(arguments) 

    return a.concat(branch.body);
};
var argument9 = true;
var argument10 = 100;
var base_0 = [242,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test849.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)