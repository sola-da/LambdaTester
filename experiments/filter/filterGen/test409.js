





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['c'] = [823,0,893,0,213]
return a*b-c
};
var argument2 = {"714":1.6765868423149165e+308,"1.382034702622121e+308":3.0943104169474083e+307,"1.0864805633994184e+308":1.1363402760518731e+308};
var argument3 = [655,655,-100,714];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.7847438319683965e+308] = 403
argument6[5] = ":PMEb_"
base_1[6] = ""
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = [">Y","T","PxJ","i","furE","k","B"]
base_2[1][0] = {"607":"","823":"","":823,"x0h":4.021156357623285e+307,"1.576183978278208e+308":""}
base_2 = ["L7X","3","mMS#","Zu_","c"," "]
return a-b*c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"122":843,"157":122,"1.6142292268207646e+308":122,"":"","1.1277159219282488e+308":843,"M":""}
base_3[4] = ["Xb","U","NHa","[","I","^w{i$","V","q","k"]
argument8['C'] = [0]
return a/b*c
};
var argument8 = {"x":1.7142768182891628e+308,"3.505151838432328e+307":"1","t":9.122710668900559e+307,"2.5633879697886958e+306":843};
var argument9 = 1.9313255263314024e+307;
var base_0 = ["$9{UdKz&","H","Bc","x"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$9{UdKz&","H","Bc","x"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)