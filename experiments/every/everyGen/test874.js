





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = ["ph{}","m",":"]
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {}
base_1[2] = null
base_1[1][2] = {"82":"Q{","122":"","618":1.4711733941995158e+308,"":"","3.8094489678587116e+307":"r","1.4841542293433848e+308":595,"'":969,"WN&":3.0334163637380783e+307,"1.6554578508988482e+308":"","+%":"1"}
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = ["3","L","|","%","+$","+,","*"]
argument5['io'] = 1.7976931348623157e+308
return a-b-c
};
var argument5 = {"595":"","627":4.446771312481538e+307,"1.440111349616383e+308":"","":823,"3.1542537003817227e+307":49,":E":"","0<":1.7976931348623157e+308};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = "$"
argument9[5] = {"7":403,"59":"","627":6.634183071488961e+307,"7.235901552318455e+307":"","":"I","0LMb":6.181484001731327e+307,"1.1788490186428198e+308":"","+":"","1.06702053869618e+308":1.6031014553120698e+308}
argument9[8] = [618,618,705,460,893,705,5e-324,783,157]
return a+b/c
};
var argument8 = "";
var base_0 = [242,242,"=f","X",5e-324,"p","t)","=i",100,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,242,"=f","X",5e-324,"p","t)","=i",100,893]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,242,"=f","X",5e-324,"p","t)","=i",100,893]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,242,"=f","X",5e-324,"p","t)","=i",100,893]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test874.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)