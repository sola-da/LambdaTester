





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = [705,714,705,25]
argument2[618] = ""
return a-b-c
};
var argument2 = 595;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = false
argument4['A'] = {"893":1.7068091684123909e+308,"8.158844894513094e+307":460,"9.410557625386876e+307":"{8","G":";m","N|,":1.7381647991824007e+308,"1.7976931348623157e+308":714,"1.0409699276792175e+308":"V","":"3p"}
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['V'] = 1.552144371438522e+308
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = {"100":0,"":9.811869359215277e+307,"k":"Hx","AC#9":3.907247334770345e+307,"5.062225974852547e+307":"J"}
argument6[9.869573703797622e+307] = null
argument6[1.6177106033227046e+308] = true
return a+b+c
};
var argument6 = r_3;
var base_0 = ["%",823,"0+41>","RO",100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%",823,"0+41>","RO",100]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%",823,"0+41>","RO",100]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test696.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)