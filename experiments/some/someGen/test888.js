





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1]['{X'] = "$<"
base_0[3][3] = false
argument2[8] = {"1.104095841128329e+308":1.3985363743424228e+308,"*_Dz":705}
return a-b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = 7.296902308560259e+307
return a+b-c
};
var argument4 = r_1;
var argument5 = 1.0048353167360095e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = "0"
argument7[4] = null
return a+b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['{X'] = ["U$,","x","N(2","p","jM","F","B,","&I^","mU","D"]
argument10 = {"1.2190137533162378e+308":"$","1.7976931348623157e+308":595,"":783,"-":969}
return a-b/c
};
var base_0 = ["I","A","]","RN(","umH9bqb","-","v","SI"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","A","]","RN(","umH9bqb","-","v","SI"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","A","]","RN(","umH9bqb","-","v","SI"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","A","]","RN(","umH9bqb","-","v","SI"]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test888.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)