





var callbackArguments = [];
var argument1 = ["t!","_^^YLf","Y","]+","Wm(",":J"];
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"1.7976931348623157e+308":"","":-100,"O":"o"}
argument1 = ["Md=T"]
return a*b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = null
argument7[627] = 242
return a+b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"0":82,"460":969,"627":"i","655":1.0574283919266698e+308,"893":"","4.384207745560948e+307":"","":"","c":157}
return a-b-c-d
};
var argument7 = 6.282601380523191e+307;
var argument8 = false;
var argument9 = r_3;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [-100,595,714,0,627,126,122,705]
argument9['*c'] = null
return a/b-c/d
};
var base_0 = [0,-100,126,82,59,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,-100,126,82,59,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,-100,126,82,59,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,-100,126,82,59,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)