





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['3Tpj5'] = {"607":1.5968150560131801e+308,"":893,"]":"","5e-324":"NC`"}
argument3[0] = ""
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['a8r['] = true
argument4['t'] = ["quh#","Z",242,213]
argument5[7] = {"213":1.3580632840959168e+308,"595":"4]V","":"j"}
return a/b+c
};
var argument4 = false;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = {"0":"NWVv","1.0629702045368617e+307":1.2276950007356113e+308,"":"`W1","C#Va":1.626240081497494e+308,"1.6810193577737611e+307":1.5173119077934346e+308,"2.0243495147793704e+307":""}
argument7[2] = 4.955385038054377e+307
argument7 = false
return a*b/c
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1]['['] = null
argument10[8] = [82,5e-324,25,893]
return a*b/c
};
var base_0 = [5e-324,25,126,705,595,126,122,-100,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,25,126,705,595,126,122,-100,82]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,25,126,705,595,126,122,-100,82]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)