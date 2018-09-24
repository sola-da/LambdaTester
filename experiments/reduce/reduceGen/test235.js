





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = ""
return a/b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = ["}",0,"Pt+",0,"e:"]
argument6[1.1277822633002616e+308] = false
argument7[0] = 1.758522504560285e+308
return a/b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = "4"
argument6 = false
argument8[59] = ["b3","|w","%","f","j","U","I*6=o"]
return a-b-c+d
};
var argument7 = [5e-324,1.7976931348623157e+308,0,705,-1,1.7976931348623157e+308,714,25,823];
var argument8 = ["=Vs8","QK","qJ","r","M","CTj^","m","b"];
var argument9 = ["9a"];
var argument10 = 7.923115234763489e+307;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9] = 59
argument9[4] = ""
return a/b/c*d
};
var base_0 = [100,460,618,595,618,1.7976931348623157e+308,655,607,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,460,618,595,618,1.7976931348623157e+308,655,607,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,460,618,595,618,1.7976931348623157e+308,655,607,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,460,618,595,618,1.7976931348623157e+308,655,607,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test235.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)