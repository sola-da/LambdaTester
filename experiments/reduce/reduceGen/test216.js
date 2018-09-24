





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"714":783,"":1.7088943693890705e+308}
argument2[1.1277822633002616e+308] = false
argument2[213] = ""
return a-b-c/d
};
var argument2 = [213,618,783,403,25,49,403,100];
var argument3 = {"7":"GF","403":2.692319671688838e+306,"B":8.046318577065499e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['Cb'] = 9.12284058087991e+307
argument5[1.1277822633002616e+308] = null
argument5[4] = true
return a*b*c*d
};
var argument5 = null;
var argument6 = false;
var argument7 = [157,-100,969,-100,618,403,49,705];
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9] = null
return a*b-c*d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[4] = false
argument11[3] = 1.4226725676232154e+308
return a+b+c/d
};
var argument11 = r_3;
var base_0 = ["fsW","zs<VK"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fsW","zs<VK"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fsW","zs<VK"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fsW","zs<VK"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test216.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)