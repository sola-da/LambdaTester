





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5.262931091360336e+307] = false
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = null
argument4[1.4034744228995816e+308] = {"126":969,"823":1.3552313717799745e+308,"4P2IB":"",")o2":"","4.579036866645759e+307":"|TEX","6.615899850192069e+307":-1,"8.631380707418087e+307":"","":213}
base_1[0] = {"607":126,"1.7139163891234642e+308":5.706977311338548e+307,"":"Sb]K","6.989122695319369e+307":-1,"L":49,"8.553955652397617e+307":""}
return a*b/c
};
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = {"843":1.3042634391925187e+308,"":1.723622344679507e+308,"TDF^8":618,"-1":4.368264046794342e+307}
argument5['A'] = true
return a*b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = [-1,969,126,705,213,1.7976931348623157e+308]
argument7[3] = 618
base_3[6] = "jq"
return a*b*c
};
var argument7 = {"655":1.2160285980262396e+307,"893":"l","1.352052056972924e+308":9.347255630351497e+307,"":4.873070694998949e+307,"4.652954178808216e+307":1.7976931348623157e+308,"1.655244407770425e+308":"","S":126,"3.7752139430913124e+307":"E","1.576830666689897e+308":714};
var argument8 = r_2;
var base_0 = [823,122,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,122,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,122,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,122,893]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)