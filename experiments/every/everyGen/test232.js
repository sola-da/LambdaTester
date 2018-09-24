





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = false
base_0[0][1] = {"595":"w","655":"","893":"","Z":5.318086128366384e+307,"2.3412535508078415e+307":"","":"","1.7976931348623157e+308":"8","6.870273469026451e+307":627,"2.3866650431726305e+307":1.389285210791423e+308}
return a-b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = ["F","GS`f","RW","cd"]
return a-b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = {"100":1.2767463697162744e+308,"893":"lF","1.4910236985878668e+308":595,"":""}
return a*b-c
};
var argument6 = [126,"Uh","X#C",783,82,783,705,"&=x=h",100,213];
var argument7 = 9.883851566695801e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"618":"","y":5.004041121808952e+307,"":"FBvg","4.707532427023388e+306":1.5872966149323996e+308}
return a+b/c
};
var base_0 = [122,126,59,843,"Q",460,-100]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,126,59,843,"Q",460,-100]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,126,59,843,"Q",460,-100]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,126,59,843,"Q",460,-100]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test232.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)