





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1869172855352885e+307] = {"100":969,"157":100,"242":"j","627":49,"843":1.7005920468361932e+308,"969":"3","":4.741612959078663e+307,"LK":627,"1.1827490542793048e+306":-1}
argument1[9] = true
return a+b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = null
return a/b/c/d
};
var argument3 = true;
var argument4 = [-100,893,213,460,5e-324,82,893,59,618];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = null
argument5 = 242
base_2[9] = ""
return a*b+c*d
};
var argument6 = [25,893,49,5e-324,242,403];
var argument7 = {"403":"","893":618,"":"",";":"","1.3222620688117873e+308":9.093319114657293e+307,"-100":403,"7.441143278029241e+307":1.4102481671254955e+308,"G":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7.463432409233234e+307] = {"126":1.5101735367945765e+308,"242":843,"403":2.3654017720433456e+307,"":1.7722917579249007e+308,"8.691391245139505e+307":595,"1.7976931348623157e+308":"@","1.1777561018768243e+308":" #","b":"<Gd","c;":5.692616949174869e+307}
base_3[0][3] = {"126":""}
argument10[59] = {"1.8700611047696698e+307":""}
return a*b+c/d
};
var base_0 = [157,82,893,714,122,893,1.7976931348623157e+308,969,893,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,82,893,714,122,893,1.7976931348623157e+308,969,893,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,82,893,714,122,893,1.7976931348623157e+308,969,893,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,82,893,714,122,893,1.7976931348623157e+308,969,893,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test375.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)