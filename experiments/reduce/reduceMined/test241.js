





var callbackArguments = [];
var argument1 = function (result, key) {
 callbackArguments.push(arguments) 

    var pair = cb(obj[key], key, obj);
    result[pair[0]] = pair[1];
    return result;
};
var argument2 = true;
var argument3 = true;
var argument4 = function (obj, item) {
 callbackArguments.push(arguments) 

    obj[item] = 1;
    return obj;
};
var argument5 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument6 = "";
var argument7 = false;
var argument8 = function (pv, cv, ix) {
 callbackArguments.push(arguments) 

    return validateTarget(cv, ix) && pv;
};
var argument9 = [82,157,460,969,5e-324,705];
var argument10 = r_0;
var base_0 = [0,627,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,627,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,627,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,627,100]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)