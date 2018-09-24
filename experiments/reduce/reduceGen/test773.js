





var callbackArguments = [];
var argument1 = true;
var argument2 = {"7":"g-64D","6.176753613729395e+307":"5","":1.1167787557308546e+308,"nFt":1.3713951224242728e+308};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = null
argument2[7.463432409233234e+307] = false
base_0[0][3] = true
return a*b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 5e-324
argument5[2] = {"618":49,"1.639573057422623e+308":"U","1.1060076646932397e+308":5.551144113137359e+307,"-100":"","1.529948130169562e+308":""}
argument6[82] = null
return a*b/c*d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7.889879335222838e+307] = false
argument9[90] = ""
argument7[2.1869172855352885e+307] = true
return a/b-c-d
};
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = ""
argument9[3] = [-1,242,25,59,242,-100,893,893]
argument9 = [655,607,126,25,460]
return a+b+c+d
};
var base_0 = ["j","V",969,"i","t","49#","3lQ4wC",783,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","V",969,"i","t","49#","3lQ4wC",783,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","V",969,"i","t","49#","3lQ4wC",783,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","V",969,"i","t","49#","3lQ4wC",783,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test773.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)