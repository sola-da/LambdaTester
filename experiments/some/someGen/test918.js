





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][0] = null
base_0 = [":","y","g",618,82,618]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.249941463060761e+307] = ["C:_1r{","E","p","*","<"]
base_1[1][0] = null
argument4['T'] = ""
return a-b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = false
argument5[4.224481734419934e+307] = null
return a/b/c
};
var argument5 = "_";
var base_0 = ["<",783,714,460,"y",627,157,"Ol",1.7976931348623157e+308,"a"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<",783,714,460,"y",627,157,"Ol",1.7976931348623157e+308,"a"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<",783,714,460,"y",627,157,"Ol",1.7976931348623157e+308,"a"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<",783,714,460,"y",627,157,"Ol",1.7976931348623157e+308,"a"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5)
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
require("fs").writeFileSync("./experiments/some/someGen/test918.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)