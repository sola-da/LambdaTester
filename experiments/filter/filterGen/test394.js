





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = {}
return a*b*c
};
var argument2 = {"25":2.9639895079293507e+307,"100":7.883070690577162e+307,"126":"","2.782374140715197e+307":4.538967754353115e+307,"1.6932218525493407e+308":"HMm","-100":"","":"nTv","q":1.0575438346255562e+308};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = false
base_1['length'] = null
return a+b-c
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ["6","I","7"]
argument7 = ["h{","f"]
return a/b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.1679954109349114e+308] = null
argument9['wIs'] = {"25":"F","W|Z;-":893,"":49,"2.154778380009414e+307":""}
base_3[3][1.3434821406183095e+308] = ["HL","[Je7t"]
return a/b*c
};
var base_0 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";C",714,"$x",607,1.7976931348623157e+308,242,595,0,"Q"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test394.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)