





var callbackArguments = [];
var argument1 = null;
var argument2 = [157,783,49,-1,25];
var argument3 = {"403":"E","":8.375772733360172e+306,"1.1592991215897863e+308":1.5098342941357004e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = "G"
base_0['length'] = ""
base_0[1] = null
return a-b*c+d
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = "";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1277822633002616e+308] = ""
return a/b-c+d
};
var argument9 = "";
var argument10 = false;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = 242
return a*b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.1277822633002616e+308] = {"25":122,"607":157,"C_o[":"","h":3.1531802157249654e+307,"9.671944385054846e+307":"","N,":"Jnt","":8.818157972198254e+307,"j":1.6743865941724667e+308}
return a/b-c-d
};
var base_0 = ["Fi","%b","P","Y7"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Fi","%b","P","Y7"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Fi","%b","P","Y7"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Fi","%b","P","Y7"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)