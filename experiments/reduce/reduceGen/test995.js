





var callbackArguments = [];
var argument1 = 7.265773632866241e+307;
var argument2 = null;
var argument3 = [607,705,126];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = ""
argument3[3] = {"714":82,"823":"t","2.0590170006526355e+307":"",">v":705,"":-1,"lx":"{","1.492915463398572e+307":"7","1.6979989947850318e+308":7.023334051896971e+307,"1.092087667758737e+308":627}
return a/b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['l&'] = null
base_1[2] = null
return a*b-c/d
};
var argument6 = [595,5e-324,82,893,-1];
var argument7 = 1.1441872508572974e+308;
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = false
argument6['Cb'] = false
return a*b+c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = null
argument12[1] = 595
argument11[1] = "+"
return a/b*c*d
};
var argument11 = null;
var argument12 = r_1;
var base_0 = [843,618,714,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,618,714,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,618,714,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,618,714,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test995.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)