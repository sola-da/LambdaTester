





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = [969,0,823,"Gs-"]
base_0[3][4] = 1.6599127565791688e+308
argument3[7.004668712060429e+307] = true
return a/b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = ["%","C"]
argument2[3] = {"6.798098696036065e+307":823}
base_1[1][2] = {"":"","1.462666062280213e+308":"xM"}
return a-b*c
};
var argument3 = false;
var argument4 = {"126":4.613569758849134e+307,"607":"u","-1":"2H<","":25};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = 1.7019762214390235e+308
base_2[0] = -1
base_2[6] = true
return a+b+c
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[705] = ""
return a/b*c
};
var base_0 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,59,1.7976931348623157e+308,25,213]
var r_3= undefined
try {
r_3 = base_3.some(argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)