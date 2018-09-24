





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ""
argument3[7.889879335222838e+307] = [783]
base_0[1] = "i"
return a*b/c*d
};
var argument2 = false;
var argument3 = r_1;
var argument4 = true;
var argument5 = 4.528151800122024e+307;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = ",|"
argument5['*c'] = ""
return a*b-c+d
};
var argument7 = {"969":"","":"","8.504768325876441e+307":1.6572361950525398e+308,")ay];U":"0Y","|:W`":"","X":126,"Ac":"_6nd","O":783};
var argument8 = r_2;
var argument9 = false;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[100] = [595,823,49,607,1.7976931348623157e+308,213,5e-324]
argument7 = {"213":1.7155956626853865e+307,"893":2.2373446135817002e+307,"":1.7561970838219127e+308,";":"Z","5.128853976675855e+307":"","_":"sB","X":"tInR"}
argument9[1] = {"0":1.1371610706740794e+308,"7":1.1509483642751193e+308,"82":8.235923639988631e+307,"1.7976931348623157e+308":"mBb","+0[":"H","1.2758746465434318e+308":6.675744551297953e+307,"-":""}
return a/b/c+d
};
var argument11 = r_3;
var argument12 = [969,705,5e-324,1.7976931348623157e+308,0,1.7976931348623157e+308];
var argument13 = "";
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['*c'] = null
argument13[655] = ""
argument12[';N'] = "%3"
return a+b-c*d
};
var base_0 = ["nF*",403,"K",25]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["nF*",403,"K",25]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["nF*",403,"K",25]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["nF*",403,"K",25]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)