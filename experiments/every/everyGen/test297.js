





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [5e-324,25,969,705,242,25,82,157,403]
argument2[122] = null
return a+b-c
};
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = 1.6156849221553261e+308
base_1[0] = 618
argument6[3] = true
return a/b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b*c
};
var argument7 = r_1;
var argument8 = {"1.1452354785863483e+308":"","":"-_v","1.61032483160432e+308":"","5.813420960467873e+307":1.122187645101517e+308,"I+":126,"S(":714,"l":-100,"-100":5.327787987620174e+307,"m":"V","c":460};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = false
return a/b-c
};
var argument10 = true;
var argument11 = r_1;
var base_0 = [-100,49,403,126,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,49,403,126,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,49,403,126,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,49,403,126,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test297.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)