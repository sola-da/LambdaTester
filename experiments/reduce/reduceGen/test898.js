





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = [893,1.7976931348623157e+308,25]
base_0[0][9.12287810829114e+307] = null
argument3[7.889879335222838e+307] = {"157":"tOP","Fgv":126,"ghW)":""}
return a*b/c/d
};
var argument2 = {"2":"_LbL!","e|":"AG@D","":1.6189020687688848e+308,"W<UN":"",",":460,"]":"A"};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"126":"","783":"","893":82,"":705,"n!Y'":4.222424372578382e+307,"1.6236307811002237e+308":"7a","BIz5":5.454645787662102e+307,"O":"]Ze","d[5":"o2$yd#","-1":""}
argument4[2] = null
return a-b-c+d
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = false
argument8 = null
argument7['s'] = [" ","2","Sj8[B","r","A4","C","8","1","V71u9"]
return a-b/c/d
};
var argument8 = false;
var argument9 = {"460":49,"705":"V75","1.6274744274459616e+308":59,"1.3028387983014283e+308":"6","":122,"n":59};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.1277822633002616e+308] = [607,49,"_AA"]
return a+b*c*d
};
var argument11 = false;
var argument12 = [0,242];
var base_0 = [-100,213,242,82,969,783,-100,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,213,242,82,969,783,-100,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,213,242,82,969,783,-100,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,213,242,82,969,783,-100,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test898.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)