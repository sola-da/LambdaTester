





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = ""
base_0[1] = ""
return a-b+c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [1.7976931348623157e+308,595,49,0,82]
base_1[7] = "ti!"
return a*b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = "NbM"
base_2[2] = {"157":"5%","714":714,"":1.1355955927777491e+308,"h":"(<","3.46378570437083e+306":627,"DmW'":627,"1.720611043027593e+308":"]","d":242}
return a-b/c
};
var argument7 = true;
var argument8 = 403;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][2] = 5e-324
base_3[1][4] = {"59":"+","100":"]X","823":705,"qH":7.302501394738578e+307,"":"Z!","7.634564336577639e+307":""}
base_3[1] = "1!"
return a+b/c
};
var argument10 = true;
var argument11 = r_2;
var base_0 = ["(j","g","O","t(","vsM6"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(j","g","O","t(","vsM6"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(j","g","O","t(","vsM6"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test66.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)