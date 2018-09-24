





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][1.3434821406183095e+308] = 1.0043937881951879e+308
return a/b+c
};
var argument2 = false;
var argument3 = [49,460,1.7976931348623157e+308,655,0];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = {"655":"","":""}
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['c'] = {"59":"89","242":"","460":2.436651250318929e+307,"":"8v",";`":"J_","z":460,"1+":1.247721819886361e+308,"jZ":"{"}
return a+b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {"242":"","1.948549855209286e+307":2.994748898277165e+307,"":"","1.3459144280551128e+308":"w>"}
argument8 = {"122":2.847961530912833e+307,"#":"f","1.1166557477257628e+308":"%uS","h":"","":"B","1.3147398988955642e+308":"","{":"]","q?!":100}
return a/b/c
};
var argument8 = true;
var argument9 = r_3;
var base_0 = [5e-324,714,843,655,969,-1,595,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,714,843,655,969,-1,595,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,714,843,655,969,-1,595,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,714,843,655,969,-1,595,595]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test421.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)