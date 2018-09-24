





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = false
base_0[4] = false
argument3[6] = null
return a-b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = false
argument4[0] = {"595":"w","655":"","893":"","Z":5.318086128366384e+307,"2.3412535508078415e+307":"","":"","1.7976931348623157e+308":"8","6.870273469026451e+307":627,"2.3866650431726305e+307":1.389285210791423e+308}
base_1[1][2] = {"122":7.459432243741982e+307,"460":4.079203453019957e+307,"9.540538352270333e+307":"XN","":893,"S`f":618,"7.433368801504152e+307":3.5928613408652325e+307}
return a-b-c/d
};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = {"126":714,"^":783,"":1.3974607973213151e+308,"6.884086187575244e+307":-100,"po=mx":6.191823963445398e+307,"=x=h":"3"}
return a+b-c/d
};
var argument5 = 9.883851566695801e+307;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
argument9[0] = null
return a-b*c/d
};
var argument8 = "y";
var base_0 = ["G","h",",|",242,"X_g",893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["G","h",",|",242,"X_g",893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["G","h",",|",242,"X_g",893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["G","h",",|",242,"X_g",893]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test228.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)