





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7847438319683965e+308] = false
argument2['K'] = ""
return a*b/c
};
var argument2 = {"59":"","82":"wn","213":"","627":"","893":9.850123319183311e+307,"":"","1.0914318076481525e+307":126,"1.3126877144218255e+308":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[242] = null
base_1[2][1] = 1.6586928498143751e+308
base_1[9] = {"9yf":"","3.9692369816058906e+307":"]","":783,"*":9.779922525650262e+306,"Y+0d]":"","j":1.33665356557379e+308,"6.58397324818726e+307":7.657686596820273e+305,";":""}
return a-b-c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[607] = 25
argument6['C'] = {"126":3.4543676204892456e+307,"I":82,"":"`","8.463500654685419e+307":" ","3.6683027285299415e+307":""}
base_2[1] = null
return a-b-c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 242
return a*b/c
};
var argument8 = false;
var argument9 = r_2;
var base_0 = ["!G"," ","V","o|"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!G"," ","V","o|"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!G"," ","V","o|"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/filter/filterGen/test950.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)