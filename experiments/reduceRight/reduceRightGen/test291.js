





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
argument2[25] = 1.3980452199203764e+308
return a*b-c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = [-100,969,403,126,403,157]
argument4[5] = [122,157,"9j",-1,"P"]
return a+b+c+d
};
var argument4 = 100;
var argument5 = 59;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
base_2['length'] = {")3":""}
base_2[4][1.7976931348623157e+308] = ""
return a*b*c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[-1] = [49,122,-1,823,618]
argument9['T'] = ""
return a+b+c-d
};
var base_0 = ["i",1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i",1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i",1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i",1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test291.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)