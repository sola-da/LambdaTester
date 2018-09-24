





var callbackArguments = [];
var argument1 = {"3":"","82":"","655":"","783":"","":"","s<t":"O","7.488291566363502e+306":1.5217171167531933e+308,"]q0":"?N1","T-G,":122};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = 1.0179874100193105e+307
argument3[4] = {"100":0,"714":4.672756422663865e+307,"fz":3.9963357080505725e+307,"":"","-100":8.895077090135743e+307,"A":"ul!M"," ":"5FP"}
return a-b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = ["P1","<nU","Q"]
argument6[82] = "2(X"
argument7['*c'] = {"783":"","893":1.7682861352579748e+307,"5.094326806926298e+307":"l"}
return a-b*c-d
};
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
base_2 = null
return a*b+c*d
};
var argument8 = r_1;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = 1.5187124283467799e+308
return a-b-c-d
};
var argument11 = r_1;
var base_0 = [595,607,59,242,714,783,893,607,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,59,242,714,783,893,607,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,59,242,714,783,893,607,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,59,242,714,783,893,607,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test468.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)