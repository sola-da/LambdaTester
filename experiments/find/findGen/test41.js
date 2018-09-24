





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 7.775984727109039e+307
return a-b/c
};
var argument2 = true;
var argument3 = -100;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = true
return a+b-c
};
var argument5 = {"714":"e","":"","}O":1.7224624370648897e+308,"=":"$"};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = 1.332868279117913e+308
base_2[0] = ""
argument8[0] = [893,242,705,-1,714,59,823,5e-324,25]
return a/b*c
};
var argument8 = null;
var argument9 = {"9":9.313205406231542e+307,"4.7181864671467807e+306":49,"1.7976931348623157e+308":"NK-"};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = ""
return a+b/c
};
var argument11 = r_0;
var argument12 = true;
var base_0 = [714,0,213,783,0,126,1.7976931348623157e+308,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,0,213,783,0,126,1.7976931348623157e+308,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,0,213,783,0,126,1.7976931348623157e+308,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,0,213,783,0,126,1.7976931348623157e+308,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/find/findGen/test41.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)