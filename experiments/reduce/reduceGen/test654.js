





var callbackArguments = [];
var argument1 = "";
var argument2 = -1;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = null
argument2[2] = 122
argument2[0] = {"0":"","655":"[","p":3.7438498541192683e+307,"-":"4","X":" E","3.7970845650807723e+307":8.952286152952071e+307,"K":""}
return a+b*c+d
};
var argument5 = r_0;
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = true
argument6[403] = ":"
return a-b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = true
base_2[3][1] = false
argument11[0] = "<"
return a*b-c+d
};
var argument10 = null;
var argument11 = [714,607,"q<","1","F"];
var argument12 = true;
var argument13 = {"126":82,"5.705922235444635e+307":"","":8.712880867832713e+307,"5FmDK":"","-100":"","1.7976931348623157e+308":"w@","Vz":0};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[0] = [49,714,122,1.7976931348623157e+308,242,714,705]
return a+b*c-d
};
var base_0 = [100,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test654.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)