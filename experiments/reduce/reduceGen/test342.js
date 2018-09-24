





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = {"4.538967754353115e+307":1.6932218525493407e+308,"HMm":-100};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = false
base_0[7] = ""
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = true
return a/b-c*d
};
var argument6 = r_1;
var argument7 = [843,157,714,627,-100,82,213,-100,595,-100];
var argument8 = false;
var argument9 = false;
var argument10 = r_1;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[627] = {"aw":"{","q":25,"1.4521278080188225e+308":"_'wA","8.666696375898102e+307":705,"8.988199200602447e+307":6.345778397287683e+307,"-":1.2897233726693175e+308}
argument9[1.1277822633002616e+308] = [705,893,25,460,655]
return a*b-c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
argument13[7] = {"5":"@","49":2.154778380009414e+307,"705":"","":1.9897757054128096e+307,"F":"","HL":"","2.413623469675959e+307":1.1398859401628632e+308,"1.3629158360170426e+308":""}
return a-b+c*d
};
var argument13 = r_1;
var base_0 = [893,-1,705,969,-100,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-1,705,969,-100,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-1,705,969,-100,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-1,705,969,-100,783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test342.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)