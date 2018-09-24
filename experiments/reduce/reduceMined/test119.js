





var callbackArguments = [];
var argument1 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument2 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument3 = function (max, depName) {
 callbackArguments.push(arguments) 

    return data[depName] > max ? data[depName] : max;
};
var argument4 = null;
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument6 = 1.1468315288977058e+308;
var argument7 = true;
var base_0 = [82,460,126,126,705,122,969,705,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,460,126,126,705,122,969,705,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,460,126,126,705,122,969,705,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,460,126,126,705,122,969,705,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test119.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)