





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument2 = null;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    context = this;
};
var argument5 = r_0;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = r_0;
var argument8 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument9 = false;
var argument10 = null;
var base_0 = [0,714,627,655,627,595,403,1.7976931348623157e+308,126]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,714,627,655,627,595,403,1.7976931348623157e+308,126]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,714,627,655,627,595,403,1.7976931348623157e+308,126]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,714,627,655,627,595,403,1.7976931348623157e+308,126]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test63.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)