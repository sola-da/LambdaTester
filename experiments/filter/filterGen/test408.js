





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"157":1.63604860493605e+308,"403":6.506486406432285e+306,"655":823,"R":4.067189780605922e+307,"":"","I":1.3279959198054731e+308}
argument2[1.1679954109349114e+308] = "h"
return a*b/c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = 6.023477333241113e+307
argument4[-1] = {"":"KU",";":"w","UY":"p^HY#H","'>":823,"2.947014935337902e+307":49,"p2":705,"q":"QRc"}
return a-b*c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"122":"","655":"","-100":59,"1.0360367152870218e+308":157,"":"fn","+":"7","WU":1.6261163229952454e+308,"mx":"R@Q|"}
argument7[7] = false
return a/b+c
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = {"1.0476867799810607e+308":""}
argument9[4] = null
argument9[714] = {"213":"s","":0,"5e-324":"!I"}
return a+b/c
};
var base_0 = ["y4",595,893,"jqQ","I"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y4",595,893,"jqQ","I"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y4",595,893,"jqQ","I"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y4",595,893,"jqQ","I"]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test408.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)