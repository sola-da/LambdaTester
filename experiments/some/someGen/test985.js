





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = "V"
base_0[7] = ["x;lz","c","&"]
base_0[3][6] = "r"
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = false
argument6[2] = -1
base_1[8] = {"893":-100,"?[":1.0536955036862481e+308}
return a/b/c
};
var argument5 = false;
var argument6 = 1.3489300722515617e+308;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['_W'] = null
return a*b+c
};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = 100
return a-b*c
};
var argument10 = "i";
var argument11 = "h";
var base_0 = ["{+G1|","^pP","iX","),3f","m"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{+G1|","^pP","iX","),3f","m"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{+G1|","^pP","iX","),3f","m"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{+G1|","^pP","iX","),3f","m"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)