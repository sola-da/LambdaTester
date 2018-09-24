





var callbackArguments = [];
var argument1 = 59;
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = [213,49,655,"K-","sHKoVj",100,"&"]
argument3 = {"627":3.1604300089476386e+305,"1.6145294753577944e+308":126,"D":1.4746670112090103e+308,"4.915245076762977e+307":"","":"Z","&A0":"8"}
return a/b+c/d
};
var argument5 = false;
var argument6 = null;
var argument7 = 6.626277427102211e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = {"3.7124754963685096e+307":1.8104265456341696e+307,"'":"t^","":"|","v":"g"}
return a+b/c-d
};
var argument9 = [823,242,0,5e-324,618,242,122,0,607,0];
var argument10 = null;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = ["?)]","E=",969,-100,"{(na",607,82]
argument10[3] = [969,122,705,1.7976931348623157e+308]
return a*b/c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 4.2732623886302695e+307
base_3[4] = 1.3313792727515801e+308
return a+b/c/d
};
var argument14 = 82;
var base_0 = [607,403,783,-100,607,843,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,403,783,-100,607,843,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,403,783,-100,607,843,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,403,783,-100,607,843,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test34.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)