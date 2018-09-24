





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = ""
argument2[5] = null
return a/b/c+d
};
var argument2 = 1.7976931348623157e+308;
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[595] = [403,0,126,82,49,655,714]
return a+b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = null
base_2[2] = {"2.7975314907795685e+305":1.0169668642311516e+308,"":618}
base_2 = 7.771349551919684e+307
return a-b*c/d
};
var argument7 = null;
var argument8 = true;
var argument9 = "uL";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.1277822633002616e+308] = 1.7767413912252041e+308
argument8[-1] = {"157":6.519792729534491e+305,"705":"","969":"","-100":893,"Eh":7.657106213318868e+307,"1.7976931348623157e+308":"Q"}
argument8[1] = ""
return a/b-c/d
};
var base_0 = [122,607,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,607,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,607,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,607,893]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test679.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)