





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {}
return a+b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[893] = false
argument6['!j'] = 618
argument6[1] = [969,823,714,403,969,595]
return a-b/c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = 1.770451437088392e+308
base_2[2] = [5e-324,"P"]
argument9[0] = [893,893,157,595,59,0]
return a-b+c
};
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = {"5":"","242":"x","460":403,"655":1.4226576848728473e+308,"aMg":"","":"","2.2328615197842528e+307":9.181284151471662e+306,"!'":"","1.6784625853029251e+308":""}
return a*b*c
};
var argument11 = null;
var argument12 = false;
var base_0 = ["1",242,100,403,618,"c","#d","Ri"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["1",242,100,403,618,"c","#d","Ri"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["1",242,100,403,618,"c","#d","Ri"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["1",242,100,403,618,"c","#d","Ri"]
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
require("fs").writeFileSync("./experiments/find/findGen/test626.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)