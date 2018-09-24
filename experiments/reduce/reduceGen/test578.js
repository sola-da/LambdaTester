





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 9.737891514259171e+307
argument2 = ""
return a/b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = 0
base_1[1][0] = "3"
base_1[6] = ""
return a-b+c/d
};
var argument6 = "";
var argument7 = r_1;
var argument8 = true;
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = "-"
base_2[0][4] = 403
argument8[1.1277822633002616e+308] = null
return a*b-c/d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[126] = false
base_3[0][3] = true
return a*b+c-d
};
var argument12 = {"9T":783};
var argument13 = {"403":460,"823":893,"C":"","6.634447959813193e+307":"FV","":1.3552692680841453e+308,"1.6100032415945687e+308":"Eb","!":1.372974153492231e+308,"1.4708345263609128e+308":"gP","W":5.460023120384042e+307};
var base_0 = [403,1.7976931348623157e+308,607,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,1.7976931348623157e+308,607,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,1.7976931348623157e+308,607,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,1.7976931348623157e+308,607,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test578.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)