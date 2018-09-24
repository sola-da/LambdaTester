





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = 6.412909839100579e+307
argument3[1] = null
argument3[-100] = 1.005995066517507e+308
return a-b*c
};
var argument2 = {"k":"","":7.256825275259277e+307,"l":5.91486289851296e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['jo'] = null
base_1[1] = {"714":"'","{":714,"!":"","$Pv":"LZ","":5e-324}
return a*b*c
};
var argument4 = "F";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = {}
argument6['7q('] = true
base_2[3][1.3434821406183095e+308] = "8"
return a*b-c
};
var argument6 = null;
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.2537850866485212e+307] = 893
argument9[893] = {"":"?`"}
argument9[1.268696794505825e+308] = ""
return a-b*c
};
var base_0 = [460,783,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,783,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,783,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,783,-100]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)