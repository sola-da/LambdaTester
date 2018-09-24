





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[893] = {"59":"","969":"[=","":122,"1.0437535714272868e+308":1.0086460584314178e+308,"9.852924757138527e+307":"","R":"","1.0682864623843772e+308":"1"}
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AwD'] = null
argument4[25] = "mNT>8hY"
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1881593224845412e+308] = {"59":"0","100":"","595":714,"843":213,"":"mo","p@":9.305220446031204e+307,"8.60365013367113e+307":618,"4.759925642082162e+307":714,"C":"l","5.328371175195018e+307":""}
argument6 = "D"
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.1881593224845412e+308] = [607,122,627]
base_3[9] = true
return a+b-c
};
var base_0 = ["6%7:","x8r","N8","K!{","x"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6%7:","x8r","N8","K!{","x"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6%7:","x8r","N8","K!{","x"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6%7:","x8r","N8","K!{","x"]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)