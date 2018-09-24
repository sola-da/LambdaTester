





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = [618,627,627]
argument2[1] = "@"
base_0[7] = true
return a-b+c
};
var argument2 = null;
var argument3 = {"1.2838471552759607e+308":1.183618446611853e+308};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = 1.691740869187667e+308
argument6[3.7154103611117224e+307] = {"157":"2","242":5.717861577368829e+307,"893":49,"":"G:y7","zE":1.4328261716464415e+307,"1.3758646172458237e+308":8.954694949297811e+307,"1.7342089621321824e+308":627,"1.3519061703884123e+308":"]","1.7551622729742891e+308":"","2.94181060160864e+307":""}
base_1[4][2] = 618
return a/b+c
};
var argument5 = "G";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.7154103611117224e+307] = [242,705,82,595,823,0,157,595]
return a/b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = ""
base_3[1]['!cck7Mm'] = ["0CG","m","A","#&t"]
base_3[4] = {"893":"_]","1.7976931348623157e+308":"d","":2.287192392495372e+307,"1.26850174334409e+308":7.667346353135682e+307,"9.065568984505817e+307":2.482908916231815e+307}
return a/b/c
};
var base_0 = ["v",893,"5",893,"W"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v",893,"5",893,"W"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v",893,"5",893,"W"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v",893,"5",893,"W"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)