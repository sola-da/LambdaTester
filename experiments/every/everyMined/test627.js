





var callbackArguments = [];
var argument1 = function (elem) {
 callbackArguments.push(arguments) 

    return superset.indexOf(elem) !== -1;
};
var argument2 = null;
var argument3 = "";
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument5 = 49;
var argument6 = function (v, i) {
 callbackArguments.push(arguments) 

    return v === a2[i];
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument10 = r_1;
var base_0 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","H",59,"4r","n7^uwda","MC","=<ir"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyMined/test627.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)