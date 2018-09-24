





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 1.1356601735829559e+308
return a*b*c
};
var argument2 = {"59":"","82":1.2646588471725252e+308,"823":3.360653466456975e+307,"":"xA","2.0668196639834492e+306":"","-1":403,"`":126,"1.7976931348623157e+308":"H`0m","6!":" ","PF":126};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.1881593224845412e+308] = ""
argument5[969] = null
return a+b+c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = false
argument7[460] = [59,242,242]
base_2['length'] = 126
return a-b+c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"157":"ty","655":82,"":82,"6.530099253087799e+307":"","-UbJ":"7","1.6761648762564886e+308":"YfD"}
argument9[403] = true
return a+b+c
};
var base_0 = [242,618,-1,705,122,893,122,59,100,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,618,-1,705,122,893,122,59,100,213]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,618,-1,705,122,893,122,59,100,213]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,618,-1,705,122,893,122,59,100,213]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test464.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)