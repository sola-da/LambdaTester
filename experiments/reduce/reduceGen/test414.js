





var callbackArguments = [];
var argument1 = -1;
var argument2 = false;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = "wCl"
argument3[3] = 1.0550377195281695e+308
argument3['18{'] = [25,893,59,157,122,25,893]
return a+b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = {"25":0,"":"|t"}
argument6[2] = 1.7976931348623157e+308
base_1[1] = false
return a-b+c-d
};
var argument6 = false;
var argument7 = r_2;
var argument8 = {"403":"","":"7}","-1":595,"1.2914288996794494e+308":655,"1.4542750134075283e+308":"","5e-324":1.2522299132567939e+308,"8.406810138915523e+306":"m","J$-":2.8198366532876196e+307,"1.4240203058220243e+308":403};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.463432409233234e+307] = 627
argument6[1] = "36w5P"
return a-b*c-d
};
var argument10 = false;
var argument11 = {"157":9.034798370101516e+307,"460":"T","":"","7.690700140420464e+307":"","1.2222630274622548e+308":"o'","A":100};
var argument12 = {"1":-100,"714":1.3427852818549451e+308,"893":714,",lDM":5.189823068142895e+306,"=:":"","":2.8745636649392593e+305,"D":5.3834233729487343e+306,"s,m":"7A","d":""};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[6.35085648319999e+307] = ["ksN","[","4","v","0&m","ieH","q"]
return a-b*c-d
};
var base_0 = [242,-1,"y",122,714,"wF","1B",714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-1,"y",122,714,"wF","1B",714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-1,"y",122,714,"wF","1B",714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-1,"y",122,714,"wF","1B",714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test414.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)