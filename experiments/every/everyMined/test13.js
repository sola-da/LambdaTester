





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var filter = self._filters[key], value = data[key];
    return filter.match && filter.match.test(value) || filter.isValid && filter.isValid(value) || filter.target === value ? true : false;
};
var argument5 = r_1;
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument7 = r_0;
var argument8 = {"5":"M","4.048616183028937e+307":8.956179201625064e+307,"":"","1.3232215670478996e+308":"('","1.7976931348623157e+308":"","q":6.97405181258654e+307,"A=":49};
var argument9 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument10 = 783;
var argument11 = false;
var base_0 = [",",122,403,"|#","hg_O{","y",823,"DPL:"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",",122,403,"|#","hg_O{","y",823,"DPL:"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",",122,403,"|#","hg_O{","y",823,"DPL:"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",",122,403,"|#","hg_O{","y",823,"DPL:"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyMined/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)