





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[705] = 595
base_0[4] = true
base_0['length'] = ""
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[5] = {"8.320781739621465e+305":5.142021600442931e+307}
argument2 = {"25":"","714":"'A","x":"","M1":655}
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['LK'] = [1.7976931348623157e+308,"s",157,"Z(P","D!H",126,0,1.7976931348623157e+308]
base_2[6] = 1.3289963895290949e+308
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {}
argument5[3.7668525981726295e+307] = {"122":100,"157":"p&","460":"3P","607":"","":1.2266137432245282e+308,"]":"","-":"X","1.7712626543880507e+308":"","P":"^","'":1.1081493061187738e+307}
argument5[0] = [213,25,595,607,126,893,823,655,714,618]
return a+b-c
};
var base_0 = ["!","CW","xh ","K","n","@%","C","-"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","CW","xh ","K","n","@%","C","-"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","CW","xh ","K","n","@%","C","-"]
var r_2= undefined
try {
r_2 = base_2.find(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","CW","xh ","K","n","@%","C","-"]
var r_3= undefined
try {
r_3 = base_3.find(argument4)
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
require("fs").writeFileSync("./experiments/find/findGen/test470.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)