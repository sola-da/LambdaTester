





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = "F"
argument2[5] = {"25":"","":"p","*":"","6.513854214599903e+307":"","h<U=":"","C":893,"6.915120265193067e+307":4.1597266831507966e+307,"1.2443113910135908e+308":""}
argument2[0] = {"618":1.7976931348623157e+308,"":1.0935093030536988e+308,"1.050708518645899e+308":2.3665917855177267e+307,"1.0187119146299378e+308":595,"2.1878770515065988e+307":"r","bP":"","2F":1.7976931348623157e+308,"4.57333937617136e+307":1.0936091531169893e+308,"X":"2"}
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = 705
argument4[25] = {"R":2.1985352069303846e+307,"1.1995184847085822e+308":49,"e@b":"l","'4dc+?o":1.669403845757894e+308}
return a+b+c
};
var argument4 = 1.221637134911504e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = false
argument6 = ""
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[893] = null
return a*b/c
};
var base_0 = [705,823,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,823,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,823,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,823,-100]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test801.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)