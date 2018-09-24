





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 1.7976931348623157e+308
base_0[0][0] = {"126":1.5058154086215495e+308,"969":1.7976931348623157e+308,"QfO":"","Ng":"","9.035713855563055e+307":5.474784835080495e+307,"5.15776444684831e+307":"fq","7.044460396081833e+307":"eYuo","":"","1.588889527453394e+308":""}
argument2[122] = ["?",403,893,"#(",403]
return a/b-c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = [823,59,100,-1,49,25,242,595,-100]
base_2[2] = 100
return a-b*c
};
var argument7 = {"49":"","59":"i","157":242,"403":1.5639677141737007e+308,"595":2.0578443313457205e+306,"705":"","h":82,"1.0900251753627594e+308":";}OO{","+":""};
var argument8 = "3x";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
base_3[2] = null
return a*b-c
};
var base_0 = [969,705,893,49,595,595,783,823]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,705,893,49,595,595,783,823]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,705,893,49,595,595,783,823]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,705,893,49,595,595,783,823]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test85.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)