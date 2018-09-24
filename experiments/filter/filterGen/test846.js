





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['#R[+'] = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7121211182125595e+308] = 403
base_1[3] = null
base_1[6] = [607,"G",714]
return a-b+c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.268696794505825e+308] = {"Ms":"","T":-1}
return a+b/c
};
var argument6 = {"1.6145796461318535e+308":4.8365837862197e+307,"5e-324":"b","5.064358406393175e+307":969,"":"",":":"<S","1.5673012995831527e+308":""};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = {"9":1.20134564473934e+308,"59":"v","":"","m?3":9.322764035629532e+307,"s?":1.954968471289429e+307,"j2t":0,"1.7976931348623157e+308":5.937008765920125e+307,"1.1571246174869248e+308":3.24739984844492e+307,"x":9.914057585852573e+307}
return a-b*c
};
var base_0 = [595,"N",714,82,460,"*",100,122,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"N",714,82,460,"*",100,122,655]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"N",714,82,460,"*",100,122,655]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"N",714,82,460,"*",100,122,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test846.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)