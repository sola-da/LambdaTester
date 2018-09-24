





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = "p"
argument3[1] = {"":"","3.0395610780161906e+307":""}
argument2 = {"25":"0:","49":"","100":"","":403,"4.526909356973172e+307":1.7279606867981723e+308}
return a+b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"893":"@","1.6935108354991854e+308":25,"1.4640526128022138e+308":1.0369232402692977e+308,"I":"","":"*","#J ":122}
argument4 = false
return a/b-c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = null
return a*b*c
};
var argument8 = r_2;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = null
base_3[5] = 100
argument11[705] = 843
return a-b/c
};
var argument11 = {"0":"","157":"","783":"","":8.985211469954258e+307,"a8r[":100,"e":1.3266549643863434e+308,"1.609748895695872e+307":",?kJ!","@":5e-324,"2.3294142448073667e+307":""};
var argument12 = r_1;
var base_0 = [783,969,705,843,705,59,403,893,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,969,705,843,705,59,403,893,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,969,705,843,705,59,403,893,157]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,969,705,843,705,59,403,893,157]
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
require("fs").writeFileSync("./experiments/find/findGen/test834.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)