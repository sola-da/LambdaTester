





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = "$+"
argument2[2][783] = {"":""}
argument2['wIs'] = null
return a*b-c
};
var argument2 = r_0;
var argument3 = "T";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = "e"
return a+b/c
};
var argument5 = [49,59,1.7976931348623157e+308,783,893,595,783,607,714];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7.92397107964922e+307] = {"714":1.7245637343978534e+308,"eR":6.763463921188818e+307,"-100":213,"Zcc>PH[yD":"${H,N","5.878866558346786e+306":"","I":126,"YQ":"","1.7976931348623157e+308":""}
argument7[6] = true
argument7['wIs'] = null
return a*b+c
};
var argument7 = r_0;
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = true
base_3[8] = {"0":"","49":460,"-100":5.788939132299474e+307,"A":"F","-":"","":893}
return a+b+c
};
var argument10 = [705,607,-1,-100,126,1.7976931348623157e+308,893,969];
var base_0 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,1.7976931348623157e+308,969,403,25,1.7976931348623157e+308,126,213,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)