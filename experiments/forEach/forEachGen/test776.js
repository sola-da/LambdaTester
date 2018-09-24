





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = {"82":5e-324,"":5.207057290330546e+307}
argument2[0] = false
argument3[8] = 0
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = true
return a*b*c
};
var argument3 = {"714":"u","":"r"};
var argument4 = ["%","@","l+;t>$]H","||OXKo","Y","U9ap","{`+","l@r"];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = true
return a-b-c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = {"213":"9w","655":"","":"","1.66951117195316e+308":"","1.1846266947484197e+308":893,"1.6665932209592254e+308":5e-324,"6.648481992543165e+307":"RV","f":4.626882492558709e+307}
argument8[-1] = {"e":"_*t","A":"M","d":627,"(>c":"","(bvojL":"B>R8"}
base_3 = null
return a/b/c
};
var argument8 = 1.4244618496426649e+308;
var argument9 = null;
var base_0 = ["f","C>R-","N","l%","Z","&E","B"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f","C>R-","N","l%","Z","&E","B"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f","C>R-","N","l%","Z","&E","B"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f","C>R-","N","l%","Z","&E","B"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)