





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return Math.floor(epsilon + v.dotProduct(n, v.substract(item, a))) <= 0;
};
var argument3 = false;
var argument4 = false;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument6 = ["Ei","U","|","?","J#","h5e","?","F"];
var argument7 = null;
var argument8 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument9 = [25,126,-100,-1,595,122];
var base_0 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,1.7976931348623157e+308,"0","+|*",213,"c5",1.7976931348623157e+308,969]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)