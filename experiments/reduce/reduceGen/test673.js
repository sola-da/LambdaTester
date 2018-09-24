





var callbackArguments = [];
var argument1 = [595,627,705,-100,100];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = null
argument3[655] = ["P","iO","Y","Z","A","@","qS","K","6K3","R#"]
base_0[2] = "t"
return a+b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"126":"","!O@":"2L(oh-%","1.6072952751237862e+308":8.771719385017646e+307,"":-1,"1.7976931348623157e+308":"","1.5520724545491827e+308":"","4.638779783039627e+307":"","1.5414785107009474e+308":"-D","4.204963797592348e+306":607}
argument5[3] = null
argument5[8] = true
return a/b+c+d
};
var argument6 = r_0;
var argument7 = null;
var argument8 = true;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {}
base_2[1][3] = {"213":"","":9.665900857961654e+307,"1.2599699125824873e+308":" "}
return a*b/c*d
};
var argument10 = r_3;
var argument11 = [1.7976931348623157e+308,122,-100];
var argument12 = [25,"e","F","LkM_0","M6",100,242];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['*c'] = false
return a+b+c+d
};
var base_0 = [1.7976931348623157e+308,823,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,823,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,823,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,823,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test673.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)