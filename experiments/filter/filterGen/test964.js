





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ""
argument2[8] = null
base_0[4][2] = 1.138912388959285e+308
return a/b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = ""
return a/b-c
};
var argument4 = {"25":9.05902708388046e+307,"122":49,"460":1.3731297817606337e+308,"618":-1,"893":1.0068466106386927e+308,"-1":"","?k":"","BC2Yd":1.7976931348623157e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[705] = ["JxF","J7","np=","Bb","F","D)","q"]
argument6 = ""
argument7[242] = false
return a-b+c
};
var argument6 = "{";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = "Z"
base_3[3][1.3434821406183095e+308] = 1.1481121372416885e+308
argument8[1.7976931348623157e+308] = "Br"
return a+b-c
};
var argument8 = null;
var argument9 = {"403":714,"627":9.694432820068523e+307,"k":"","#":"J",";5":"=","b":"A","-100":1.2085704582392081e+307};
var base_0 = ["fW:","["]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fW:","["]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fW:","["]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test964.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)