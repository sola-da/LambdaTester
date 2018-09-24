





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = {"":"jn","-1":9.430406622897218e+307}
argument3['V'] = [1.7976931348623157e+308,403,59,627,242,-100,122,893,-100]
return a-b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[100] = false
base_1[0][3] = true
return a-b-c
};
var argument4 = r_0;
var argument5 = "4$";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ["z)","u1"]
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = [595,607,49,"f"]
argument8[7] = "Q"
argument8[242] = {"5.671630842312328e+306":"07",",":969,"":"","pUf<=":0,",f":"hv>","_m":"","1.473779378272734e+308":"","1.2434180084069292e+308":"","1.6771859213783019e+308":"","G":1.7026953276819402e+307}
return a-b*c
};
var base_0 = [714,"qO","-","I|",1.7976931348623157e+308,"-","k","<","gZmex"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"qO","-","I|",1.7976931348623157e+308,"-","k","<","gZmex"]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"qO","-","I|",1.7976931348623157e+308,"-","k","<","gZmex"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"qO","-","I|",1.7976931348623157e+308,"-","k","<","gZmex"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)