





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = {"3":"yh4i0u%y","5":"YJe","403":49,"783":"","1.615466308587798e+308":"","":1.285300785526097e+308}
argument1[2.1869172855352885e+307] = null
base_0[0][0] = null
return a/b-c*d
};
var argument2 = r_1;
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[90] = "H'"
return a-b-c-d
};
var argument6 = r_0;
var argument7 = "7";
var argument8 = "j";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
return a-b-c/d
};
var argument10 = ["xJ","E","]","*","k","(","P","w","G"];
var argument11 = true;
var argument12 = [607,460,25,1.7976931348623157e+308,-100,403,-1,59,607];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = 1.5880884683842116e+308
argument11[7.463432409233234e+307] = ["5"]
return a*b-c*d
};
var base_0 = ["l",1.7976931348623157e+308,0,"w",783,627,"ve6",655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l",1.7976931348623157e+308,0,"w",783,627,"ve6",655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l",1.7976931348623157e+308,0,"w",783,627,"ve6",655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l",1.7976931348623157e+308,0,"w",783,627,"ve6",655]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test347.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)