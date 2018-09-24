





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = null
base_0[6] = [122,"<qV4c`","(",122,"1",1.7976931348623157e+308,823,"rdq"]
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = false
argument3[403] = [213,242,627,618,"E",655,49,"[<"]
argument4 = [25,823,655,49,460,618,100,893,82]
return a+b/c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[49] = null
argument6[3] = {"157":403,"":157,"}":"","h":1.4794037712942584e+308,":(":1.5198801044896707e+308,"6.16486122438665e+307":1.2223466590438952e+308,"8.142116820073286e+307":2.5767464912706133e+307,"8.545333508776179e+307":969,"8.577915460847899e+307":1.6427997860736851e+308}
return a*b*c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = true
argument8[893] = ""
argument9['T'] = null
return a-b-c
};
var argument8 = r_3;
var argument9 = true;
var base_0 = [705,49,122,82,-1,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,49,122,82,-1,595]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,49,122,82,-1,595]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,49,122,82,-1,595]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)